// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Tabs, Icon } from 'antd';

// COMPONENTS
import DraggableTabs from '../DraggableTabs';

// TABS COMPONENTS
const { TabPane } = Tabs;

/**
 * Experiments Tabs.
 * This component is responsible for displaying experiments tabs.
 */
const ExperimentsTabs = ({
  experiments,
  handleChange,
  handleMoveTab,
  activeExperiment,
}) => {
  // COMPONENTS RENDERS
  // title
  const renderTitle = (title, running) => (
    // react fragment
    <>
      {/* title */}
      {title}
      {/* running spinner */}
      {running && <Icon type='loading' />}
    </>
  );

  return (
    // draggable tabs component
    <DraggableTabs
      handleMoveTab={handleMoveTab}
      onChange={handleChange}
      activeExperiment={activeExperiment}
    >
      {/* rendering tabs */}
      {experiments.map(({ title, key, running }) => (
        <TabPane tab={renderTitle(title, running)} key={key} />
      ))}
    </DraggableTabs>
  );
};

// PROP TYPES
ExperimentsTabs.propTypes = {
  /** experiments list */
  experiments: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** experiments tabs active experiment key */
  activeExperiment: PropTypes.string,
  /** experiments tabs handle tab change function */
  handleChange: PropTypes.func.isRequired,
  /** experiments tabs handle move tab function */
  handleMoveTab: PropTypes.func.isRequired,
};

// PROP DEFAULT VALUES
ExperimentsTabs.defaultProps = {
  /** experiments tabs active experiment key */
  activeExperiment: undefined,
};

// EXPORT
export default ExperimentsTabs;
