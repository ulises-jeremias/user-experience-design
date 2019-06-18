import React, { Component, } from 'react'
import { Container, Divider, Header, Grid, } from 'semantic-ui-react'
import FloatingNavbar from 'src/components/Navbar/Floating'
import Article from 'src/components/Article/Article'

import logo from 'src-static/images/logo.png'

class ArticlesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuFixed: false,
      articles: [
        {
          title: 'Consejos sobre cómo sobrevivir a los desastres naturales',
          description: 'Aquí hay una lista de consejos de supervivencia que pueden salvarte la vida en una situación de emergencia. Vivimos en un tiempo en el que los desastres naturales ocurren cada vez con mayor frecuencia y más devastadores.',
          video: {
            id: 'bW3Q0TicAR0',
            placeholder: 'https://i.ytimg.com/vi/bW3Q0TicAR0/maxresdefault.jpg',
            source: 'youtube',
          },
        },
        {
          title: 'Articulo solo texto',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus?',
        },
        {
          title: '6 Consejos para sobrevivir a desastres naturales',
          description: '¿Alguna vez te has encontrado directamente en el camino de un tornado gigantesco? ¿O con un incendio forestal? Si no lo has hecho, ¿estás absolutamente seguro de saber qué pasos tomar para sobrevivir? Nadie quiere encontrarse en esa situación, pero si lo estás, puede ser difícil pensar qué hacer en el momento. Según el experto en supervivencia Tim MacWelch de la revista “Outdoor Life”, lo más importante que una persona puede hacer durante un desastre natural es mantener la calma. Algunos temores son naturales, pero mantener la calma te permitirá pensar con claridad y tomar medidas incorrectas. ¡Solo sigue estos consejos y mantente a salvo!',
          video: {
            id: 'dWHN9r5sq6s',
            placeholder: 'https://i.ytimg.com/vi/dWHN9r5sq6s/maxresdefault.jpg',
            source: 'youtube',
          },
        },
        {
          title: 'Texto',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus?',
        },
        {
          title: 'Articulo',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repudiandae numquam quidem similique voluptate temporibus. Aliquam neque error quis numquam. Alias eaque maiores veritatis voluptatibus expedita saepe harum voluptatum doloribus?',
        },
      ],
    }
  }

  render() {
    const { menuFixed, articles } = this.state

    return (
      <div style={{ height: '100%' }}>
        <Container style={{ paddingTop: '2em' }}>
          <Header as='h1'>
            Artículos
            <Divider />
            <Header.Subheader>
              En esta sección se pueden encontrar artículos con información útil en caso de catástrofes naturales.
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
          <Grid columns={3} stackable>
            {
              Array.from(articles || []).map((article, key) => (
                <Grid.Column
                  key={`${key+1}`}            
                >
                  <Article
                    {...article}
                  />
                  <Divider section hidden />
                </Grid.Column>
              ))
            }
          </Grid>
        </Container>
      </div>
    )
  }
}

export default ArticlesContainer
