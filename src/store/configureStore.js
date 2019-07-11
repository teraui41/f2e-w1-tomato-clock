import rootReducer from '../reducers';
import {createStore} from 'redux';

const configureStore = () =>
  createStore(rootReducer);

export default configureStore;
