import React, { Component, Fragment, } from 'react'
import {
  Header,
  Divider,
  Embed,
} from 'semantic-ui-react'
import LinesEllipsis from 'react-lines-ellipsis'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      useElipsis: true,
    }

    this.readMore = this.readMore.bind(this)
  }

  readMore() {
    this.setState(() => ({
      useElipsis: false,
    }))
  }

  render() {
    const { useElipsis } = this.state

    const {
      title,
      description,
      video,
    } = this.props

    return (
      <Fragment>
        <Header as='h3'>
          {title}
        </Header>
        {
          video && (
            <Embed
              iframe={{
                allowFullScreen: true,
              }}
              {...video}
            />
          )
        }
        <Divider hidden />
        {
          useElipsis ? (
            <div
              role='link'
              tabIndex='0'
              onClick={this.readMore}
              onKeyDown={this.readMore}
            >
              <LinesEllipsis
                component='article'
                text={description}
                maxLine={video ? 2 : 15}
                ellipsis='... Leer más'
                trimRight
                basedOn='words'
              />
            </div>
          ) : (
            <article>
              {description}
            </article>
          )
        }
      </Fragment>
    )
  }
}

export default Article