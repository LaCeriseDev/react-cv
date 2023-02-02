import React from 'react'
import Navigation from '../components/Navigation'

import Languages from '../components/skills/Languages';
import Experience from '../components/skills/Experience';
import OtherSkills from '../components/skills/OtherSkills';
import Hobbies from '../components/skills/Hobbies';

const Skills = () => {
return(
  <div className="skills">
    <Navigation />
    <main className="skillsContent">
      <section className="topside">
        <Languages />
        <Experience />
      </section>
      <section className="botside">
        <OtherSkills />
        <Hobbies />
      </section>
    </main>
  </div>
  )
}
export default Skills
