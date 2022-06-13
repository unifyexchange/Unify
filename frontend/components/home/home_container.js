import { connect } from "react-redux";

import Home from "./home";

const mapStateToProps = ({
  session,
  entities: { users, items, selectedCategory },
}) => {
  return {
    currentUser: users[session.id],
    selectedCategory: selectedCategory,
    items: Object.values(items),
  };
};

export default connect(mapStateToProps, null)(Home);
