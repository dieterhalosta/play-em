import { createContext } from "react";

import CategoriesData from "./categories.data";

const CategoryContext = createContext(CategoriesData);

export default CategoryContext;
