import { take, call, put, takeLatest } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import api from 'services/api';

export function* getSamples() {
}

export function* watchSample() {
}

export default [
  watchSample,
];
