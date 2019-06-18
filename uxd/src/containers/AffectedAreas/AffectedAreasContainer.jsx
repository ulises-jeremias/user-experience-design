import React, { Component } from 'react'
import { Container, Divider, Header, Form, Button } from 'semantic-ui-react'
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import FloatingNavbar from 'src/components/Navbar/Floating'

class AffectedAreasContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      map: {
        lat: -34.922922,
        lng: -57.923240,
        zoom: 15,
      },
      zones: [
        {
          title: 'Zone1',
          color: 'red',
          position: [-34.922922, -57.923240],
          radius: 50,
        },
        {
          title: 'Zone2',
          color: 'blue',
          position: [-34.899687, -57.956941],
          radius: 50,
        },
      ],
      affectedAreas: [
        {
          position: [-34.931438, -57.941180],
          description: (
            <Header as='h3' color='red'>
              Parque Saavedra
              <Header.Subheader>
                Test
              </Header.Subheader>
            </Header>
          ),
        }
      ],
    }
  }

  render() {
    const { menuFixed, map, affectedAreas, zones } = this.state

    const position = [ map.lat, map.lng ]

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
        />

        <Divider hidden />

        <Container>
          <Form size='small'>
            <Form.Field width='4'>
              <label htmlFor='reason'>Causa</label>
              <input name='reason' placeholder='Ingrese una Causa...' />
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
            {affectedAreas.map(({ position, description }, i) => (
              <Marker key={`affected-${i+1}`} position={position}>
                <Popup>
                  {description}
                </Popup>
              </Marker>
            ))}
            {
              zones.map(({ title, color, position, radius }, i) => (
                <CircleMarker
                  key={`zone-${i+1}`}
                  center={position}
                  radius={radius}
                  color={color}
                >
                  <Popup>
                    {title}
                  </Popup>
                </CircleMarker>
              ))
            }
          </Map>

          <Header as='h5' textAlign='center' style={{ marginTop: '2px', marginBottom: '2px' }}>
            Seleccione la dirección del area afetada
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

export default AffectedAreasContainer
