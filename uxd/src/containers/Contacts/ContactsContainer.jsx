import _ from 'underscore'
import React, { Component } from 'react'
import { Button, Container, Divider, Header, Table } from 'semantic-ui-react'
import FloatingNavbar from 'src/components/Navbar/Floating'

import logo from 'src-static/images/logo.png'

class AffectedAreasContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      direction: 'descending',
      column: 'name',
      contacts: [{
        name: 'Cruz Roja',
        email: 'info@cruzroja.com.ar',
        phone: '(5411) 4952-7715'
      }, {
        name: 'Cruz Roja',
        email: 'info@cruzroja.com.ar',
        phone: '(5411) 4952-7715'
      }],
    }

    this.sortHandler = this.sortHandler.bind(this)
  }

  sortHandler(column) {
    const {
      direction
    } = this.state

    return () => {
      this.setState(() => ({
        column,
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      }))
    }
  }

  render() {
    const { contacts, direction, column, menuFixed } = this.state

    let sortedList = _.sortBy(contacts, [column])

    if (direction === 'descending') {
      sortedList = sortedList.reverse()
    }

    return (
      <div style={{ height: '100%' }}>
        <Container style={{ paddingTop: '2em' }}>
          <Header as='h1'>
            Informar sobre un área afectada
            <Divider />
            <Header.Subheader>
              Si tener información sobre un area afectada no registrada podes enviarnos información para incluirla en el sitio.
            </Header.Subheader>
          </Header>
        </Container>

        <FloatingNavbar
          stickTopMenu={() => this.setState({ menuFixed: true })}
          unStickTopMenu={() => this.setState({ menuFixed: false })}
          menuFixed={menuFixed}
          logo={logo}
        />

        <Divider hidden />

        <Container>
          <Table sortable basic='very' size='small' textAlign='center'>
            <Table.Header>
              <Table.Row columns={4}>
                <Table.HeaderCell
                  width={4}
                  textAlign='left'
                  sorted={column === 'name' ? direction : null}
                  onClick={this.sortHandler('name')}
                >
                  Nombre
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={4}
                  textAlign='left'
                  sorted={column === 'email' ? direction : null}
                  onClick={this.sortHandler('email')}
                >
                  Email
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={4}
                  textAlign='left'
                  sorted={column === 'phone' ? direction : null}
                  onClick={this.sortHandler('phone')}
                >
                  Teléfono
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={4}
                  textAlign='left'
                  disabled
                >
                  Opciones
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sortedList.map((contact, id) => (
                <Table.Row
                  key={`${contact.name}-${id+1}`}
                >
                  <Table.Cell textAlign='left' style={{paddingLeft: '15px'}}>
                    {contact.name}
                  </Table.Cell>
                  <Table.Cell textAlign='left' style={{paddingLeft: '15px'}}>
                    {contact.email}
                  </Table.Cell>
                  <Table.Cell textAlign='left' style={{paddingLeft: '15px'}}>
                    {contact.phone}
                  </Table.Cell>
                  <Table.Cell textAlign='left' style={{paddingLeft: '15px'}}>
                    <Button
                      icon='phone'
                      size='small'
                      color='green'
                      circular
                    />
                    <Button
                      icon='mail'
                      size='small'
                      color='red'
                      circular
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}

export default AffectedAreasContainer
