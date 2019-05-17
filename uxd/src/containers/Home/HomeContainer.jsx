import React, { Component } from 'react'
import { Container, Divider, Header, Segment, Grid } from 'semantic-ui-react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import FloatingNavbar from 'src/components/Navbar/Floating'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      map: {
        lat: -34.922922,
        lng: -57.923240,
        zoom: 15,
      },
      affectedAreas: [
        {
          position: [-34.922922, -57.923240],
          description: 'Hospital Policlínico',
        }
      ],
      evacuationSectors: [
        {
          position: [-34.9205701, -57.9612306],
          description: 'Parque Saavedra',
        }
      ],
    }
  }

  render() {
    const { menuFixed, map, evacuationSectors, affectedAreas } = this.state

    const position = [ map.lat, map.lng ]

    return (
      <div style={{ height: '100%', backgroundColor: '#f7f7f7' }}>
        <Container style={{ paddingTop: '2em' }}>
          <Header as='h1'>
            Catástrofes Naturales
            <Divider />
            <Header.Subheader>
              ¿Qué hacer frente a una situación de emergencia? Te ofrecemos una lista de números y consejos a seguir.
            </Header.Subheader>
          </Header>
        </Container>

        <FloatingNavbar
          stickTopMenu={() => this.setState({ menuFixed: true })}
          unStickTopMenu={() => this.setState({ menuFixed: false })}
          menuFixed={menuFixed}
        />

        <Container>
          <Grid columns={2}>
            <Grid.Column width={12}>
              <Grid.Row>
                <Segment textAlign='center'>
                  <Header as='h2'>
                    Sectores de Evacuación
                  </Header>
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
                      <Marker key={`evacuation-${i+1}`} position={position}>
                        <Popup>
                          {description}
                        </Popup>
                      </Marker>
                    ))}
                  </Map>
                </Segment>
              </Grid.Row>
              <Divider hidden />
              <Grid.Row>
                <Segment textAlign='center'>
                  <Header as='h2'>
                    Areas afectadas
                  </Header>
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
                  </Map>
                </Segment>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                asd
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HomeContainer
