import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import { fetchPostsRequest } from "../reducers/postsSlice";
import { fetchUsersRequest } from "../reducers/usersSlice";
import { fetchPosts } from "./postsSaga";
import { fetchUsers } from "./usersSaga";
import { fetchComments } from "./comments";

function* watchFetchRequest() {
	yield takeEvery(fetchPostsRequest, fetchPosts);
	yield takeEvery(fetchUsersRequest, fetchUsers);
	yield takeEvery(fetchUsersRequest, fetchComments);
}

export default function* rootSaga() {
	yield all([watchFetchRequest()]);
}
