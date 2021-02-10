import React, { useState, useEffect } from "react";

import { getCategories } from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";
const CategoryContext = React.createContext();

export const CategoryStore = (props) => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data.geners))
      .catch((error) => setErrorMessage(error));
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;

  if (categories.length > 0) {
    return (
      <CategoryContext.Provider value={categories}>
        {props.children}
      </CategoryContext.Provider>
    );
  }

  return <Spinner message='Loading the categories' />;
};

export default CategoryContext;
