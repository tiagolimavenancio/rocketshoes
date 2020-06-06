import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks/';
import sagas from './ducks/sagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;
