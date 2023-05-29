import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/indexSaga";
import postsReducer from "./reducers/postsSlice";
import usersReducer from "./reducers/usersSlice";
import commentsReducer from "./reducers/commentsSlice";
import userByIdReducer from "./reducers/userByIdSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	posts: postsReducer,
	users: usersReducer,
	comments: commentsReducer,
	userById: userByIdReducer,
});

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
