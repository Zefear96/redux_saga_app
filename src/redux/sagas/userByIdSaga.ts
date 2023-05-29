import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import {
	fetchUserByIdFailure,
	fetchUserByIdRequest,
	fetchUserByIdSuccessAction,
} from "../reducers/userByIdSlice";
import { AnyAction } from "redux";

export function* fetchUserById(action: AnyAction) {
	try {
		const id = action.payload;
		yield delay(50);
		const { data } = yield call(axios.get, `${API_URL}/users/${id}`);
		yield put(fetchUserByIdSuccessAction(data));
	} catch (error: any) {
		yield put(fetchUserByIdFailure(error.message));
	}
}
