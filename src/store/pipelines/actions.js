// ACTION TYPES
import actionTypes from './actionTypes';

// SERVICES
import pipelinesApi from '../../services/PipelinesApi';

// ACTIONS
// ** TRAIN EXPERIMENT
/**
 * train experiment success action
 * @returns {Object} { type }
 */
const trainExperimentSuccess = () => {
  return {
    type: actionTypes.TRAIN_EXPERIMENT_SUCCESS,
  };
};

/**
 * train experiment fail action
 * @param {Object} error
 * @returns {Object} { type, errorMessage }
 */
const trainExperimentFail = (error) => {
  // getting error message
  const errorMessage = error.message;

  return {
    type: actionTypes.TRAIN_EXPERIMENT_FAIL,
    errorMessage,
  };
};

/**
 * train experiment request action
 * @param {Object} experiment
 * @param {Object[]} operators
 * @returns {Function}
 */
export const trainExperimentRequest = (experiment, operators) => (dispatch) => {
  // dispatching request action
  dispatch({
    type: actionTypes.TRAIN_EXPERIMENT_REQUEST,
  });

  // getting experiment data
  const { uuid: experimentId, dataset, target } = experiment;

  // creating train object
  const trainObject = { experimentId, dataset, target };

  // getting operators
  trainObject.components = operators.map((operator) => ({
    operatorId: operator.uuid,
    notebookPath: operator.trainingNotebookPath,
  }));

  // filtering dataset
  trainObject.components = trainObject.components.filter(
    (operator) => operator.operatorId !== 'dataset'
  );

  // training experiment
  pipelinesApi
    .trainExperiment(trainObject)
    .then(() => dispatch(trainExperimentSuccess()))
    .catch((error) => dispatch(trainExperimentFail(error)));
};

// // // // // // // // // //

// ** GET TRAIN EXPERIMENT STATUS
/**
 * get train experiment status success action
 * @param {Object} response
 * @returns {Object} { type }
 */
const getTrainExperimentStatusSuccess = (response) => {
  // getting status from response
  const status = response.data;

  return {
    type: actionTypes.GET_TRAIN_EXPERIMENT_STATUS_SUCCESS,
    status,
  };
};

/**
 * get train experiment status fail action
 * @param {Object} error
 * @returns {Object} { type, errorMessage }
 */
const getTrainExperimentStatusFail = (error) => {
  // getting error message
  const errorMessage = error.message;

  return {
    type: actionTypes.GET_TRAIN_EXPERIMENT_STATUS_FAIL,
    errorMessage,
  };
};

/**
 * get train experiment status request action
 * @param {string} experimentId
 * @param {Object[]} operators
 * @returns {Function}
 */
export const getTrainExperimentStatusRequest = (experimentId) => (dispatch) => {
  // dispatching request action
  dispatch({
    type: actionTypes.GET_TRAIN_EXPERIMENT_STATUS_REQUEST,
  });

  // training experiment
  pipelinesApi
    .getTrainExperimentStatus(experimentId)
    .then((response) => dispatch(getTrainExperimentStatusSuccess(response)))
    .catch((error) => dispatch(getTrainExperimentStatusFail(error)));
};

// // // // // // // // // //