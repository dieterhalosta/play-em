import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import CategoriesPage from "./pages/categories/categories.component";
import PopularPage from "./pages/popular/popular.component";
import Footer from "./components/footer/footer.component";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/popular' component={PopularPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
