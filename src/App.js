import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import Loading from './components/Loading'
import NavBar from './components/NavBar'
import NavbarPage from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Homepage from './views/Homepage'
import Profile from './views/Profile'
import ExternalApi from './views/ExternalApi'
import { useAuth0 } from '@auth0/auth0-react'
import history from './utils/history';
import Creator from './views/Creator'

// styles
import './App.css'

// fontawesome
import initFontAwesome from './utils/initFontAwesome'
import BroadcastRoom from './views/BroadcastRoom'
initFontAwesome()

const App = () => {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router history={history}>
      <div id='app' className='d-flex flex-column h-100'>
        <NavbarPage />
        <Route exact path='/homepage-test' render={() => <Homepage />} />
        <Route
          exact
          path='/broadcast-room/:roomId'
          render={() => <BroadcastRoom />}
        />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/external-api' component={ExternalApi} />
            <Route path='/event/:id' component={ExternalApi} />
            <Route path='/creator/:id' component={({match}) => <Creator match={match}/>} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App
