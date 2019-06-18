import React, { Component } from 'react'
import { Container, Divider, Header, Segment, Grid } from 'semantic-ui-react'
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import FloatingNavbar from 'src/components/Navbar/Floating'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      map: {
        lat: -34.922922,
        lng: -57.923240,
        zoom: 13,
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
      notices: [
        {
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus sit quod? Ratione quo recusandae sed repellat numquam veritatis sapiente voluptate corporis atque labore architecto repudiandae, non tempora eum reiciendis'
        },
        {
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus sit quod? Ratione quo recusandae sed repellat numquam veritatis sapiente voluptate corporis atque labore architecto repudiandae, non tempora eum reiciendis'
        },
        {
          title: 'Lorem ipsum dolor sit',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus sit quod? Ratione quo recusandae sed repellat numquam veritatis sapiente voluptate corporis atque labore architecto repudiandae, non tempora eum reiciendis'
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
    const {
      menuFixed,
      map,
      zones,
      evacuationSectors,
      affectedAreas,
      notices
    } = this.state

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
          <Grid columns={2} stackable doubling>
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
                      <Marker key={`evacuation-${i+1}`} position={position} alt={description}>
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
              <Segment.Group>
                {
                  notices.map(({title, description}, i) => (
                    <Segment key={`notice-${i+1}`}>
                      <Header as='h4'>
                        {title}
                      </Header>
                      {description}
                    </Segment>
                  ))
                }

              </Segment.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default HomeContainer
