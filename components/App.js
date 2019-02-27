import React from 'react'
import { Router, Route } from 'react-router-dom'
import { history, } from '../helpers'
import { MyNavBar } from '../components/MyNavBar/MyNavBar'
import { connect } from 'react-firebase'
import HomePage from './HomePage'
import PrivatePage from './PrivatePage'
import {UserRoute} from './Routes/userRoute'
const App_ = ({ ...props }) => {
  return (
    <div className="container-fluid">
        <Router history={history}>
          <div>
            <MyNavBar />
            <Route path="/" exact component={HomePage} />
            <UserRoute path="/private" component={PrivatePage} />
          </div>
        </Router>
     </div>
  );
}
export const App = connect({
  data: 'something',
})(App_)
export default App
