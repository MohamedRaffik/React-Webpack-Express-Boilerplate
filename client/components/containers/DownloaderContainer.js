import { connect } from 'react-redux';
import Downloader from '../presentational/Downloader';

const MapStateToProps = (state, ownProps) => {
    return {
        tags: state.tags,
        youtube_url: state.youtube_url
    };
};

const DownloaderApp = connect(MapStateToProps, null)(Downloader);

export default DownloaderApp;