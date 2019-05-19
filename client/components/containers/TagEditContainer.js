import { connect } from 'react-redux';
import { updateTag } from '../../actions';
import TagEdit from '../presentational/TagEdit';

const MapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTag: (tag, data) => dispatch(updateTag(tag. data))
    };
};

const TagEditApp = connect(null, MapDispatchToProps)(TagEdit);

export default TagEditApp;