import { createStore } from 'redux';
import combinedReducers from './reducers';

export default function makeStore() {
    const store = createStore(combinedReducers);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(combinedReducers);
        });
    }

    return store;
}