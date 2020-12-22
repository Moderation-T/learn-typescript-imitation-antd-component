import React from 'react';
import Menu from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem';

function MenuTest() {
  return (
    <Menu>
      <MenuItem value={'1'} >菜单1</MenuItem>
      <MenuItem value={'2'} >菜单2</MenuItem>
      <MenuItem value={'3'} >菜单3</MenuItem>
      <MenuItem value={'4'} >菜单4</MenuItem>
    </Menu>
  )
}

export default MenuTest;