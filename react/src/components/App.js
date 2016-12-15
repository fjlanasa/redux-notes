import React, {Component} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import FoldersContainer from './FoldersContainer'
import NotesContainer from './NotesContainer'
import NoteSection from './NoteSection'

class App extends Component {
  componentWillMount(){
    this.props.fetchData();
  }
  render(){
    return (
      <div className='small-12 columns'>
        <FoldersContainer {...this.props} />
        <NotesContainer {...this.props} />
        <NoteSection {...this.props} />
      </div>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    folders: state.folders,
    chosenFolder: state.chosenFolder,
    chosenNote: state.chosenNote,
    chosenFolderNotes: state.chosenFolderNotes
  }
}

let mapDispatchToProps = (dispatch) => {
  return  bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
