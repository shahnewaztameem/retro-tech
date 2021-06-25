import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'
import PostPage from './Pages/PostPage'
import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/post/:id' component={PostPage} />
        <Route path='/' component={HomePage} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
