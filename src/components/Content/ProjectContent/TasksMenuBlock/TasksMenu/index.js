// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Tooltip, Menu, Dropdown } from 'antd';

// UTILS
import utils from '../../../../../utils';

// MENU COMPONENTS
const { Item, SubMenu } = Menu;
let templateValue;

/**
 * Tasks Menu.
 * This component is responsible for displaying tasks menu.
 */
const TasksMenu = ({ menu, handleClick, disabled, handleDeleteTemplate }) => {
  // HANDLERS
  // box click
  const handleBoxClick = (uuid) => {
    handleDeleteTemplate(uuid);
  };
  const renderTooltip = (name, description, uuid) => {
    const DropDownMenu = (
      <div>
        <Menu onSelect={() => handleBoxClick(uuid)}>
          <Menu.Item key='removeTemplate'>Remover</Menu.Item>
        </Menu>
      </div>
    );

    if ('Templates' === templateValue) {
      return (
        <div>
          <Dropdown overlay={DropDownMenu} trigger={['contextMenu']}>
            <div>
              {description ? (
                <Tooltip title={description} text>
                  {name}
                </Tooltip>
              ) : (
                name
              )}
            </div>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div>
          {description ? (
            <Tooltip title={description} text>
              {name}
            </Tooltip>
          ) : (
            name
          )}
        </div>
      );
    }
  };
  // COMPONENTS RENDERS
  // menu item
  const renderMenuItem = ({ name, uuid, description }) => (
    <Item disabled={disabled} key={uuid}>
      {renderTooltip(name, description, uuid)}
    </Item>
  );

  // sub menu
  const renderSubMenu = (submenu, items) => {
    // getting submenu config
    const { icon, title, key } = utils.getTagConfig(submenu);
    templateValue = title;
    return (
      // sub menu component
      <SubMenu
        key={key}
        title={
          // span container
          <span>
            {/* sub menu icon */}
            {icon}
            {/* sub menu title */}
            <span>{title}</span>
          </span>
        }
      >
        {/* rendering items */}
        {items.map((item) => renderMenuItem(item))}
      </SubMenu>
    );
  };

  // RENDER
  return (
    // menu component
    <Menu
      onClick={handleClick}
      mode='inline'
      className='task-menu-items'
      selectedKeys={[]}
    >
      {/* rendering sub menus */}
      {Object.entries(menu).map(
        ([submenu, items]) => items && renderSubMenu(submenu, items)
      )}
    </Menu>
  );
};

// PROP TYPES
TasksMenu.propTypes = {
  /** tasks menu click handler */
  handleClick: PropTypes.func.isRequired,
  /** menu object */
  menu: PropTypes.objectOf(PropTypes.any).isRequired,
  /** tasks menu is disabled */
  disabled: PropTypes.bool.isRequired,
};

// EXPORT
export default TasksMenu;