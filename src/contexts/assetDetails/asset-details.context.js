/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from "react";
import {
  getAssetDetails,
  getAssetTrailer,
} from "../../movieApi/movieApi.utils";
import Spinner from "../../components/spinner/spinner.component";

export const AssetContext = React.createContext();

const AssetDetailsStore = (props) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      details: [],
      videos: [],
      errorMessage: "",
      loading: false,
    }
  );

  const loadItemDetails = () => {
    setState({ loading: true });
    getAssetDetails(props.assetId)
      .then((data) => {
        console.log(data);
        setState({ details: data, loading: false });
      })
      .catch((error) => {
        setState({ errorMessage: error, loading: false });
      });
  };

  const loadItemTrailers = () => {
    setState({ loading: true });
    getAssetTrailer(props.assetId)
      .then((data) => {
        console.log(data.results);
        setState({ videos: data.results, loading: false });
      })
      .catch((error) => {
        setState({ errorMessage: error, loading: false });
      });
  };

  useEffect(() => loadItemDetails(), []);
  useEffect(() => loadItemTrailers(), []);

  if (state.loading) return <Spinner />;

  if (state.errorMessage) return <div>{state.errorMessage}</div>;

  return (
    <AssetContext.Provider
      value={{ assetDetails: state.details, assetVideos: state.videos }}
    >
      {props.children}
    </AssetContext.Provider>
  );
};

export default AssetDetailsStore;
