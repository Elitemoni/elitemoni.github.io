import React from 'react';
import '../styles/Content.css';
import Profile from './Profile.js';
import Bio from './Bio.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

const Content = () => {
  return (
    <div className="content-container">
      <Profile />
      <Bio />
      <Skills />
      <Projects />
    </div>
  )
}

export default Content