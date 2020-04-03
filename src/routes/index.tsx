import { Route, Switch, Redirect } from 'react-router';
import * as React from 'react';

import './router.less'
import RouterApp from '../views/layout'
import { Home } from '../views/home';
import { Rank } from '../views/rank';
import { Find } from '../views/find';
import { Recommend } from '../views/recommend';

class MainRouter extends React.Component {
  render() {
    return <Switch>
      <Route exact path='/' component={RouterApp} />
      <Route path='/home' component={Home} />
      <Route path='/find' component={Find}/>
      <Route path='/rank' component={Rank} />
      <Route path='/recommend' component={Recommend} />
      <Redirect to="/404" />
    </Switch>
  }
}

export { MainRouter };
