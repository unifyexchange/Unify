import { combineReducers } from "redux";
import users from "./users_reducer";
import items from "./items_reducer";
import listedItems from "./listed_items_reducer";
import favoriteItems from "./favorite_items_reducer";
import categories from "./categories_reducer";
import selectedCategory from "./selected_category_reducer";
import selectedConversation from "./selected_conversation_reducer";
import favorites from "./favorites_reducer";
import categoryItems from "./category_items_reducer";
import showSuccessModal from "./show_success_modal_reducer";
import conversations from "./conversations_reducer";
import reports from "./report_item_reducer";
import item from "./item_reducer";
import messages from "./messages_reducer";

export default combineReducers({
  users,
  items,
  item,
  listedItems,
  favoriteItems,
  categories,
  reports,
  selectedCategory,
  selectedConversation,
  favorites,
  categoryItems,
  showSuccessModal,
  conversations,
  messages,
});
