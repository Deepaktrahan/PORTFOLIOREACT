import React from 'react'

const Middle = () => {
  return (
    <div>
      <div>
        <div>
        <div className="BB">
      <div style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>ABOUT</h2>
        <div>
          <img
            style={{ width: "250px" }}
            src="Image/—Pngtree—business portfolio 3d character illustration_13355679.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="CC">
          <div><img width="50px" src="Image/image 2.png" alt="" /></div>
          <div>
            <h3>Frontend Developer</h3>
            <p>
              I am a front-end developer with experience in building responsive
              and optimized sites
            </p>
          </div>
        </div>
        <div className="CC">
          <div><img width="50px" src="Image/image 3.png" alt="" /></div>
          <div>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimised back-end systems
              and APIs
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* section third */}

    <br /><br />

    <div className="FF">
      <div>
        <div>
          <h2>EXPERIENCE</h2>
          <div className="imag">
            <div>
              <img src="Image/html-5.png" alt="" />
              <h5>HTML</h5>
            </div>
            <div>
              <img src="Image/css-3.png" alt="" />
              <h5>CSS</h5>
            </div>
            <div>
              <img src="Image/science.png" alt="" />
              <h5>React</h5>
            </div>
          </div>
          <div className="imag">
            <div>
              <img src="Image/media.png" alt="" />
              <h5>Bootstrap</h5>
            </div>
            <div>
              <img src="Image/wind.png" alt="" />
              <h5>Tailwind</h5>
            </div>
            <div>
              <img src="Image/java-script.png" alt="" />
              <h5>JavaScript</h5>
            </div>
          </div>
          <div className="imag">
            <div>
              <img src="Image/database.png" alt="" />
              <h5>SQL</h5>
            </div>
            <div>
              <img src="Image/nodejs.png" alt="" />
              <h5>NodeJS</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="EE">
          <div>
            <img width="50px" src="Image/DortexAiWhite-ZDzsosrk.png" alt="" />
          </div>
          <div>
            <h2>Web Developer,DortexAI</h2>
            <p>NOV,2024-Present</p>
            <p>◦ Worked on Webpages And responsiveness</p>
          </div>
        </div>
        <br />
        <div className="EE">
          <div>
            <img width="50px" src="Image/DortexAiWhite-ZDzsosrk.png" alt="" />
          </div>
          <div>
            <h2>Full Stack Developer,Cloud detox</h2>
            <p>Dec 2023-July 2024</p>
            <p>◦ Worked on Webpages And responsiveness</p>
          </div>
        </div>
      </div>
    </div>

    <br /><br />
    {/* section forth */}
    
    

    <div style={{ marginLeft: "10%" }}
    >
      <h2>PROJECTS</h2>
      <br />
    </div>
    <div className="HH">
      <div className="JJ">
        <div>
          <img style={{width: "150px"}}  src="Image/image 1.png" alt="" />
        </div>
        <h4>Rock-paper-Scissors Game </h4>
        <p>
          Developed an interactive game with <br/> real-time  scoring, featuring HTML/CSS <br/> design and  JavaScript logic for  user- <br/> computer competition.
        </p>
        <div className="KK">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <div className="K">
          <button>DEMO</button>
          <button>Source</button>
        </div>
      </div>

      <div className="JJ">
        <div>
          <img style={{width: "150px"}}  src="Image/image 1.png" alt="" />
        </div>
        <h4>To-Do List Application </h4>
        <p>
          Built a task management app with <br/>React.js, enabling users to add, delete, <br/> and manage tasks efficiently with  <br/> seamless UI updates.
        </p>
        <div className="KK">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <div className="K">
          <button>DEMO</button>
          <button>Source</button>
        </div>
      </div>

      <div className="JJ">
        <div>
          <img style={{width: "150px"}}  src="Image/image 1.png" alt="" />
        </div>
        <h4>Weather Check Website </h4>
        <p>
          Developed a responsive weather website <br/> using HTML/CSS and JavaScript, enabling <br/>real-time location-based weather data via <br/>API integration.
        </p>
        <div className="KK">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>

        <div className="K">
          <button>DEMO</button>
          <button>Source</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Middle