import { connect } from "react-redux";
import App from "../presentational/App";

const MapStateToProps = (state, ownProps) => {
  return {};
};

const MapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const AppContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(App);

export default AppContainer;
