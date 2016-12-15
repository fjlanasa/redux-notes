import React, { Component } from 'react';
import FoldersCollection from './FoldersCollection'

class FoldersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createFolder(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return (
      <div className='callout small-12 medium-4 columns'>
        <div className='folder-collection'>
          <FoldersCollection {...this.props} />
        </div>
        <div className='folder-tools'>
          <div className="fabutton" onClick={this.handleSubmit}>
            <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
          </div>
          <form id='folder-form' onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='New Folder'/>
          </form>
        </div>
      </div>
    );
  };
}

export default FoldersContainer;
