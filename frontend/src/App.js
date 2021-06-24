import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'
import PostPage from './Pages/PostPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/post/:id' component={PostPage} />
        <Route path='/' component={HomePage} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
