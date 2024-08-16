import { takeEvery, put } from "redux-saga/effects";
import { addFormSuccess, addForm, addFormFailure } from "./formSlice";
import { addDataSuccess, addData } from "./dataSlice";

function* handleAddForm(action) {
  try {
    // Call API to save the form
    yield put(addFormSuccess(action.payload));
  } catch (error) {
    yield put(addFormFailure(error.message));
  }
}

function* handleAddData(action) {
  yield put(addDataSuccess(action.payload));
}

export default function* rootSaga() {
  yield takeEvery(addForm.type, handleAddForm);
  yield takeEvery(addData.type, handleAddData);
}
