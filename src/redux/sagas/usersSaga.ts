import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { fetchUsersFailure, fetchUsersSuccess } from "../reducers/usersSlice";

export function* fetchUsers() {
	try {
		yield delay(500);
		const { data } = yield call(axios.get, `${API_URL}/users`);
		yield put(fetchUsersSuccess(data));
	} catch (error: any) {
		yield put(fetchUsersFailure(error.message));
	}
}
