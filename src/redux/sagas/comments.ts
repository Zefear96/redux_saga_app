import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import {
	fetchCommentsFailure,
	fetchCommentsSuccess,
} from "../reducers/commentsSlice";

export function* fetchComments() {
	try {
		yield delay(500);
		const { data } = yield call(axios.get, `${API_URL}/comments`);
		yield put(fetchCommentsSuccess(data));
	} catch (error: any) {
		yield put(fetchCommentsFailure(error.message));
	}
}
