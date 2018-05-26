import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './action'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);