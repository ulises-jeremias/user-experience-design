import React from 'react'
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
          <Menu.Item>
            <Image size='mini' src={logo} />
          </Menu.Item>
          <Menu.Item header>Project Name</Menu.Item>
          <Menu.Item>Articles</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button color='red'>
                SOS
              </Button>
            </Menu.Item>
            <Dropdown text='Dropdown' pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </Visibility>
  )
}

export default FloatingNavbar