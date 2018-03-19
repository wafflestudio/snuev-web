const GeneratorFunction = (function* () {}).constructor; // eslint-disable-line

export default (_) => (_ instanceof GeneratorFunction);
