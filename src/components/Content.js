import React from 'react';
import Profile from './Profile.js';
import Bio from './Bio.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

const Content = () => {
  return (
    <div classname="content-container">
      <Profile />
      <Bio />
      <Skills />
      <Projects />
    </div>
  )
}

export default Content