import React from 'react';

const GenderCheckbox = () => {
  return (
    <div className='flex'>
     <div className='form-control'>
      <label className='label gap-2 cursor-pointer'>
        <sapn className='label-text'>Male</sapn>

        <input type="checkbox" className='checkbox '/>
      </label>
     </div>

     <div className='form-control'>
      <label className='label gap-2 cursor-pointer'>
        <sapn className='label-text'>Female</sapn>

        <input type="checkbox" className='checkbox '/>
      </label>
     </div>
    </div>
  );
}

export default GenderCheckbox;
