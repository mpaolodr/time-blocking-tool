import React from 'react';
import { useEffect, useState } from 'react';
import TimeblockList from './views/TimeblockList.js';
import Auth from './views/Auth.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useLocalStorage } from './helpers/useLocalStorage.js'
import TimeblockForm from './components/utils/TimeblockForm.js';
import { GlobalProvider } from './context/globalContext.js';
import Landing from './views/Landing.js';
import PrivateRoute from './helpers/PrivateRoute.js';

class App extends React.Component {
  // function App() {

  // const [darkmode, setDarkmode] = useLocalStorage('darkmode', "false")


  // const toggleDarkmode = () => {
  //   setDarkmode(!darkmode)
  // }

  // const toggleSidebar = () => {
  //   if (sidebar === true) {
  //     document.querySelector(".ui.sidebar.inverted").classList.add('visible')
  //   } else {
  //     document.querySelector(".ui.sidebar.inverted").classList.remove('visible')
  //   }
  // }

  // useEffect(() => {
  //   if (window.localStorage.getItem('darkmode') === "true") {
  //     document.querySelector(".ui.segment").classList.add('inverted')
  //     const tables = document.querySelectorAll(".ui.small.striped.table")
  //     tables.forEach(table => table.classList.add('inverted'))
  //     document.querySelector('body').classList.add('darkmodeBG')
  //     const buttons = document.querySelectorAll('.ui.buttons')
  //     buttons.forEach(button => button.classList.add('black'))
  //   } else {
  //     document.querySelector(".ui.segment").classList.remove('inverted')
  //     const tables = document.querySelectorAll(".ui.small.striped.table")
  //     tables.forEach(table => table.classList.remove('inverted'))
  //     document.querySelector('body').classList.remove('darkmodeBG')
  //     const buttons = document.querySelectorAll('.ui.buttons')
  //     buttons.forEach(button => button.classList.remove('black'))
  //   }
  // }, [darkmode])


  render() {

    return (
      <Router>
        <GlobalProvider>
          <main id="Entry">
            {/* {
                  darkmode === false ? <Icon name="moon" className="fab" onClick={toggleDarkmode} /> : <Icon name="sun" className="fab" onClick={toggleDarkmode} />
                } */}

            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/auth/:token">
                <Auth />
              </Route>
              {/* <PrivateRoute exact path="/dashboard/:userid">
                <TimeblockList />
                </PrivateRoute> */}
              <PrivateRoute path="/dashboard/:userid" component={TimeblockList} />
            </Switch>
          </main>
        </GlobalProvider>
      </Router >
    );
  }
}

export default App;
