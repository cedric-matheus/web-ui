// ACTION TYPES
// COMPARE RESULTS MODAL
const ADD_COMPARE_RESULT_LOADER = 'ADD_COMPARE_RESULT_LOADER';
const DELETE_COMPARE_RESULT_LOADER = 'DELETE_COMPARE_RESULT_LOADER';
const VISIBILITY_COMPARE_RESULTS_MODAL = 'VISIBILITY_COMPARE_RESULTS_MODAL';
const LOADING_COMPARE_RESULTS_MODAL = 'LOADING_COMPARE_RESULTS_MODAL';

// NEW PROJECT MODAL
// show new project modal
const SHOW_NEW_PROJECT_MODAL = 'SHOW_NEW_PROJECT_MODAL';

// SHOW USING_DEPLOYMENTS_MODAL
//HIDE USING_DEPLOYMENTS_MODAL
const SHOW_USING_DEPLOYMENTS_MODAL = 'SHOW_USING_DEPLOYMENTS_MODAL';
const HIDE_USING_DEPLOYMENTS_MODAL = 'HIDE_USING_DEPLOYMENTS_MODAL';

// show edit project modal
const SHOW_EDIT_PROJECT_MODAL = 'SHOW_EDIT_PROJECT_MODAL';
// hide new project modal
const HIDE_NEW_PROJECT_MODAL = 'HIDE_NEW_PROJECT_MODAL';

// NEW EXPERIMENT MODAL
// show new experiment modal
const SHOW_NEW_EXPERIMENT_MODAL = 'SHOW_NEW_EXPERIMENT_MODAL';
// hide new experiment modal
const HIDE_NEW_EXPERIMENT_MODAL = 'HIDE_NEW_EXPERIMENT_MODAL';

// NEW TEMPLATE MODAL
// show new template modal
const SHOW_NEW_TEMPLATE_MODAL = 'SHOW_NEW_TEMPLATE_MODAL';
// hide new template modal
const HIDE_NEW_TEMPLATE_MODAL = 'HIDE_NEW_TEMPLATE_MODAL';

// DRAWER
// show drawer
const SHOW_OPERATOR_DRAWER = 'SHOW_OPERATOR_DRAWER';
// hide drawer
const HIDE_OPERATOR_DRAWER = 'HIDE_OPERATOR_DRAWER';

// OPERATOR RESULTS
// show operator results
const SHOW_OPERATOR_RESULTS = 'SHOW_OPERATOR_RESULTS';
// hide operator results
const HIDE_OPERATOR_RESULTS = 'HIDE_OPERATOR_RESULTS';

// TASKS TABLE
// loading data
const TASKS_TABLE_LOADING_DATA = 'TASKS_TABLE_LOADING_DATA';
// data loaded
const TASKS_TABLE_DATA_LOADED = 'TASKS_TABLE_DATA_LOADED';

// PROJECTS TABLE
// loading data
const PROJECTS_TABLE_LOADING_DATA = 'PROJECTS_TABLE_LOADING_DATA';
// data loaded
const PROJECTS_TABLE_DATA_LOADED = 'PROJECTS_TABLE_DATA_LOADED';

// PROJECT NAME
// loading data
const PROJECT_NAME_LOADING_DATA = 'PROJECT_NAME_LOADING_DATA';
// data loaded
const PROJECT_NAME_DATA_LOADED = 'PROJECT_NAME_DATA_LOADED';

// PROJECT EDIT NAME
// loading data
const PROJECT_EDIT_NAME_LOADING_DATA = 'PROJECT_EDIT_NAME_LOADING_DATA';
// data loaded
const PROJECT_EDIT_NAME_DATA_LOADED = 'PROJECT_EDIT_NAME_DATA_LOADED';

// TASKS MENU
// loading data
const TASKS_MENU_LOADING_DATA = 'TASKS_MENU_LOADING_DATA';
// data loaded
const TASKS_MENU_DATA_LOADED = 'TASKS_MENU_DATA_LOADED';

// DEPLOYMENTS TABS
const DEPLOYMENTS_TABS_LOADING_DATA = 'DEPLOYMENTS_TABS_DATA_LOADED';
const DEPLOYMENTS_TABS_DATA_LOADED = 'DEPLOYMENTS_TABS_DATA_LOADED';
const DEPLOYMENTS_TABS_HIDE_MODAL = 'DEPLOYMENTS_TABS_HIDE_MODAL';
const DEPLOYMENTS_TABS_SHOW_MODAL = 'DEPLOYMENTS_TABS_SHOW_MODAL';

// EXPERIMENTS TABS
// loading data
const EXPERIMENTS_TABS_LOADING_DATA = 'EXPERIMENTS_TABS_LOADING_DATA';
// data loaded
const EXPERIMENTS_TABS_DATA_LOADED = 'EXPERIMENTS_TABS_DATA_LOADED';

// EXPERIMENT NAME
// loading data
const EXPERIMENT_NAME_LOADING_DATA = 'EXPERIMENT_NAME_LOADING_DATA';
// data loaded
const EXPERIMENT_NAME_DATA_LOADED = 'EXPERIMENT_NAME_DATA_LOADED';

// EXPERIMENT OPERATORS
// loading data
const EXPERIMENT_OPERATORS_LOADING_DATA = 'EXPERIMENT_OPERATORS_LOADING_DATA';
// data loaded
const EXPERIMENT_OPERATORS_DATA_LOADED = 'EXPERIMENT_OPERATORS_DATA_LOADED';

// DATASETS LIST
// loading data
const DATASETS_LIST_LOADING_DATA = 'DATASETS_LIST_LOADING_DATA';
// data loaded
const DATASETS_LIST_DATA_LOADED = 'DATASETS_LIST_DATA_LOADED';

// DATASET OPERATOR
// loading data
const DATASET_OPERATOR_LOADING_DATA = 'DATASET_OPERATOR_LOADING_DATA';
// data loaded
const DATASET_OPERATOR_DATA_LOADED = 'DATASET_OPERATOR_DATA_LOADED';

// OPERATOR PARAMETER
// loading data
const OPERATOR_PARAMETER_LOADING_DATA = 'OPERATOR_PARAMETER_LOADING_DATA';
// data loaded
const OPERATOR_PARAMETER_DATA_LOADED = 'OPERATOR_PARAMETER_DATA_LOADED';

// OPERATOR RESULTS
const OPERATOR_RESULTS_LOADING_DATA = 'OPERATOR_RESULTS_LOADING_DATA';
const OPERATOR_RESULTS_DATA_LOADED = 'OPERATOR_RESULTS_DATA_LOADED';

// OPERATOR RESULTS DOWNLOAD DATASET
const OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADING =
  'OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADING';
const OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADED =
  'OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADED';

// TEMPLATE
// loading data (used in save template)
const TEMPLATE_LOADING_DATA = 'TEMPLATE_LOADING_DATA';
// data loaded (used in save template)
const TEMPLATE_DATA_LOADED = 'TEMPLATE_DATA_LOADED';

// IMPLANTED EXPERIMENTS
// loading data
const IMPLANTED_EXPERIMENTS_LOADING_DATA = 'IMPLANTED_EXPERIMENTS_LOADING_DATA';
// data loaded
const IMPLANTED_EXPERIMENTS_DATA_LOADED = 'IMPLANTED_EXPERIMENTS_DATA_LOADED';

// EXPERIMENT TRAINING
// loading data
const EXPERIMENT_TRAINING_LOADING_DATA = 'EXPERIMENT_TRAINING_LOADING_DATA';
// data loaded
const EXPERIMENT_TRAINING_DATA_LOADED = 'EXPERIMENT_TRAINING_DATA_LOADED';

// EXPERIMENT DELETE TRAINING
// loading data
const EXPERIMENT_DELETE_TRAINING_LOADING_DATA =
  'EXPERIMENT_DELETE_TRAINING_LOADING_DATA';
// data loaded
const EXPERIMENT_DELETE_TRAINING_DATA_LOADED =
  'EXPERIMENT_DELETE_TRAINING_DATA_LOADED';

// loading data
const OPERATOR_METRICS_LOADING_DATA = 'OPERATOR_METRICS_LOADING_DATA';
// data loaded
const OPERATOR_METRICS_DATA_LOADED = 'OPERATOR_METRICS_DATA_LOADED';

// DATA VIEW MODAL
// show
const SHOW_DATA_VIEW_MODAL = 'SHOW_DATA_VIEW_MODAL';
// hide
const HIDE_DATA_VIEW_MODAL = 'HIDE_DATA_VIEW_MODAL';
// loading
const LOADING_DATA_VIEW_MODAL = 'LOADING_DATA_VIEW_MODAL';

// EXPERIMENT INFERENCE MODAL
const SHOW_EXPERIMENT_INFERENCE_MODAL = 'SHOW_EXPERIMENT_INFERENCE_MODAL';
const HIDE_EXPERIMENT_INFERENCE_MODAL = 'HIDE_EXPERIMENT_INFERENCE_MODAL';
const EXPERIMENT_INFERENCE_MODAL_LOADING_DATA =
  'EXPERIMENT_INFERENCE_MODAL_LOADING_DATA';
const EXPERIMENT_INFERENCE_MODAL_DATA_LOADED =
  'EXPERIMENT_INFERENCE_MODAL_DATA_LOADED';

// INFERENCE LOGS DRAWER
const SHOW_INFERENCE_LOGS_DRAWER = 'SHOW_INFERENCE_LOGS_DRAWER';
const HIDE_INFERENCE_LOGS_DRAWER = 'HIDE_INFERENCE_LOGS_DRAWER';
const INFERENCE_LOGS_DRAWER_LOADING_DATA = 'INFERENCE_LOGS_DRAWER_LOADING_DATA';
const INFERENCE_LOGS_DRAWER_DATA_LOADED = 'INFERENCE_LOGS_DRAWER_DATA_LOADED';
const SAVE_FLOW_TRANSFORM = 'SAVE_FLOW_TRANSFORM';

// OPERATORS DEPENDENCIES
const LOADING_OPERATOR_DEPENDENCIES = 'LOADING_OPERATOR_DEPENDENCIES';

// PREPARE DEPLOYMENTS MODAL
const HIDE_PREPARE_DEPLOYMENTS_MODAL = 'HIDE_PREPARE_DEPLOYMENTS_MODAL';
const SHOW_PREPARE_DEPLOYMENTS_MODAL = 'SHOW_PREPARE_DEPLOYMENTS_MODAL';

const SHOW_DEPLOYMENT_MODAL = 'UI_SHOW_DEPLOYMENT_MODAL';
const HIDE_DEPLOYMENT_MODAL = 'UI_HIDE_DEPLOYMENT_MODAL';

// PREPARE DEPLOYMENTS BUTTON
const PREPARE_DEPLOYMENTS_LOADING_DATA = 'PREPARE_DEPLOYMENTS_LOADING_DATA';
// data loaded
const PREPARE_DEPLOYMENTS_DATA_LOADED = 'PREPARE_DEPLOYMENTS_DATA_LOADED';

const SHOW_EXTERNAL_DATASET_HELPER_MODAL = 'SHOW_EXTERNAL_DATASET_HELPER_MODAL';
const HIDE_EXTERNAL_DATASET_HELPER_MODAL = 'HIDE_EXTERNAL_DATASET_HELPER_MODAL';

const SET_LOADING_MONITORINGS = 'SET_LOADING_MONITORINGS'
const SET_CREATING_MONITORING = 'SET_CREATING_MONITORING'
const SET_DELETING_MONITORING = 'SET_DELETING_MONITORING'

// EXPORT
export default {
  // COMPARE RESULTS MODAL
  ADD_COMPARE_RESULT_LOADER,
  DELETE_COMPARE_RESULT_LOADER,
  VISIBILITY_COMPARE_RESULTS_MODAL,
  LOADING_COMPARE_RESULTS_MODAL,

  // NEW PROJECT MODAL
  SHOW_NEW_PROJECT_MODAL,
  HIDE_NEW_PROJECT_MODAL,
  SHOW_EDIT_PROJECT_MODAL,

  // USING_DEPLOYMENTS_MODAL
  SHOW_USING_DEPLOYMENTS_MODAL,
  HIDE_USING_DEPLOYMENTS_MODAL,

  // NEW EXPERIMENT MODAL
  SHOW_NEW_EXPERIMENT_MODAL,
  HIDE_NEW_EXPERIMENT_MODAL,

  // NEW TEMPLATE MODAL
  SHOW_NEW_TEMPLATE_MODAL,
  HIDE_NEW_TEMPLATE_MODAL,

  // DRAWER
  SHOW_OPERATOR_DRAWER,
  HIDE_OPERATOR_DRAWER,

  // OPERATOR RESULTS
  SHOW_OPERATOR_RESULTS,
  HIDE_OPERATOR_RESULTS,

  // TASKS TABLE
  TASKS_TABLE_LOADING_DATA,
  TASKS_TABLE_DATA_LOADED,

  // PROJECTS TABLE
  PROJECTS_TABLE_LOADING_DATA,
  PROJECTS_TABLE_DATA_LOADED,

  // PROJECT NAME
  PROJECT_NAME_LOADING_DATA,
  PROJECT_NAME_DATA_LOADED,

  // COMPONENT MENU
  TASKS_MENU_LOADING_DATA,
  TASKS_MENU_DATA_LOADED,

  // DEPLOYMENTS TABS
  DEPLOYMENTS_TABS_LOADING_DATA,
  DEPLOYMENTS_TABS_DATA_LOADED,
  DEPLOYMENTS_TABS_HIDE_MODAL,
  DEPLOYMENTS_TABS_SHOW_MODAL,

  // EXPERIMENTS TABS
  EXPERIMENTS_TABS_LOADING_DATA,
  EXPERIMENTS_TABS_DATA_LOADED,

  // EXPERIMENT NAME
  EXPERIMENT_NAME_LOADING_DATA,
  EXPERIMENT_NAME_DATA_LOADED,

  // EXPERIMENT OPERATORS
  EXPERIMENT_OPERATORS_LOADING_DATA,
  EXPERIMENT_OPERATORS_DATA_LOADED,

  // DATASETS LIST
  DATASETS_LIST_LOADING_DATA,
  DATASETS_LIST_DATA_LOADED,

  // DATASET OPERATOR
  DATASET_OPERATOR_LOADING_DATA,
  DATASET_OPERATOR_DATA_LOADED,

  // OPERATOR PARAMETER
  OPERATOR_PARAMETER_LOADING_DATA,
  OPERATOR_PARAMETER_DATA_LOADED,

  // OPERATOR RESULTS
  OPERATOR_RESULTS_LOADING_DATA,
  OPERATOR_RESULTS_DATA_LOADED,

  // OPERATOR RESULTS DOWNLOAD DATASET
  OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADING,
  OPERATOR_RESULTS_DOWNLOAD_DATASET_LOADED,

  // TEMPLATE
  TEMPLATE_LOADING_DATA,
  TEMPLATE_DATA_LOADED,

  // IMPLANTED EXPERIMENT
  IMPLANTED_EXPERIMENTS_LOADING_DATA,
  IMPLANTED_EXPERIMENTS_DATA_LOADED,
  // EXPERIMENT TRAINING
  EXPERIMENT_TRAINING_LOADING_DATA,
  EXPERIMENT_TRAINING_DATA_LOADED,
  // EXPERIMENT DELETE TRAINING
  EXPERIMENT_DELETE_TRAINING_LOADING_DATA,
  EXPERIMENT_DELETE_TRAINING_DATA_LOADED,

  OPERATOR_METRICS_LOADING_DATA,
  OPERATOR_METRICS_DATA_LOADED,

  // PROJECT EDIT NAME
  PROJECT_EDIT_NAME_LOADING_DATA,
  PROJECT_EDIT_NAME_DATA_LOADED,

  // DATA VIEW MODAL
  SHOW_DATA_VIEW_MODAL,
  HIDE_DATA_VIEW_MODAL,
  LOADING_DATA_VIEW_MODAL,

  // EXPERIMENT INFERENCE MODAL
  SHOW_EXPERIMENT_INFERENCE_MODAL,
  HIDE_EXPERIMENT_INFERENCE_MODAL,
  EXPERIMENT_INFERENCE_MODAL_LOADING_DATA,
  EXPERIMENT_INFERENCE_MODAL_DATA_LOADED,

  // INFERENCE LOGS DRAWER
  SHOW_INFERENCE_LOGS_DRAWER,
  HIDE_INFERENCE_LOGS_DRAWER,
  INFERENCE_LOGS_DRAWER_LOADING_DATA,
  INFERENCE_LOGS_DRAWER_DATA_LOADED,
  //FLOW TRANSFORM
  SAVE_FLOW_TRANSFORM,

  //OPERATORS DEPENDENCIES
  LOADING_OPERATOR_DEPENDENCIES,

  // PRE IMPLANTATION MODAL
  HIDE_PREPARE_DEPLOYMENTS_MODAL,
  SHOW_PREPARE_DEPLOYMENTS_MODAL,

  SHOW_DEPLOYMENT_MODAL,
  HIDE_DEPLOYMENT_MODAL,

  // PREPARE DEPLOYMENTS
  PREPARE_DEPLOYMENTS_LOADING_DATA,
  PREPARE_DEPLOYMENTS_DATA_LOADED,

  //EXTERNAL DATASET HELPER MODAL
  SHOW_EXTERNAL_DATASET_HELPER_MODAL,
  HIDE_EXTERNAL_DATASET_HELPER_MODAL,

  SET_LOADING_MONITORINGS,
  SET_CREATING_MONITORING,
  SET_DELETING_MONITORING,
};
