json.listing do
    json.allUsers @allUsers
    json.allListings @allListings
    json.averageListing @averageListing
    json.mostRecent @mostSearch
    json.categorySearch @categoryItems
end