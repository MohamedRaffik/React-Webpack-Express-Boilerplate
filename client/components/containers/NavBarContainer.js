import { connect } from 'react-redux';
import { changeURL } from '../../actions';
import NavBar from '../presentational/NavBar';

const MapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeUrl: (url) => dispatch(changeURL(url))
    };
};

const NavBarApp = connect(null, MapDispatchToProps)(NavBar);

export default NavBarApp;