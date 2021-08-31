import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import bootstrap from "bootstrap";
import reactBootstrap from "react-bootstrap";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AuthorNav from "./pages/authorNav";
import AuthorPage from "./pages/authorPage";

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
            <Route exact path="/">
              Test
            </Route>
            <Route exact path="/authorNavigation">
              <AuthorNav/>
            </Route>
            <Route exact path="/author/:authorId">
              <AuthorPage/>
            </Route>
            <Route exact path="/topic/:topicId">
              <AuthorPage/>
            </Route>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
