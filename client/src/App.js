import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

import Home from "./pages/Main";
import AuthorNav from "./pages/AuthorNav";
import AuthorPage from "./pages/AuthorPage";
import TopicNav from "./pages/TopicNav";
import TopicPage from "./pages/TopicPage";
import QuotePage from "./pages/QuotePage";
import SearchResult from "./pages/SearchResult";

import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {  
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar></NavBar>
        <div className="container">
          <div className="mainBody">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/authorNavigation">
                <AuthorNav/>
              </Route>
              <Route exact path="/topicNavigation">
                <TopicNav/>
              </Route>
              <Route exact path="/author/:authorId">
                <AuthorPage/>
              </Route>
              <Route exact path="/topic/:topicId">
                <TopicPage/>
              </Route>
              <Route exact path="/quote/:quoteId">
                <QuotePage/>
              </Route>
              <Route exact path="/search/:query">
                <SearchResult/>
              </Route>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
