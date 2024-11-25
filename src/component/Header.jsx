import React from 'react'

const Header = () => {
  const sendMessage = () => {
    const phoneNumber = '919467205499'; // Apna WhatsApp number yahan daalein
    const message = 'Hello, I want to talk to you!'; // Apna message yahan likhen
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Yeh link open karega WhatsApp mein
  };
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
        <button onClick={sendMessage}
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