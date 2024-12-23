import React from 'react';

const Note = ({ noteData }) => {


  const noteBodyShort = noteData.body
  return (
    <div className="bg-slate-200 p-4 rounded-lg shadow-md w-full max-sm:w-full overflow-hidden max-md:max-w-sm max-md:mx-auto mb-4">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">{noteData.title}</h1>
      <p className="text-gray-600">{noteBodyShort.slice()}</p>
    </div>
  );
};

export default Note;
