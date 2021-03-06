// ACTION TYPES
// REQUEST
// fetch dataset columns request
const FETCH_DATASET_COLUMNS_REQUEST = 'FETCH_DATASET_COLUMNS_REQUEST';
// update dataset column request
const UPDATE_DATASET_COLUMN_REQUEST = 'UPDATE_DATASET_COLUMN_REQUEST';
// create dataset request
const CREATE_DATASET_REQUEST = 'CREATE_DATASET_REQUEST';

// SUCCESS
// fetch dataset columns success
const FETCH_DATASET_COLUMNS_SUCCESS = 'FETCH_DATASET_COLUMNS_SUCCESS';
// update dataset column success
const UPDATE_DATASET_COLUMN_SUCCESS = 'UPDATE_DATASET_COLUMN_SUCCESS';
// create dataset success
const CREATE_DATASET_SUCCESS = 'CREATE_DATASET_SUCCESS';

// FAIL
// fetch dataset columns fail
const FETCH_DATASET_COLUMNS_FAIL = 'FETCH_DATASET_COLUMNS_FAIL';
// update dataset column fail
const UPDATE_DATASET_COLUMN_FAIL = 'UPDATE_DATASET_COLUMN_FAIL';
// create dataset fail
const CREATE_DATASET_FAIL = 'CREATE_DATASET_FAIL';

// CANCEL
// create dataset cancel
const CREATE_DATASET_CANCEL = 'CREATE_DATASET_CANCEL';

// GET DATASET
// request
const GET_DATASET_REQUEST = 'GET_DATASET_REQUEST';
// success
const GET_DATASET_SUCCESS = 'GET_DATASET_SUCCESS';
// fail
const GET_DATASET_FAIL = 'GET_DATASET_FAIL';

// DELETE DATASET
// request
const DELETE_DATASET_REQUEST = 'DELETE_DATASET_REQUEST';
// success
const DELETE_DATASET_SUCCESS = 'DELETE_DATASET_SUCCESS';
// fail
const DELETE_DATASET_FAIL = 'DELETE_DATASET_FAIL';

const SET_GOOGLE_DATASET_STATUS = 'SET_GOOGLE_DATASET_STATUS';

export default {
  // REQUEST
  FETCH_DATASET_COLUMNS_REQUEST,
  UPDATE_DATASET_COLUMN_REQUEST,
  CREATE_DATASET_REQUEST,

  // SUCCESS
  FETCH_DATASET_COLUMNS_SUCCESS,
  UPDATE_DATASET_COLUMN_SUCCESS,
  CREATE_DATASET_SUCCESS,

  // FAIL
  FETCH_DATASET_COLUMNS_FAIL,
  UPDATE_DATASET_COLUMN_FAIL,
  CREATE_DATASET_FAIL,

  // CANCEL
  CREATE_DATASET_CANCEL,

  // GET DATASET
  GET_DATASET_REQUEST,
  GET_DATASET_SUCCESS,
  GET_DATASET_FAIL,

  // DELETE DATASET
  DELETE_DATASET_REQUEST,
  DELETE_DATASET_SUCCESS,
  DELETE_DATASET_FAIL,

  SET_GOOGLE_DATASET_STATUS,
};
