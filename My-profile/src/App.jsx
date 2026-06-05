import "./App.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Kunal Wagh</div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h3>Hello, I'm</h3>

         <h1>
  Kunal Kishor <br />
  Wagh
</h1>
          <h2 className="typing">
         Full Stack Developer | Java Enthusiast
        </h2>

          <p>
            Passionate about Java, SQL, Web Development and
            building real-world software solutions.
          </p>
          
          <a href="/updatedresume2026.pdf" download>
  <button>Download Resume</button>
</a>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/kunal-wagh-19235b323"
              target="_blank"
            >
              <button>Hire Me</button>
            </a>

            <a
              href="https://github.com/kunalwagh77"
              target="_blank"
            >
              <button >
                GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/wkk.jpg" alt="wkk" 
            alt="profile"
          />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a highly motivated MCA student with a strong
          foundation in Java, SQL, Web Development and
          Database Management.
          I enjoy building real-world software solutions
          and continuously improving my technical skills
          through projects and certifications.
        </p>
      </section>

    <section id="skills" className="section">
  <h2>Skills</h2>

  <div className="skills">

    <div className="skill-box">
      <p>HTML</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"90%"}}></div>
      </div>
    </div>

    <div className="skill-box">
      <p>CSS</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"85%"}}></div>
      </div>
    </div>

    <div className="skill-box">
      <p>JavaScript</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"80%"}}></div>
      </div>
    </div>

    <div className="skill-box">
      <p>React</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"75%"}}></div>
      </div>
    </div>

    <div className="skill-box">
      <p>Java</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"90%"}}></div>
      </div>
    </div>

    <div className="skill-box">
      <p>SQL / MySQL</p>
      <div className="progress">
        <div className="progress-fill" style={{width:"88%"}}></div>
      </div>
    </div>

  </div>
</section>

<section className="section">
  <h2>Currently Learning</h2>

  <div className="skills">

    <div className="card">Spring Boot</div>

    <div className="card">Advanced React</div>

    <div className="card">REST APIs</div>

    <div className="card">System Design</div>

  </div>
</section>          

      <section id="experience" className="section">
  <h2>Education & Journey</h2>

  <div className="timeline">

    <div className="timeline-item">
      <h3>MCA</h3>
      <p>Master of Computer Applications</p>
      <span>2025 - Present</span>
    </div>

    <div className="timeline-item">
      <h3>BCA</h3>
      <p>Bachelor of Computer Applications</p>
      <span>Completed</span>
    </div>

    <div className="timeline-item">
      <h3>Full Stack Development</h3>
      <p>
        Learning React, Java, SQL,
        Database Design and Web Development.
      </p>
    </div>

  </div>
</section>

<section className="section">
  <h2>Achievements</h2>

  <div className="stats">

    <div className="card">
      <h1>3+</h1>
      <p>Projects</p>
    </div>

    <div className="card">
      <h1>15+</h1>
      <p>Skills</p>
    </div>

    <div className="card">
      <h1>100%</h1>
      <p>Dedication</p>
    </div>

  </div>
</section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
          
            <h3>Life Insurance Management System</h3>
            <img
  src="/insurancep.png"
  alt="project"
/>

            <p>
              Developed using HTML, CSS,
              JavaScript, PHP and PostgreSQL.
            </p>
          </div>

          <div className="project-card">
            <h3>DrainGuard</h3>
<img
  src="/dranage.jpg"
  alt="project"
/>
            <p>
              Smart IoT-based drainage monitoring
              system using Arduino Uno.
            </p>
          </div>

          <div className="project-card">
            
            <h3>Result Declaration Portal</h3>
<img
  src="result.png"
  alt="project"
/>
            <p>
              Academic result management portal
              with database integration.
            </p>
          </div>

        </div>
      </section>

      <section className="section">
  <h2>Resume</h2>

  <div className="resume-card">

    <h3>Download My Resume</h3>

    <p>
      View my complete education,
      skills and projects.
    </p>

    <a
      href="/updatedresume2026.pdf"
      download
    >
      <button>
        Download Resume
      </button>
    </a>

  </div>
</section>

      <section className="section">
  <h2>Certifications</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>Java Programming</h3>
      <p>Completed certification in Java Programming.</p>
    </div>

    <div className="project-card">
      <h3>Database Management</h3>
      <p>Learned SQL, PostgreSQL, Oracle & MySQL.</p>
    </div>

    <div className="project-card">
      <h3>Web Development</h3>
      <p>HTML, CSS, JavaScript and React Development.</p>
    </div>

  </div>
</section>

    <section id="contact" className="section">
  <h2>Contact Me</h2>

  <div className="contact-icons">

    <a href="mailto:kunalwagh901@gmail.com">
      <FaEnvelope />
      <span>Email</span>
    </a>

    <a href="tel:8767338510">
      <FaPhone />
      <span>Phone</span>
    </a>

    <a
      href="https://github.com/kunalwagh77"
      target="_blank"
    >
      <FaGithub />
      <span>GitHub</span>
    </a>

    <a
      href="https://www.linkedin.com/in/kunal-wagh-19235b323"
      target="_blank"
    >
      <FaLinkedin />
      <span>LinkedIn</span>
    </a>

  </div>
    <section className="section">
  <div className="quote">
    "Building solutions, learning continuously,
    and turning ideas into reality."
  </div>
</section>

  <button
  className="top-btn"
  onClick={() =>
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
>
  ↑
</button>
</section>
      <footer className="footer">

  <h2>Kunal Kishor Wagh</h2>

  <p>
    MCA Student | Full Stack Developer
  </p>

  <p>
    Email: kunalwagh901@gmail.com
  </p>

  <p>
    © 2026 All Rights Reserved
  </p>

</footer>
    </>
  );
}

export default App;