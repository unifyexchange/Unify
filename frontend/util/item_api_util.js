export const fetchAllItems = () => {
  return $.ajax({
    url: `/api/items`,
    method: "GET",
  });
};

export const fetchListedItems = () => {
  return $.ajax({
    url: `/api/user/listed_items`,
    method: "GET",
  });
};

export const fetchFavoriteItems = () => {
  return $.ajax({
    url: `/api/favorite_items`,
    method: "GET",
  });
};

export const fetchCategoryItems = (category) => {
  return $.ajax({
    url: `/api/category_items`,
    method: "GET",
    data: { category: category },
  });
};

export const createItem = (item) => {
  return $.ajax({
    url: `/api/user/items`,
    method: "POST",
    data: { item: item },
  });
};

export const editItem = (item) => {
  return $.ajax({
    url: `/api/user/items/update`,
    method: "PUT",
    data: { item: item },
  });
};

export const deleteItem = (userId, itemId) => {
  return $.ajax({
    url: `/api/user/items/${itemId}`,
    method: "DELETE",
  });
};

export const fetchCurrentItem = (itemId) => {
  return $.ajax({
    url: `/api/user/items/${itemId}`,
    method: "GET",
  });
};
