import React from 'react';
import Folder from './Folder';

function FoldersCollection(props) {
  let folders = props.folders.map((folder, index)=>{
    return (
      <Folder key={index} index={index} folder={folder} {...props}/>
    )
  })
  return (
    <div className='folders'>
      {folders}
    </div>
  )
}

export default FoldersCollection;
