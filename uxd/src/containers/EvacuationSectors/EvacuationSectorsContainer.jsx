import React, { Component } from 'react'
import { Container, Divider, Header, Form, Button } from 'semantic-ui-react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import FloatingNavbar from 'src/components/Navbar/Floating'

class EvacuationSectorsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      map: {
        lat: -34.922922,
        lng: -57.923240,
        zoom: 15,
      },
      evacuationSectors: [
        {
          position: [-34.922922, -57.923240],
          description: (
            <Header as='h3'>
              Hospital Policlínico
              <Header.Subheader>
                Principal sector de evacuación del sector 1
              </Header.Subheader>
            </Header>
          ),
        }
      ],
    }
  }

  render() {
    const { menuFixed, map, evacuationSectors } = this.state

    const position = [ map.lat, map.lng ]

    return (
      <div style={{ height: '100%' }}>
        <Container style={{ paddingTop: '2em' }}>
          <Header as='h1'>
            Informar sobre nuevo sector de evacuación
            <Divider />
            <Header.Subheader>
              Si tenés información sobre un nuevo sector de evacuación que no está registrado podes enviar información para que se incluya en el sitio.
              <br />
              Intentá marcar el punto exacto donde se encuentra el sector y proveer la mayor información de contacto posible.
            </Header.Subheader>
          </Header>
        </Container>

        <FloatingNavbar
          stickTopMenu={() => this.setState({ menuFixed: true })}
          unStickTopMenu={() => this.setState({ menuFixed: false })}
          menuFixed={menuFixed}
        />

        <Divider hidden />

        <Container>
          <Form size='small'>
            <Form.Field width='4'>
              <label htmlFor='name'>
                Nombre del Sector de Evacuación
                <input name='name' id='name' placeholder='Ingrese un Nombre...' />
              </label>
            </Form.Field>
          </Form>

          <Divider hidden />

          <Map
            style={{ height: '20em' }}
            center={position}
            zoom={map.zoom}
            maxZoom={map.zoom + 10}
            attributionControl
            zoomControl
            doubleClickZoom
            scrollWheelZoom
            dragging
            animate
            easeLinearity={0.35}
          >
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {evacuationSectors.map(({ position, description }, i) => (
              <Marker key={`affected-${i+1}`} position={position}>
                <Popup>
                  {description}
                </Popup>
              </Marker>
            ))}
          </Map>

          <Header as='h5' textAlign='center' style={{ marginTop: '2px', marginBottom: '2px' }}>
            Seleccione la dirección del sector de evacuación
          </Header>

          <Divider hidden />
          
          <Button color='blue' floated='right'>
            Agregar
          </Button>
        </Container>
      </div>
    )
  }
}

export default EvacuationSectorsContainer
