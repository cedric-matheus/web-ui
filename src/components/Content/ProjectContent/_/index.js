// CORE LIBS
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Row, Col } from 'antd';

// COMPONENTS
import ComponentsMenuBlock from '../ComponentsMenuBlock/_';

/**
 * Project Content.
 * This component is responsible for displaying the project content.
 */
const ProjectContent = () => {
  return (
    <Row gutter={24}>
      <Col span={5}>
        <ComponentsMenuBlock />
      </Col>
      <Col span={19}>Flow</Col>
    </Row>
  );
};

// EXPORT
export default ProjectContent;
