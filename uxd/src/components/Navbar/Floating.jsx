import React from 'react'
import { Link } from 'react-router-dom'
import {
  Visibility,
  Container,
  Menu,
  Dropdown,
  Image,
  Button,
} from 'semantic-ui-react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

/** 
 * Attaching the top menu is a simple operation, we only switch `fixed`
 * prop and add another style if it has
 * gone beyond the scope of visibility.
 * 
 */
const FloatingNavbar = props => {
  const {
    stickTopMenu,
    unStickTopMenu,
    menuFixed,
    logo
  } = props

  return (
    <Visibility
      onBottomPassed={stickTopMenu}
      onBottomVisible={unStickTopMenu}
      once={false}
    >
      <Menu
        borderless
        fixed={menuFixed ? 'top' : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}
      >
        <Container>
          <Menu.Item as={Link} to='/'>
            <Image alt='logo' size='small' src={logo} />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button color='red'>
                SOS
              </Button>
            </Menu.Item>
            <Dropdown text='Información' pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/articles'>Artículos</Dropdown.Item>
                <Dropdown.Item as={Link} to='/contacts'>Contactos</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Informar</Dropdown.Header>
                <Dropdown.Item as={Link} to='/affected-areas'>Areas Afectadas</Dropdown.Item>
                <Dropdown.Item as={Link} to='/evacuation-sectors'>Sectores de Evacuación</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </Visibility>
  )
}

export default FloatingNavbar