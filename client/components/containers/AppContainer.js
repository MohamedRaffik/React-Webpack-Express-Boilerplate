import { connect } from 'react-redux';
import App from '../presentational/App';

const MapStateToProps = (state, ownProps) => {
    return {
        tags: state.tags,
        youtube_url: state.youtube_url
    }
}

const AppContainer = connect(MapStateToProps, null)(App);

export default AppContainer;