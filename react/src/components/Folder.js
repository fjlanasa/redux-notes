import React, { Component } from 'react';

class Folder extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.fetchData(this.props.folder.id);
  }

  render() {
    let folderClass = 'folder'
    if(this.props.chosenFolder.id == this.props.folder.id) {
      folderClass = 'folder selected';
    }
    return (
      <div className={folderClass} onClick={this.handleClick}>
        {this.props.folder.name}
      </div>
    )
  }
}

export default Folder;
