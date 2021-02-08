import React from "react";
import { Route } from "react-router-dom";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import CategoryPage from "../category/category.component";

const Categories = ({ match }) => (
  <div className='category-page'>
    <Route exact path={`${match.path}`} component={CategoryOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default Categories;
