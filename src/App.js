import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Blog from './Components/Blog';
import PostDetails from './Components/PostDetails';
import { updatePosts } from './actions/blogActions';
import Navbar from './Components/Navbar';

store.dispatch(updatePosts());

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route path="/posts/:postId" component={PostDetails} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
