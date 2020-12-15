// CORE LIBS
import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';

// COMPONENTS
import DeploymentsTable from 'components/Content/ProjectDetailsContent/DeploymentsTable';

// ACTIONS
import { getDeployExperimentLogs } from 'store/deploymentLogs/actions';
import {
  deleteDeploymentRequest,
  fetchAllDeploymentsRuns
} from 'store/deployments/actions';

import { testImplantedExperimentInferenceAction } from 'store/testExperimentInference/actions';

// DISPATCHS
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchDeploymentsRuns: (projectId, experiments, isToShowLoader) => {
      return dispatch(fetchAllDeploymentsRuns(projectId, experiments, isToShowLoader))
    },
    handleDeleteDeployment: (projectId, deploymentId) =>
      dispatch(deleteDeploymentRequest(projectId, deploymentId)),
    handleGetDeployExperimentLogs: (projectId, deployId) =>
      dispatch(getDeployExperimentLogs(projectId, deployId)),
    handleTestImplantedExperimentInference: (deployId, file) =>
      dispatch(testImplantedExperimentInferenceAction(deployId, file)),
  };
};

// STATES
const mapStateToProps = (state) => {
  return {
    loading: state.uiReducer.implantedExperiments.loading,
    project: state.projectReducer,
  };
};

/**
 * Container to display deployments table.
 *
 * @param {object} props Container props
 * @returns {DeploymentsTableContainer} Container
 */
const DeploymentsTableContainer = (props) => {
  const {
    handleFetchDeploymentsRuns,
    handleDeleteDeployment,
    handleGetDeployExperimentLogs,
    handleTestImplantedExperimentInference,
    loading,
    project,
  } = props;
  const { projectId } = useParams();

  // get project experiments
  const memoizedExperiments = useMemo(() => {
    if (projectId === project.uuid) {
      return project.experiments;
    }
  }, [projectId, project]);

  const [deployments, setDeployments] = useState([]);

  // HOOKS
  useEffect(() => {
    const handleFetchAllDeploymentsRuns = async (isToShowLoader) => {
      const deploymentsRuns = await handleFetchDeploymentsRuns(
        projectId,
        memoizedExperiments,
        isToShowLoader
      );
  
      setDeployments(deploymentsRuns);
    }

    // fetching deployed experiments
    handleFetchAllDeploymentsRuns(true);

    // polling deployed experiments
    const polling = setInterval(
      () =>
      handleFetchAllDeploymentsRuns(false),
      30000
    );
    return () => clearInterval(polling);
  }, [projectId, memoizedExperiments, handleFetchDeploymentsRuns]);

  const deleteDeployment = (deployId) => {
    handleDeleteDeployment(projectId, deployId);
  };

  const handleOpenLog = (deployId) => {
    handleGetDeployExperimentLogs(projectId, deployId);
  };

  return (
    <div className='deploymentsTableContainer'>
      <DeploymentsTable
        deployments={deployments}
        loading={loading}
        onDeleteDeployment={deleteDeployment}
        onOpenLog={handleOpenLog}
        onTestInference={handleTestImplantedExperimentInference}
      />
    </div>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeploymentsTableContainer)
);