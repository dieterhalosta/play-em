import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/Home/homepage.component";
import CategoriesPage from "./pages/Categories/categories.component";
import PopularPage from "./pages/Popular/popular.component";
import NotFound from "./pages/NotFound/not-found.component";
import AssetDetails from "./pages/AssetDetails/asset-details.component";
import MovieByCategory from "./pages/MoviesByCategory/movies-by-category.component";
import MenuContext from "./contexts/menu/menu.context";
import { PopularItemsStore } from "./contexts/popular/popular.context";

const renderRoutes = (menuItems) => {
  return menuItems.map((item) => {
    if (["Home", "Popular", "Categories"].includes(item.label)) {
      return (
        <Route
          key={item.id}
          path={item.route}
          exact
          lable={item.label}
          component={
            item.lable === "Home"
              ? HomePage
              : item.label === "Popular"
              ? PopularPage
              : CategoriesPage
          }
        />
      );
    }

    return null;
  });
};

const App = () => {
  const menuItems = useContext(MenuContext);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <PopularItemsStore>
      <Switch>
        {renderRoutes(menuItems)}
        {/* <Route exact path='/' component={HomePage} />
        <Route exact path='/categories' component={CategoriesPage} />
        <Route exact path='/popular' component={PopularPage} /> */}
        <Route exact path='/asset/:id' component={AssetDetails} />
        <Route exact path='/movies/:categoryId' component={MovieByCategory} />
        <Route component={NotFound} />
      </Switch>
      </PopularItemsStore>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
