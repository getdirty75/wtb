
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './Store/store';

import Login from './Stage/Feature/Login';
import PrivateDealer from './Stage/Feature/Profile/Private/Dealer/index';
import { Home } from './Stage/Feature/Home';
import GuestRoute from './Stage/Utils/GuestRoute';
import PrivateRoute from './Stage/Utils/PrivateRoute';
import { CheckAuthentication } from './Stage/Utils/CheckAuthentication';

const App: React.FC = () => {
  useEffect(() => CheckAuthentication(), []);

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path='/profile' component={PrivateDealer} />
            <GuestRoute exact path='/login' component={Login} />
            <GuestRoute exact path='/' component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )

};

export default App;
