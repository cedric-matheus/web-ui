// ACTION TYPES
import actionTypes from './actionTypes';
import { deselectOperator } from '../operator/actions';

// ACTIONS
// ** SHOW_NEW_PROJECT_MODAL
/**
 * show new project modal
 *
 * @param record
 * @returns {object} { type, newProjectModalVisible }
 */
export const showNewProjectModal = (record) => {
  if (record !== undefined && record !== null) {
    return {
      type: actionTypes.SHOW_EDIT_PROJECT_MODAL,
      newProjectModalVisible: true,
      newProjectModalRecord: record,
    };
  } else {
    return {
      type: actionTypes.SHOW_NEW_PROJECT_MODAL,
      newProjectModalVisible: true,
    };
  }
};

// // // // // // // // // //

// ** HIDE_NEW_PROJECT_MODAL
/**
 * hide new project modal
 *
 * @returns {object} { type, newProjectModalVisible }
 */
export const hideNewProjectModal = () => {
  return {
    type: actionTypes.HIDE_NEW_PROJECT_MODAL,
    newProjectModalVisible: false,
  };
};

// // // // // // // // // //

// ** SHOW_NEW_EXPERIMENT_MODAL
/**
 * show new experiment modal
 *
 * @returns {object} { type, newExperimentModalVisible }
 */
export const showNewExperimentModal = () => (dispatch) => {
  dispatch(deselectOperator());

  dispatch({
    type: actionTypes.SHOW_NEW_EXPERIMENT_MODAL,
    newExperimentModalVisible: true,
  });
};

// // // // // // // // // //

// ** HIDE_NEW_EXPERIMENT_MODAL
/**
 * hide new experiment modal
 *
 * @returns {object} { type, newExperimentModalVisible }
 */
export const hideNewExperimentModal = () => {
  return {
    type: actionTypes.HIDE_NEW_EXPERIMENT_MODAL,
    newExperimentModalVisible: false,
  };
};

// // // // // // // // // //

// ** SHOW_NEW_TEMPLATE_MODAL
/**
 * show new template modal
 *
 * @returns {object} { type, newTemplateModalVisible }
 */
export const showNewTemplateModal = () => {
  return {
    type: actionTypes.SHOW_NEW_TEMPLATE_MODAL,
    newTemplateModalVisible: true,
  };
};

// // // // // // // // // //

// ** HIDE_NEW_TEMPLATE_MODAL
/**
 * hide new template modal
 *
 * @returns {object} { type, newTemplateModalVisible }
 */
export const hideNewTemplateModal = () => {
  return {
    type: actionTypes.HIDE_NEW_TEMPLATE_MODAL,
    newTemplateModalVisible: false,
  };
};

// // // // // // // // // //

// ** SHOW_DRAWER
/**
 * show drawer
 *
 * @param title
 * @param isDataset
 * @param title
 * @param isDataset
 * @returns {object} { type, drawerVisible }
 */
export const showDrawer = (title, isDataset) => {
  return {
    type: actionTypes.SHOW_DRAWER,
    drawer: { visible: true, title, isDataset },
  };
};

// // // // // // // // // //

// ** HIDE_DRAWER
/**
 * hide drawer
 *
 * @returns {object} { type, drawerVisible }
 */
export const hideDrawer = () => (dispatch) => {
  //hidding drawer
  dispatch({
    type: actionTypes.HIDE_DRAWER,
    drawerVisible: false,
  });

  // hidding drawer results
  dispatch(hideOperatorResults());
};

// // // // // // // // // //

// ** SHOW OPERATOR RESULTS
/**
 * show operator results
 *
 * @returns {object} { type, showResults }
 */
export const showOperatorResults = () => {
  return {
    type: actionTypes.SHOW_OPERATOR_RESULTS,
    showOperatorResults: true,
  };
};

// // // // // // // // // //

// ** HIDE OPERATOR RESULTS
/**
 * hide drawer results
 *
 * @returns {object} { type, showResults }
 */
export const hideOperatorResults = () => {
  return {
    type: actionTypes.HIDE_OPERATOR_RESULTS,
    showOperatorResults: false,
  };
};

// // // // // // // // // //

// ** TASKS TABLE LOADING DATA
/**
 * tasks table loading data
 *
 * @returns {object} { type, tasksTableLoading }
 */
export const tasksTableLoadingData = () => {
  return {
    type: actionTypes.TASKS_TABLE_LOADING_DATA,
    tasksTableLoading: true,
  };
};

// // // // // // // // // //

// ** TASKS TABLE DATA LOADED
/**
 * tasks table loading data
 *
 * @returns {object} { type, tasksTableLoading }
 */
export const tasksTableDataLoaded = () => {
  return {
    type: actionTypes.TASKS_TABLE_DATA_LOADED,
    tasksTableLoading: false,
  };
};

// // // // // // // // // //

// ** PROJECTS TABLE LOADING DATA
/**
 * projects table loading data
 *
 * @returns {object} { type, projectsTableLoading }
 */
export const projectsTableLoadingData = () => {
  return {
    type: actionTypes.PROJECTS_TABLE_LOADING_DATA,
    projectsTableLoading: true,
  };
};

// // // // // // // // // //

// ** PROJECTS TABLE DATA LOADED
/**
 * projects table loading data
 *
 * @returns {object} { type, projectsTableLoading }
 */
export const projectsTableDataLoaded = () => {
  return {
    type: actionTypes.PROJECTS_TABLE_DATA_LOADED,
    projectsTableLoading: false,
  };
};

// // // // // // // // // //

// ** PROJECT NAME LOADING DATA
/**
 * project name loading data
 *
 * @returns {object} { type, projectNameLoading }
 */
export const projectNameLoadingData = () => {
  return {
    type: actionTypes.PROJECT_NAME_LOADING_DATA,
    projectNameLoading: true,
  };
};

// // // // // // // // // //

// ** PROJECT NAME DATA LOADED
/**
 * project name loading data
 *
 * @returns {object} { type, projectNameLoading }
 */
export const projectNameDataLoaded = () => {
  return {
    type: actionTypes.PROJECT_NAME_DATA_LOADED,
    projectNameLoading: false,
  };
};

// // // // // // // // // //

// ** PROJECT EDIT NAME LOADING DATA
/**
 * project edit name loading data
 *
 * @returns {object} { type, projectEditNameLoading }
 */
export const projectEditNameLoadingData = () => {
  return {
    type: actionTypes.PROJECT_EDIT_NAME_LOADING_DATA,
    projectEditNameLoading: true,
  };
};

// // // // // // // // // //

// ** PROJECT EDIT NAME DATA LOADED
/**
 * project edit name loading data
 *
 * @returns {object} { type, projectEditNameLoading }
 */
export const projectEditNameDataLoaded = () => {
  return {
    type: actionTypes.PROJECT_EDIT_NAME_DATA_LOADED,
    projectEditNameLoading: false,
  };
};

// // // // // // // // // //

// ** TASKS MENU LOADING DATA
/**
 * tasks menu loading data
 *
 * @returns {object} { type, tasksMenuLoading }
 */
export const tasksMenuLoadingData = () => {
  return {
    type: actionTypes.TASKS_MENU_LOADING_DATA,
    tasksMenuLoading: true,
  };
};

// // // // // // // // // //

// ** TASKS MENU DATA LOADED
/**
 * tasks menu loading data
 *
 * @returns {object} { type, tasksMenuLoading }
 */
export const tasksMenuDataLoaded = () => {
  return {
    type: actionTypes.TASKS_MENU_DATA_LOADED,
    tasksMenuLoading: false,
  };
};

// // // // // // // // // //

// ** EXPERIMENTS TABS LOADING DATA
/**
 * experiments tabs loading data
 *
 * @returns {object} { type, experimentsTabsLoading }
 */
export const experimentsTabsLoadingData = () => {
  return {
    type: actionTypes.EXPERIMENTS_TABS_LOADING_DATA,
    experimentsTabsLoading: true,
  };
};

// // // // // // // // // //

// ** EXPERIMENTS TABS DATA LOADED
/**
 * experiments tabs loading data
 *
 * @returns {object} { type, experimentsTabsLoading }
 */
export const experimentsTabsDataLoaded = () => {
  return {
    type: actionTypes.EXPERIMENTS_TABS_DATA_LOADED,
    experimentsTabsLoading: false,
  };
};

// // // // // // // // // //

// ** EXPERIMENT TRAINING LOADING DATA
/**
 * experiment training loading data
 *
 * @returns {object} { type, experimentTrainingLoading }
 */
export const experimentTrainingLoadingData = () => {
  return {
    type: actionTypes.EXPERIMENT_TRAINING_LOADING_DATA,
    experimentTrainingLoading: true,
  };
};

// // // // // // // // // //

// ** EXPERIMENT TRAINING DATA LOADED
/**
 * experiment training loading data
 *
 * @returns {object} { type, experimentTrainingLoading }
 */
export const experimentTrainingDataLoaded = () => {
  return {
    type: actionTypes.EXPERIMENT_TRAINING_DATA_LOADED,
    experimentTrainingLoading: false,
  };
};

// // // // // // // // // //

// ** EXPERIMENT DELETE TRAINING LOADING DATA
/**
 * experiment delete training loading data
 *
 * @returns {object} { type, experimentDeleteTrainingLoading }
 */
export const experimentDeleteTrainingLoadingData = () => {
  return {
    type: actionTypes.EXPERIMENT_DELETE_TRAINING_LOADING_DATA,
    experimentDeleteTrainingLoading: true,
  };
};

// // // // // // // // // //

// ** EXPERIMENT DELETE TRAINING LOADED DATA
/**
 * experiment delete training loaded data
 *
 * @returns {object} { type, experimentDeleteTrainingLoading }
 */
export const experimentDeleteTrainingDataLoaded = () => {
  return {
    type: actionTypes.EXPERIMENT_DELETE_TRAINING_DATA_LOADED,
    experimentDeleteTrainingLoading: false,
  };
};

// // // // // // // // // //

// ** EXPERIMENT NAME LOADING DATA
/**
 * experiment name loading data
 *
 * @returns {object} { type, experimentNameLoading }
 */
export const experimentNameLoadingData = () => {
  return {
    type: actionTypes.EXPERIMENT_NAME_LOADING_DATA,
    experimentNameLoading: true,
  };
};

// // // // // // // // // //

// ** EXPERIMENT NAME DATA LOADED
/**
 * experiment name loading data
 *
 * @returns {object} { type, experimentNameLoading }
 */
export const experimentNameDataLoaded = () => {
  return {
    type: actionTypes.EXPERIMENT_NAME_DATA_LOADED,
    experimentNameLoading: false,
  };
};

// // // // // // // // // //

// ** EXPERIMENT OPERATORS LOADING DATA
/**
 * experiment operators loading data
 *
 * @returns {object} { type, experimentOperatorsLoading }
 */
export const experimentOperatorsLoadingData = () => {
  return {
    type: actionTypes.EXPERIMENT_OPERATORS_LOADING_DATA,
    experimentOperatorsLoading: true,
  };
};

// // // // // // // // // //

// ** EXPERIMENT OPERATORS DATA LOADED
/**
 * experiment operators loading data
 *
 * @returns {object} { type, experimentOperatorsLoading }
 */
export const experimentOperatorsDataLoaded = () => {
  return {
    type: actionTypes.EXPERIMENT_OPERATORS_DATA_LOADED,
    experimentOperatorsLoading: false,
  };
};

// // // // // // // // // //

// ** DATASETS LIST LOADING DATA
/**
 * datasets list loading data
 *
 * @returns {object} { type, datasetsListLoading }
 */
export const datasetsListLoadingData = () => {
  return {
    type: actionTypes.DATASETS_LIST_LOADING_DATA,
    datasetsListLoading: true,
  };
};

// // // // // // // // // //

// ** DATASETS LIST DATA LOADED
/**
 * datasets list data loaded
 *
 * @returns {object} { type, datasetsListLoading }
 */
export const datasetsListDataLoaded = () => {
  return {
    type: actionTypes.DATASETS_LIST_DATA_LOADED,
    datasetsListLoading: false,
  };
};

// // // // // // // // // //

// ** DATASET OPERATOR LOADING DATA
/**
 * dataset operator loading data
 *
 * @returns {object} { type, datasetOperatorLoading }
 */
export const datasetOperatorLoadingData = () => {
  return {
    type: actionTypes.DATASET_OPERATOR_LOADING_DATA,
    datasetOperatorLoading: true,
  };
};

// // // // // // // // // //

// ** DATASET OPERATOR DATA LOADED
/**
 * dataset operator loading data
 *
 * @returns {object} { type, datasetOperatorLoading }
 */
export const datasetOperatorDataLoaded = () => {
  return {
    type: actionTypes.DATASET_OPERATOR_DATA_LOADED,
    datasetOperatorLoading: false,
  };
};

// // // // // // // // // //

// ** OPERATOR PARAMETER LOADING DATA
/**
 * operator parameter loading data
 *
 * @returns {object} { type, operatorParameterLoading }
 */
export const operatorParameterLoadingData = () => {
  return {
    type: actionTypes.OPERATOR_PARAMETER_LOADING_DATA,
    operatorParameterLoading: true,
  };
};

// // // // // // // // // //

// ** DATASET OPERATOR DATA LOADED
/**
 * operator parameter data loaded
 *
 * @returns {object} { type, operatorParameterLoading }
 */
export const operatorParameterDataLoaded = () => {
  return {
    type: actionTypes.OPERATOR_PARAMETER_DATA_LOADED,
    operatorParameterLoading: false,
  };
};

// // // // // // // // // //

// ** OPERATOR RESULTS LOADING DATA
/**
 * operator parameter loading data
 *
 * @returns {object} { type, operatorResultsLoading }
 */
export const operatorResultsLoadingData = () => {
  return {
    type: actionTypes.OPERATOR_RESULTS_LOADING_DATA,
    operatorResultsLoading: true,
  };
};

// // // // // // // // // //

// ** OPERATOR RESULTS DATA LOADED
/**
 * operator parameter data loaded
 *
 * @returns {object} { type, operatorResultsLoading }
 */
export const operatorResultsDataLoaded = () => {
  return {
    type: actionTypes.OPERATOR_RESULTS_DATA_LOADED,
    operatorResultsLoading: false,
  };
};

// ** OPERATOR RESULTS LOADING DATA
/**
 * operator parameter loading data
 *
 * @returns {object} { type, operatorResultsLoading }
 */
export const operatorMetricsLoadingData = () => {
  return {
    type: actionTypes.OPERATOR_METRICS_LOADING_DATA,
  };
};

// // // // // // // // // //

// ** OPERATOR RESULTS DATA LOADED
/**
 * operator parameter data loaded
 *
 * @returns {object} { type, operatorResultsLoading }
 */
export const operatorMetricsDataLoaded = () => {
  return {
    type: actionTypes.OPERATOR_METRICS_DATA_LOADED,
  };
};

// // // // // // // // // //

// ** TEMPLATE LOADING DATA
/**
 * template loading data
 *
 * @returns {object} { type, templateLoading }
 */
export const templateLoadingData = () => {
  return {
    type: actionTypes.TEMPLATE_LOADING_DATA,
    templateLoading: true,
  };
};

// // // // // // // // // //

// ** TEMPLATE DATA LOADED
/**
 * template loading data
 *
 * @returns {object} { type, templateLoading }
 */
export const templateDataLoaded = () => {
  return {
    type: actionTypes.TEMPLATE_DATA_LOADED,
    templateLoading: false,
  };
};

// // // // // // // // // //

// ** IMPLANTED EXPERIMENTS LOADING DATA
/**
 *  implanted experiments loading data
 *
 * @returns {object} { type, implantedExperimentsLoading }
 */
export const implantedExperimentsLoadingData = () => {
  return {
    type: actionTypes.IMPLANTED_EXPERIMENTS_LOADING_DATA,
    implantedExperimentsLoading: true,
  };
};

// // // // // // // // // //

// ** IMPLANTED EXPERIMENTS DATA LOADED
/**
 * implanted experiments loading data
 *
 * @returns {object} { type, implantedExperimentsLoading }
 */
export const implantedExperimentsDataLoaded = () => {
  return {
    type: actionTypes.IMPLANTED_EXPERIMENTS_DATA_LOADED,
    implantedExperimentsLoading: false,
  };
};

// ** SHOW_EXPERIMENT_INFERENCE_MODAL
/**
 * show experiment inference modal
 *
 * @returns {object} { type, newTemplateModalVisible }
 */
export const showExperimentInferenceModal = () => {
  return {
    type: actionTypes.SHOW_EXPERIMENT_INFERENCE_MODAL,
  };
};

// // // // // // // // // //

// ** HIDE_EXPERIMENT_INFERENCE_MODAL
/**
 * hideexperiment inference modal
 *
 * @returns {object} { type, newTemplateModalVisible }
 */
export const hideExperimentInferenceModal = () => {
  return {
    type: actionTypes.HIDE_EXPERIMENT_INFERENCE_MODAL,
  };
};

// USING_DEPLOYMENTS_MODAL
export const showUsingDeploymentsModal = () => {
  return {
    type: actionTypes.SHOW_USING_DEPLOYMENTS_MODAL,
  };
};

// // // // // // // // // //

// ** HIDE_USING_DEPLOYMENTS_MODAL
/**
 *
 * @returns {object} { type, newTemplateModalVisible }
 */
export const hideUsingDeploymentsModal = () => {
  return {
    type: actionTypes.HIDE_USING_DEPLOYMENTS_MODAL,
  };
};

// // // // // // // // // //

// DATA VIEW MODAL

/**
 * Show data view modal
 *
 * @returns {object} Action
 */
export const showDataViewModal = () => {
  return {
    type: actionTypes.SHOW_DATA_VIEW_MODAL,
    isVisible: true,
  };
};

/**
 * Hide data view modal
 *
 * @returns {object} Action
 */
export const hideDataViewModal = () => {
  return {
    type: actionTypes.HIDE_DATA_VIEW_MODAL,
    isVisible: false,
  };
};

// // // // // // // // // //
