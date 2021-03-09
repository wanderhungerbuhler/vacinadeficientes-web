import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Formulario from '../pages/Formulario';
import Deficiencias from '../pages/Deficiencias';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/formulario" component={Formulario} />
      <Route path="/deficiencias/:id" component={Deficiencias} />
    </Switch>
  )
}

export default Routes;
