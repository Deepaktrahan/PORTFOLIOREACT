import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <div>
         <div className="navbar">
      <div className="logo">Portfolio</div>
      <div className="links">
        <a href="#About">About</a>
        <a href="#Experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

    <div className="AA">
      <div>
        <h1>Hi, I am Deepak</h1>
        <p style={{ width: '250px' }}>
          I am a Web developer with 8 month of experience using HTML,CSS,JS and
          React. Reach out if you’d like to learn more!
        </p>
        <button
          style={{
            backgroundColor: 'rgb(87, 108, 188)', // camelCase property
            padding: '8px',
            borderRadius: '15px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          
          
        >
          Contact Me
          <div></div>
        </button>
        
      </div>
      <div>
        <img
          style={{width: '250px'}}
          src="Image/—Pngtree—businessman with portfolio worker character_14601343.png"
          alt=""
        />
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Header