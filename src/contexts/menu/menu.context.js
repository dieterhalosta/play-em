import React, { useState, useEffect } from "react";

import { getMenu } from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";

const MenuContext = React.createContext();

export const MenuStore = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getMenu()
      .then((data) => {
        console.log(data);
        setMenuItems(data);
      })
      .catch((error) => setErrorMessage(error));
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;
  if (!menuItems || menuItems.length === 0)
    return <Spinner message='Loading the menu' />;

  return (
    <MenuContext.Proiver value={menuItems}>
      {props.children}
    </MenuContext.Proiver>
  );
};

export default MenuContext;
