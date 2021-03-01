import React, { Suspense } from 'react';
import './App.css';
import Cardblock from './Cardblock';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

const Auth = React.lazy(() => import('../components/Auth'));

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth" render={() => <Suspense fallback={<div>...Loading</div>}> <Auth /> </Suspense> } />
        <Route path="/" exact component={Cardblock} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
