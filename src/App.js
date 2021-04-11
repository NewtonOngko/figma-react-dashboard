import React, { useContext,Component,Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from './containers/Dashboard'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from './containers/Login'

const App = () => {

  const context = useContext(ThemeContext);
  const { theme } = context;


  return (
    <BrowserRouter>
      
      <Fragment>
        <Switch>
        <Route path="/login" >
            <Login />
          </Route>
          <Route path="/">
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
              <GlobalStyles />
              <Dashboard />
            </>
          </ThemeProvider>
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
