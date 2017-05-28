import React, { Component } from 'react';
import {StyledBar, Title, NavigationMenu, DropdownIconMenu} from './styled'


class NavigationBar extends Component {
  render() {
    return (
      <StyledBar 
        title={<Title to="/">Guigig</Title>}
        iconElementRight={<NavigationMenu/>}
        iconElementLeft={<DropdownIconMenu/>}
        iconStyleRight={{marginTop: '0px'}}
        />
    );
  }

  renderMenu() {
    console.log('hola')
    return (
      <div>hola</div>
    )
  }
}

export default NavigationBar;