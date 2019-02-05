import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Tweet = props => {
  const { user, text } = props.tweet
  return (
    <Card raised centered fluid>
      <Card.Content>
        <Image floated='right' size='mini' src={user.profile_image_url} />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta><a href={`https://twitter.com/${user.screen_name}`} target='_blank'>{`@${user.screen_name}`}</a></Card.Meta>
        <Card.Description>
          {text}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

export default Tweet
