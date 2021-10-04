import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SidebarBtn from './components/SidebarBtn'

import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <SidebarBtn />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </MainLayout>
    </Router>
  )
}
