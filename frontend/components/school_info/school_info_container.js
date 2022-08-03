import { connect } from "react-redux";
import SchoolInfo from "./school_info";

const mapStateToProps = ({ session, entities: { users, listedItems } }) => {
  return {
    currentUser: users[session.id],
    listedItems: Object.values(listedItems),
  };
};

export default connect(mapStateToProps, null)(SchoolInfo);
