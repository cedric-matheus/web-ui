// ACTION TYPES
import actionTypes from './actionTypes';
import projectActionTypes from '../project/actionTypes';
import experimentActionTypes from '../experiment/actionTypes';

// INITIAL STATE
const initialState = {
  newProjectModal: {
    visible: false,
    title: 'Novo Projeto',
    record: undefined,
    modalValidateStatus: null,
    errorMessage: null,
  },
  newExperimentModal: {
    visible: false,
    modalValidateStatus: null,
    errorMessage: null,
  },
  newTemplateModal: { visible: false },
  newDeploymentsModal: { visible: false },
  drawer: {
    visible: false,
    isDataset: false,
    title: 'Título Drawer',
    showResults: false,
  },
  template: { loading: false },
  tasksTable: { loading: false },
  projectsTable: { loading: false },
  projectName: { loading: false },
  componentsMenu: { loading: false },
  experimentsTabs: { loading: false },
  experimentName: { loading: false },
  experimentOperators: { loading: false },
  experimentTraining: { loading: false },
  datasetOperator: { loading: false },
  operatorParameter: { loading: false },
  operatorResults: { loading: false },
  operatorMetrics: { loading: false },
  implantedExperiments: { loading: false },
  experimentInferenceModal: { visible: false },
};

/**
 * ui reducer
 */
const uiReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    // NEW PROJECT MODAL
    case projectActionTypes.CREATE_PROJECT_FAIL:
    case projectActionTypes.EDIT_PROJECT_NAME_FAIL:
      return {
        ...state,
        newProjectModal: {
          ...state.newProjectModal,
          modalValidateStatus: 'error',
          errorMessage: action.errorMessage,
        },
      };
    // show new project modal
    case actionTypes.SHOW_NEW_PROJECT_MODAL:
      return {
        ...state,
        newProjectModal: {
          ...state.newProjectModal,
          visible: action.newProjectModalVisible,
          title: 'Novo projeto',
          record: undefined,
        },
      };
    case actionTypes.SHOW_EDIT_PROJECT_MODAL:
      return {
        ...state,
        newProjectModal: {
          ...state.newProjectModal,
          visible: action.newProjectModalVisible,
          title: 'Editar projeto',
          record: action.newProjectModalRecord,
        },
      };
    // hide new project modal
    case actionTypes.HIDE_NEW_PROJECT_MODAL:
      return {
        ...state,
        newProjectModal: {
          ...state.newProjectModal,
          visible: action.newProjectModalVisible,
          record: undefined,
          modalValidateStatus: null,
          errorMessage: null,
        },
      };

    // NEW EXPERIMENT MODAL
    case experimentActionTypes.CREATE_EXPERIMENT_FAIL:
      return {
        ...state,
        newExperimentModal: {
          ...state.newExperimentModal,
          modalValidateStatus: 'error',
          errorMessage: action.errorMessage,
        },
      };
    // show new experiment modal
    case actionTypes.SHOW_NEW_EXPERIMENT_MODAL:
      return {
        ...state,
        newExperimentModal: {
          ...state.newExperimentModal,
          visible: action.newExperimentModalVisible,
        },
      };
    // hide new experiment modal
    case actionTypes.HIDE_NEW_EXPERIMENT_MODAL:
      return {
        ...state,
        newExperimentModal: {
          ...state.newExperimentModal,
          visible: action.newExperimentModalVisible,
          modalValidateStatus: null,
          errorMessage: null,
        },
      };

    // show DeploymentsModal
    case actionTypes.SHOW_USING_DEPLOYMENTS_MODAL:
      return {
        ...state,
        newDeploymentsModal: {
          ...state.newDeploymentsModal,
          visible: true,
        },
      };
    // hide DeploymentsModal
    case actionTypes.HIDE_USING_DEPLOYMENTS_MODAL:
      return {
        ...state,
        newDeploymentsModal: {
          ...state.newDeploymentsModal,
          visible: false,
        },
      };

    // NEW TEMPLATE MODAL
    case actionTypes.HIDE_NEW_TEMPLATE_MODAL: // hide new template modal
    case actionTypes.SHOW_NEW_TEMPLATE_MODAL: // show new template modal
      return {
        ...state,
        newTemplateModal: {
          ...state.newTemplateModal,
          visible: action.newTemplateModalVisible,
        },
      };

    // DRAWER
    // show drawer
    case actionTypes.SHOW_DRAWER:
      return {
        ...state,
        drawer: { ...state.drawer, ...action.drawer },
      };
    // hide drawer
    case actionTypes.HIDE_DRAWER:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          visible: action.drawerVisible,
        },
      };

    // DRAWER RESULTS
    case actionTypes.SHOW_DRAWER_RESULTS: // show drawer results
    case actionTypes.HIDE_DRAWER_RESULTS: // hide drawer results
      return {
        ...state,
        drawer: { ...state.drawer, showResults: action.showResults },
      };

    // TASKS TABLE
    case actionTypes.TASKS_TABLE_LOADING_DATA: // loading data
    case actionTypes.TASKS_TABLE_DATA_LOADED: // data loaded
      return {
        ...state,
        tasksTable: { ...state.tasksTable, loading: action.tasksTableLoading },
      };

    // PROJECTS TABLE
    case actionTypes.PROJECTS_TABLE_LOADING_DATA: // loading data
    case actionTypes.PROJECTS_TABLE_DATA_LOADED: // data loaded
      return {
        ...state,
        projectsTable: {
          ...state.projectsTable,
          loading: action.projectsTableLoading,
        },
      };

    // PROJECT NAME
    case actionTypes.PROJECT_NAME_LOADING_DATA: // loading data
    case actionTypes.PROJECT_NAME_DATA_LOADED: // data loaded
      return {
        ...state,
        projectName: {
          ...state.projectName,
          loading: action.projectNameLoading,
        },
      };

    // COMPONENTS MENU
    case actionTypes.COMPONENTS_MENU_LOADING_DATA: // loading data
    case actionTypes.COMPONENTS_MENU_DATA_LOADED: // data loaded
      return {
        ...state,
        componentsMenu: {
          ...state.componentsMenu,
          loading: action.componentsMenuLoading,
        },
      };

    // EXPERIMENTS TABS
    case actionTypes.EXPERIMENTS_TABS_LOADING_DATA: // loading data
    case actionTypes.EXPERIMENTS_TABS_DATA_LOADED: // data loaded
      return {
        ...state,
        experimentsTabs: {
          ...state.experimentsTabs,
          loading: action.experimentsTabsLoading,
        },
      };

    // EXPERIMENT TRAINING
    case actionTypes.EXPERIMENT_TRAINING_LOADING_DATA: // loading data
    case actionTypes.EXPERIMENT_TRAINING_DATA_LOADED: // data loaded
      return {
        ...state,
        experimentTraining: {
          ...state.experimentTraining,
          loading: action.experimentTrainingLoading,
        },
      };

    // EXPERIMENT NAME
    case actionTypes.EXPERIMENT_NAME_LOADING_DATA: // loading data
    case actionTypes.EXPERIMENT_NAME_DATA_LOADED: // data loaded
      return {
        ...state,
        experimentName: {
          ...state.experimentName,
          loading: action.experimentNameLoading,
        },
      };

    // EXPERIMENT OPERATORS
    case actionTypes.EXPERIMENT_OPERATORS_LOADING_DATA: // loading data
    case actionTypes.EXPERIMENT_OPERATORS_DATA_LOADED: // data loaded
      return {
        ...state,
        experimentOperators: {
          ...state.experimentOperators,
          loading: action.experimentOperatorsLoading,
        },
      };

    // DATASET OPERATOR
    case actionTypes.DATASET_OPERATOR_LOADING_DATA: // loading data
    case actionTypes.DATASET_OPERATOR_DATA_LOADED: // data loaded
      return {
        ...state,
        datasetOperator: {
          ...state.datasetOperator,
          loading: action.datasetOperatorLoading,
        },
      };

    // OPERATOR PARAMETER

    case actionTypes.OPERATOR_PARAMETER_LOADING_DATA: // loading data
    case actionTypes.OPERATOR_PARAMETER_DATA_LOADED: // data loaded
      return {
        ...state,
        operatorParameter: {
          ...state.operatorParameter,
          loading: action.operatorParameterLoading,
        },
      };

    // OPERATOR RESULTS
    case actionTypes.OPERATOR_RESULTS_LOADING_DATA: // loading data
    case actionTypes.OPERATOR_RESULTS_DATA_LOADED: // data loaded
      return {
        ...state,
        operatorResults: {
          ...state.operatorResults,
          loading: action.operatorResultsLoading,
        },
      };

    // OPERATOR METRICS
    // loading data
    case actionTypes.OPERATOR_METRICS_LOADING_DATA:
      return {
        ...state,
        operatorMetrics: {
          ...state.operatorMetrics,
          loading: true,
        },
      };
    // data loaded
    case actionTypes.OPERATOR_METRICS_DATA_LOADED:
      return {
        ...state,
        operatorMetrics: {
          ...state.operatorMetrics,
          loading: false,
        },
      };

    // TEMPLATE
    case actionTypes.TEMPLATE_LOADING_DATA: // loading data
    case actionTypes.TEMPLATE_DATA_LOADED: // data loaded
      return {
        ...state,
        template: {
          ...state.template,
          loading: action.templateLoading,
        },
      };

    // IMPLANTED EXPERIMENT
    case actionTypes.IMPLANTED_EXPERIMENTS_LOADING_DATA: // loading data
    case actionTypes.IMPLANTED_EXPERIMENTS_DATA_LOADED: // data loaded
      return {
        ...state,
        implantedExperiments: {
          ...state.implantedExperiments,
          loading: action.implantedExperimentsLoading,
        },
      };

    case actionTypes.SHOW_EXPERIMENT_INFERENCE_MODAL:
      return {
        ...state,
        experimentInferenceModal: {
          ...state.experimentInferenceModal,
          visible: true,
        },
      };
    case actionTypes.HIDE_EXPERIMENT_INFERENCE_MODAL:
      return {
        ...state,
        experimentInferenceModal: {
          ...state.experimentInferenceModal,
          visible: false,
        },
      };

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default uiReducer;