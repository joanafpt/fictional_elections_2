import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'; //instead  of { Route } from 'react-router-dom';
import FirstPage from '../components/FirstPage';
import QuestionForm from '../components/QuestionForm';
import RenderServerResponse from '../components/RenderServerResponse';
import PresidentMessage from '../components/PresidentMessage';
import ContactUs from '../components/ContactUs';
import Info from '../components/Info';
import Centro from '../components/Centro';
import CurrentGeneralResults from '../components/CurrentGeneralResults';
import InitialMenu from '../components/InitialMenu';

//teste:
import Graph from '../graph/Graph';
import Login from '../components/Login';

//console.log(process.env.PUBLIC_URL + '/');


const Routes = () => {
  return (
    <Switch>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={FirstPage} />
      <Route path={process.env.PUBLIC_URL + '/initialmenu'} component={InitialMenu} />
      <Route path={process.env.PUBLIC_URL + '/questionform'} component={QuestionForm} />
      <Route path={process.env.PUBLIC_URL + '/renderserviceresponse'} component={RenderServerResponse} />
      <Route path={process.env.PUBLIC_URL + '/presidentmessage'} component={PresidentMessage} />
      <Route path={process.env.PUBLIC_URL + '/contactus'} component={ContactUs} />
      <Route path={process.env.PUBLIC_URL + '/info'} component={Info} />
      <Route path={process.env.PUBLIC_URL + '/centro'} component={Centro} />
      <Route path={process.env.PUBLIC_URL + '/currentgeneralresults'} component={CurrentGeneralResults} />
      <Route path={process.env.PUBLIC_URL + '/login'} component={Login} isPrivate />
      <Route component={FirstPage} />
      <Route path={process.env.PUBLIC_URL + '/graph'} component={Graph} />
    </Switch>
  )

}

export default Routes;