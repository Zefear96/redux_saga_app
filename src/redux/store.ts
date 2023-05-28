import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer, { fetchPostsRequest } from "./reducers";
import rootSaga from "./saga/postsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: false,
		}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

console.log(store.dispatch(fetchPostsRequest()));
