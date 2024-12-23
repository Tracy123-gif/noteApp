import React, { useContext } from 'react';
import NoteContext from '../../Context/NoteContext';
import Form from './Form';

const OpenAddForm = () => {
  const { isShowForm } = useContext(NoteContext);
  
  // Inline style for icon
  const iconStyle = {
    color: 'white', // Correcting the style object
    position: 'absolute',
    top: '10px',   // Adjust top position as needed
    left: '10px',  // Adjust left position as needed
    cursor: 'pointer' // Make the icon clickable
  };

  return (
    <div>
      {
        isShowForm ?  
        <div className="top-0 left-0 bg-black h-screen w-screen absolute z-10">
          {/* back icon with improved style */}
          <Form />
        </div> 
        : ''
      }
    </div>
  );
};

export default OpenAddForm;
