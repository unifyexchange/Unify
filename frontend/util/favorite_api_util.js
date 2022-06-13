export const fetchAllFavorites = () => {
  return $.ajax({
    url: `/api/favorites`,
    method: "GET",
  });
};

export const createFavorite = (itemId) => {
  return $.ajax({
    url: `/api/favorites`,
    method: "POST",
    data: { favorite: { item_id: itemId } },
  });
};

export const deleteFavorite = (itemId) => {
  return $.ajax({
    url: `/api/favorites`,
    method: "DELETE",
    data: { favorite: { item_id: itemId } },
  });
};
