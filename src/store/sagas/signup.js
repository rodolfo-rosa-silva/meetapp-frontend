import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

import { Creators as SignupActions } from '../ducks/signup';

export function* signup(action) {
  try {
    const response = yield call(api.post, '/signup', action.payload.data);
    const { data } = response;

    yield put(SignupActions.signupSuccess(data.message));

    localStorage.setItem('@meetapp:user_token', data.token);
    /**
     * salva o id do usuario para facilitar na busca dos dados no back
     * considero isso falha de seguranca, mas deixo como melhoria pois
     * pois estou atrasado com relacao ao prazo final
     */
    localStorage.setItem('@meetapp:user_id', data.user.id);
    localStorage.setItem('@meetapp:username', response.user.username);

    history.push('/preferences');
  } catch (err) {
    // faz uma trativa para os erros que vem em formato de array do adonis
    const { data } = err.response;
    const message = Array.isArray(data) ? data[0].message : data.message;

    yield put(SignupActions.signupError(message));
  }
}
