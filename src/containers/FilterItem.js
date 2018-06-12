import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import NaveItem from '../components/NavBar/NavItem';

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NaveItem);
