import React from 'react';

export default function TestButton() {
  const handleClick = () => {
    console.log('Test button clicked!');
    alert('Test button clicked!');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999
      }}
    >
      Test Button
    </button>
  );
}
