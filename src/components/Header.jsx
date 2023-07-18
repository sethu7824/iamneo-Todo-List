import React from 'react';

function Header(props) {

  const logo = (
    <div>
      <div
        style={{
          border: '2px solid black',
          borderRadius: '5px',
          padding: '5px',
        }}
      >
        <a href="https://iamneo.ai/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://backup.iamneo.ai/wp-content/uploads/2022/07/iamneo-logo.png"
            width="120"
            height="25"
            style={{
              display: 'block',
              borderRadius: '3px',
            }}
            alt="logo"
          />
        </a>
      </div>
    </div>
  );

  return (
    <div className="header">
      {logo}
      <h3>Keep</h3>
    </div>
  );
}

export default Header;