import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import theme from 'config/Theme'

import AppBar from 'material-ui/AppBar'
import MaterialIcon from 'components/common/MaterialIcon'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'


const NavigationMenuRow = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 767px) {
    display: none !important;
  }
`

const AppButton = styled(FlatButton)`
  color: ${props => props.theme.colors.white} !important;
`

const Icons = styled(MaterialIcon)`
  color: ${props => props.theme.colors.white} !important;
`

const MenuIcon = Icons

export const Title = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`

export const StyledBar = styled(AppBar)`
  background-color: ${props => props.theme.colors.grey_darken_2} !important;
`

const StyledIconMenu = styled(IconMenu)`
  @media screen and (min-width: 768px) {
    display: none !important;
  }
`

export const NavigationMenu = () => {
  return (
    <NavigationMenuRow>
      <Link to="/guitar">
        <AppButton 
          label="guitar app"
          hoverColor={theme.colors.grey_darken_1}></AppButton>
      </Link>

      <Link to="/blog">
        <AppButton 
          label="blog"
          hoverColor={theme.colors.grey_darken_1}></AppButton>
      </Link>

    </NavigationMenuRow>
  )
}

export const DropdownIconMenu = () => {
  return (
      <StyledIconMenu iconButtonElement={<IconButton><MenuIcon name="menu" /></IconButton>}>
        <Link to="/guitar">
          <MenuItem primaryText="Guitar"></MenuItem>
        </Link>
        <Link to="/blog">
          <MenuItem primaryText="Blog"></MenuItem>
        </Link>
      </StyledIconMenu>
  )
}


