import { connect } from 'react-redux';
import { updateTag } from '../../actions';
import TagEdit from '../presentational/TagEdit';

const MapStateToProps = (state, ownProps) => {
    return {
        tags: state.tags,
    };
};

const MapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTag: (tag, data) => dispatch(updateTag(tag. data))
    };
};

const TagEditApp = connect(MapStateToProps, MapDispatchToProps)(TagEdit);

export default TagEditApp;