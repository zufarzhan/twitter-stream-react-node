import React from 'react'
import { Button, Grid, Input, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <div className='header-container'>
      <Grid className='search-container'>
        <Grid.Column width={9}>
          <Input id='searchInput' placeholder='Search...' fluid />
        </Grid.Column>
        <Grid.Column width={7}>
          <Button color={'teal'} fluid onClick={() => {
            props.updateSearchTerm(document.getElementById('searchInput').value)
          }}>Search</Button>
        </Grid.Column>
      </Grid>
      <Message>
        <p>
          You are tracking tweets containing <strong>"{props.term}"</strong> word in them.
        </p>
      </Message>
    </div>
  )
}

Header.propTypes = {
  term: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
}

export default Header
