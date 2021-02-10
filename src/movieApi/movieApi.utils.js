const api_url = "https://video-proxy.3rdy.tv/api/vod";
const menu_url = "https://video-proxy.3rdy.tv/api/static/menu?=";

export async function getMenuItems() {
  try {
    const response = await fetch(menu_url);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the menu items: ${error}`;
  }
}

export async function getPopular() {
  try {
    const response = await fetch(`${api_url}/popular`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the popular items: ${error}`;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${api_url}/category`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the category items: ${error}`;
  }
}

export async function getMoviesByCategory(categoryId, page = 0) {
  try {
    const response =
      page > 0
        ? await fetch(`${api_url}/category/${categoryId}/assets?page=${page}`)
        : await fetch(`${api_url}/category/${categoryId}/assets`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the movies by category items: ${error}`;
  }
}

export async function getAssetDetails(assetId) {
  try {
    const response = await fetch(`${api_url}/asset/${assetId}`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the asset item: ${error}`;
  }
}

export async function getAssetTrailer(assetId) {
  try {
    const response = await fetch(`${api_url}/asset/${assetId}/videos`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw `There was an error getting the asset trailer: ${error}`;
  }
}
