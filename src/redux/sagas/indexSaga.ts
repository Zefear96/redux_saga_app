import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import { fetchPostsRequest } from "../reducers/postsSlice";
import { fetchUsersRequest } from "../reducers/usersSlice";
import { fetchPosts } from "./postsSaga";
import { fetchUsers } from "./usersSaga";
import { fetchComments } from "./comments";
import { fetchCommentsRequest } from "../reducers/commentsSlice";
import { fetchUserByIdRequest } from "../reducers/userByIdSlice";
import { fetchUserById } from "./userByIdSaga";

function* watchFetchRequest() {
	yield takeEvery(fetchPostsRequest, fetchPosts);
	yield takeEvery(fetchUsersRequest, fetchUsers);
	yield takeEvery(fetchCommentsRequest, fetchComments);
	yield takeEvery(fetchUserByIdRequest, fetchUserById);
}

export default function* rootSaga() {
	yield all([watchFetchRequest()]);
}
