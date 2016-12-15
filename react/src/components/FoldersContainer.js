import React from 'react';
import FoldersCollection from './FoldersCollection'

const FoldersContainer = props => {
  return(
    <div className='small-12 medium-4 columns'>
      <div>
        <FoldersCollection {...props} />
      </div>
    </div>
  );
};

export default FoldersContainer;
