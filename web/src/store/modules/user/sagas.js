import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      number,
      email,
      // eslint-disable-next-line camelcase
      direction_id,
      // eslint-disable-next-line camelcase
      area_id,
      // eslint-disable-next-line camelcase
      avatar_id,
      ...rest
    } = payload.data;

    const profile = {
      name,
      number,
      email,
      direction_id,
      area_id,
      avatar_id,

      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
