import * as React from 'react';
import "./aboutme.scss"
//@ts-ignore
import profilePic from './assets/images/profile_img.jpg'



const AboutMe = (props) => {

  const aboutMe = `I’m a dedicated software engineer with a B.S. in Computer Science and am currently pursuing an M.S. in Software Engineering. My long-term goal is to move into software architecture for large-scale systems. I have extensive experience in software engineering and full-stack web development, having worked with a variety of languages including Java, JavaScript, Python, Swift, C, and C++, and databases such as SQL, Neo4J, and MongoDB. I’m familiar with cloud services (such as AWS), containerization (such as Docker), and DevOps practices, including CI/CD pipelines. My project experience spans building full-stack CRUD apps, iOS applications, games, and NPM packages, along with applying software engineering principles to design and implement robust systems.

I’ve also taken on leadership roles, serving as the Implementation Manager for my capstone project and mentoring students as a teaching assistant. I have a strong ability to communicate effectively with both technical and non-technical audiences, prioritizing the development of scalable and user-friendly solutions that foster effective collaboration. I believe that the most successful systems are those that seamlessly integrate into users' workflows and stand the test of time.`

  return (
      <div className='aboutme-styles'>
          <img className='mypic'src={profilePic} alt="profile-pic"/>
          <h1 className='myName'>Dave Leo Shilander</h1>
          <p className="profileAbout">{aboutMe}</p>
      </div>
  );
}

export default AboutMe;
