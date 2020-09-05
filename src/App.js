import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import { inject, observer } from 'mobx-react'

import Loading from './components/Loading'
import NavBar from './components/NavBar'
import NavbarPage from './components/Navbar/Navbar'
import Footer from './components/Footer'
import EventPage from './views/EventPage'
import Homepage from './views/Homepage'
import Profile from './views/Profile'
import ExternalApi from './views/ExternalApi'
import { useAuth0 } from '@auth0/auth0-react'
import history from './utils/history'

// styles
import './App.css'

// fontawesome
import initFontAwesome from './utils/initFontAwesome'
import BroadcastRoom from './views/BroadcastRoom'
import { observe } from 'mobx'
initFontAwesome()

const App = inject('generalStore')(
  observer(props => {
    const { isLoading, error, user } = useAuth0()

    if (error) {
      return <div>Oops... {error.message}</div>
    }

    if (isLoading) {
      return <Loading />
    }
    if(user){
      console.log(user)
      console.log(user.sub)
      // props.generalStore.addUser(user)
      props.generalStore.checkUserInDataBase(user)
      // props.generalStore.getCurrentUser(user.sub)
    }else{
      console.log("not")
    }
    

    return (
      <Router history={history}>
        <div id='app' className='d-flex flex-column h-100'>
          <NavbarPage />

          <Switch>
            <Route exact path='/' exact render={() => <Homepage />} />
            <Route exact path='/homepage-test' render={() => <Homepage />} />
            <Route
              exact
              path='/broadcast-room/:roomId'
              render={() => <BroadcastRoom />}
            />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/external-api' component={ExternalApi} />
            <Route
              exact
              path='/event/:id'
              render={({ match }) => <EventPage match={match} />}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  })
)
export default App
