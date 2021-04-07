import React, { Suspense, useEffect } from 'react';
import './App.css';
import Cardblock from './Cardblock';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import * as actionCreators from '../store/actions/actions';
import CardPage from '../components/CardPage';
import { useSelector, useDispatch } from 'react-redux';
import Settings from '../components/Settings';

const Auth = React.lazy(() => import('../components/Auth'));

function App(props) {

  const cards = useSelector(state => state.main.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.init());
  }, [dispatch]);

  const adminMode = useSelector(state => state.auth.adminMode);

  return (
    <div className="App">
      <Header cards={cards} />
      <Switch>
        <Route path="/auth" render={() => <Suspense fallback={<div>...Loading</div>}> <Auth /> </Suspense> } />
        <Route path="/" exact component={Cardblock} />
        <Route path="/card/:id" component={CardPage} />
        { adminMode ? <Route path="/settings" component={Settings} /> : <p>You have not access to this route!</p> }
        <Route component={PageNotFound}  />
      </Switch>
    </div>
  );
}

export default App;
