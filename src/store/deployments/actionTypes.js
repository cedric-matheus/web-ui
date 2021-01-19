// ACTION TYPES
// REQUEST
// fetch deployments request
const FETCH_DEPLOYMENTS_REQUEST = 'FETCH_DEPLOYMENTS_REQUEST';
// create deployment request
const CREATE_DEPLOYMENT_REQUEST = 'CREATE_DEPLOYMENT_REQUEST';
// update deployment request
const UPDATE_DEPLOYMENT_REQUEST = 'EDIT_EXPERIMENT_NAME_REQUEST';
// delete deployment request
const DELETE_DEPLOYMENT_REQUEST = 'DELETE_DEPLOYMENT_REQUEST';

// SUCCESS
// fetch deployments request
const FETCH_DEPLOYMENTS_SUCCESS = 'FETCH_DEPLOYMENTS_REQUEST';
// create deployment success
const CREATE_DEPLOYMENT_SUCCESS = 'CREATE_DEPLOYMENT_SUCCESS';
// update deployment success
const UPDATE_DEPLOYMENT_SUCCESS = 'UPDATE_DEPLOYMENT_SUCCESS';
// delete deployment success
const DELETE_DEPLOYMENT_SUCCESS = 'DELETE_DEPLOYMENT_SUCCESS';

// FAIL
// fetch deployments request
const FETCH_DEPLOYMENTS_FAIL = 'FETCH_DEPLOYMENTS_FAIL';
// create deployment fail
const CREATE_DEPLOYMENT_FAIL = 'CREATE_DEPLOYMENT_FAIL';
// update deployment fail
const UPDATE_DEPLOYMENT_FAIL = 'UPDATE_DEPLOYMENT_FAIL';
// delete deployment fail
const DELETE_DEPLOYMENT_FAIL = 'DELETE_DEPLOYMENT_FAIL';

// UTILS
const CLEAR_ALL_DEPLOYMENTS = 'CLEAR_ALL_DEPLOYMENTS';

const RENAME_DEPLOYMENT_REQUEST = 'RENAME_DEPLOYMENT_REQUEST';
const RENAME_DEPLOYMENT_SUCCESS = 'RENAME_DEPLOYMENT_SUCCESS';
const RENAME_DEPLOYMENT_FAIL = 'RFAILENAME_DEPLOYMENT_FAIL';

// EXPORT
export default {
  // REQUEST
  FETCH_DEPLOYMENTS_REQUEST,
  CREATE_DEPLOYMENT_REQUEST,
  UPDATE_DEPLOYMENT_REQUEST,
  DELETE_DEPLOYMENT_REQUEST,
  RENAME_DEPLOYMENT_REQUEST,

  // SUCCESS
  FETCH_DEPLOYMENTS_SUCCESS,
  CREATE_DEPLOYMENT_SUCCESS,
  UPDATE_DEPLOYMENT_SUCCESS,
  DELETE_DEPLOYMENT_SUCCESS,
  RENAME_DEPLOYMENT_SUCCESS,

  // FAIL
  FETCH_DEPLOYMENTS_FAIL,
  CREATE_DEPLOYMENT_FAIL,
  UPDATE_DEPLOYMENT_FAIL,
  DELETE_DEPLOYMENT_FAIL,
  RENAME_DEPLOYMENT_FAIL,

  // UTILS
  CLEAR_ALL_DEPLOYMENTS,
};
