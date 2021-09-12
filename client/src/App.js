import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/main";
import AuthorNav from "./pages/authorNav";
import AuthorPage from "./pages/authorPage";
import TopicNav from "./pages/topicNav";
import TopicPage from "./pages/topicPage";
import QuotePage from "./pages/quotePage";
import SearchResult from "./pages/searchResult";
import PageNotFound from "./components/pageNotFound";

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
