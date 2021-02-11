import React, { useState, useEffect } from "react";
import { getCategories } from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";

export const CategoryContext = React.createContext();

const CategoryStore = (props) => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log(data);
        setCategories(data.genres);
      })
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

export default CategoryStore;
