import normalize from 'json-api-normalize';
import { camelCase, isArray } from 'lodash';

const isObject = (object) =>
  object === Object(object);

const isDate = (attributeValue) =>
  Object.prototype.toString.call(attributeValue) === '[object Date]';

const getValidKeys = (data, parent, included) => {
  let validKeys = [];
  if (!isObject(data)) {
    return [];
  }
  if (!included) {
    included = data.included;
  }
  data = data.data || data;
  Object.keys(data).forEach((key) => {
    if (key === 'attributes') {
      validKeys = [...validKeys, ...getValidKeys(data[key], parent, included)];
    } else if (key === 'relationships') {
      Object.keys(data[key]).forEach((relation) => {
        const includedRelation = included.find((_) => _.type === `${relation}s`);
        validKeys = [
          ...validKeys,
          ...getValidKeys(data[key][relation], relation, included),
          ...getValidKeys(includedRelation, relation, []),
        ];
      });
    } else if (key !== 'type' || key === 'meta') {
      const validKey = parent ? `${parent}.${key}` : key;
      validKeys.push(validKey);
    }
  });
  return validKeys;
};

const camelizeNestedKeys = (attributeValue) => {
  if (attributeValue === null || typeof attributeValue !== 'object' || isDate(attributeValue)) {
    return attributeValue;
  }

  if (isArray(attributeValue)) {
    return attributeValue.map(camelizeNestedKeys);
  }

  const copy = {};

  Object.keys(attributeValue).forEach((k) => {
    copy[camelCase(k)] = camelizeNestedKeys(attributeValue[k]);
  });

  return copy;
};

export default (data) => camelizeNestedKeys(normalize(data).get(getValidKeys(data)));
