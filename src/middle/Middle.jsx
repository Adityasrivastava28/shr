import React, { useState } from 'react';
import './Index.css';
import Poet from '../header/Poet.jpeg';
import Artist from "../header/Artist.jpeg"
const Middle = () => {
  const [activeList, setActiveList] = useState('skills');

  const handleClick = (listName) => {
    setActiveList(listName);
  };

  return (
    <div className='Middle'>
      <div className='Middle-left'>
        {/* <img className='Mimg' src={Artist} alt="" /> */}
        {/* <h1>hello</h1> */}
      </div>
      <div className='Middle-right'>
        <h2 className='AboutMe'>About Me</h2>
        <p className='AboutMeText'>               A dedicated and motivated individual with a strong academic background and a passion for continuous learning. Committed to excellence in all endeavors, with a focus on computer science  technology and innovations</p>
        <div className='ListsContainer'>
          <h3 className={`SectionTitle ${activeList === 'skills' ? 'active' : ''}`} onClick={() => handleClick('skills')}>Skills</h3>
          <h3 className={`SectionTitle ${activeList === 'education' ? 'active' : ''}`} onClick={() => handleClick('education')}>Education</h3>
          <h3 className={`SectionTitle ${activeList === 'hobbies' ? 'active' : ''}`} onClick={() => handleClick('hobbies')}>Hobbies</h3>
        </div>
        <ul className={`List ${activeList === 'skills' ? 'active' : ''}`}>
          <li>Programming</li>
          <span className='sets'>C++</span>
          <li>Skill 2</li>
          <span className='sets'>hey</span>

          <li>Skill 3</li>
          <span className='sets'>hey</span>

        </ul>
        <ul className={`List ${activeList === 'education' ? 'active' : ''}`}>
          <li>2021</li>
          <span className='sets'>10TH XYZ School</span>

          <li>2023</li>
          <span className='sets'>12TH XYZ school</span>

          <li>2024</li>
          <span className='sets'>IIIT-DELHI</span>

        </ul>
        <ul className={`List ${activeList === 'hobbies' ? 'active' : ''}`}>
          <li>Hobby 1</li>
          <span className='sets'>hey</span>

          <li>Hobby 2</li>
          <span className='sets'>hey</span>

          <li>Hobby 3</li>
          <span className='sets'>hey</span>

        </ul>
      </div>
    </div>
  );
}

export default Middle;
