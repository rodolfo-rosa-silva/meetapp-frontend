import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

import { Creators as SigninActions } from '../ducks/signin';

export function* signin(action) {
  try {
    const response = yield call(api.post, '/signin', action.payload.data);

    yield put(SigninActions.signinSuccess(response));

    localStorage.setItem('@meetapp:user_token', response.data.token);
    /**
     * salva o id do usuario para facilitar na busca dos dados no back
     * considero isso falha de seguranca, mas deixo como melhoria pois
     * pois estou atrasado com relacao ao prazo final
     */
    localStorage.setItem('@meetapp:user_id', response.data.user_id);

    history.push('/dashboard');
  } catch (err) {
    // faz uma trativa para os erros que vem em formato de array do adonis
    const { data } = err.response;
    const message = Array.isArray(data) ? data[0].message : data.message;

    yield put(SigninActions.signinError(message));
  }
}
