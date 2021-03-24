import React, { Suspense, useEffect } from 'react';
import './App.css';
import Cardblock from './Cardblock';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import * as actionCreators from '../store/actions/actions';
import CardPage from '../components/CardPage';
import { useSelector, useDispatch } from 'react-redux';
const Auth = React.lazy(() => import('../components/Auth'));

function App(props) {

  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.init());
  }, [dispatch]);

  return (
    <div className="App">
      <Header cards={cards} />
      <Switch>
        <Route path="/auth" render={() => <Suspense fallback={<div>...Loading</div>}> <Auth /> </Suspense> } />
        <Route path="/" exact component={Cardblock} />
        <Route path="/card/:id" component={CardPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
