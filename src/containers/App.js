import React, { Suspense, useEffect } from 'react';
import './App.css';
import Cardblock from './Cardblock';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import CardPage from '../components/CardPage';

const Auth = React.lazy(() => import('../components/Auth'));

function App(props) {

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(props.onInit);
  return (
    <div className="App">
      <Header cards={props.cards} />
      <Switch>
        <Route path="/auth" render={() => <Suspense fallback={<div>...Loading</div>}> <Auth /> </Suspense> } />
        <Route path="/" exact component={Cardblock} />
        <Route path={"/card/:id"} component={CardPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInit: () => dispatch(actionCreators.init())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps) (App);
