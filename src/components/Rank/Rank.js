import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      {/* the name and entries are displayed here which are passed down using props */}
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      

      <div className='white f1'>
        {entries}
      </div>
      
    </div>
  );
}

export default Rank;