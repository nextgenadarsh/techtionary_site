import React, { useReducer, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  initializeAction, 
  getTopicsAction
} from "./reducer/actions";
import { reducer, initialState } from "./reducer";

const HomePage = lazy(() => import("./pages/home-page"));
const TopicPage = lazy(() => import("./pages/topic-page"));

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    initializeAction(dispatch);
    if (state.topics.length < 1) {
      getTopicsAction(dispatch);
    }
  });

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props: any) => (
              <HomePage {...props} state={state} dispatch={dispatch} />
            )}
          />
          <Route
            exact
            path="/topic"
            render={(props: any) => (
              <TopicPage {...props} state={state} dispatch={dispatch} />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}
