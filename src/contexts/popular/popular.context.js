import React, { useState, useEffect } from "react";

import { getPopular } from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";
const PopularContext = React.createContext();

export const PopularItemsStore = (props) => {
  const [popularItems, setPopularItems] = useState([]);
  const [errorMessage, setErrroMessage] = useState("");

  useEffect(() => {
    getPopular()
      .then((data) => setPopularItems(data))
      .catch((error) => setErrroMessage(error));
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;

  if (popularItems.length > 0) {
    return (
      <PopularContext.Provider value={popularItems}>
        {props.children}
      </PopularContext.Provider>
    );
  }

  return <Spinner message='Loading popular items' />;
};

export default PopularContext;
