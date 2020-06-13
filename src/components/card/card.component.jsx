import React from 'react';

import { CardContainer, CardContent, CardText, ImageTag, NameTag, ProfessionTag, MessageText, BoldText, SkillTag } from './card.styles';

const professionArray = [
  {
    designation: 'Frontend Developer',
    skills: ['HTML5', 'CSS3', 'Javascript', 'Jquery', 'Reactjs', 'Webpack',]
  },
  {
    designation: 'Backend Developer',
    skills: ['Nodejs', 'Scala', 'Golang', 'MongoDB', 'Golang']
  },
  {
    designation: 'Devops',
    skills: ['Docker', 'Maven', 'AWS', 'Jenkins', 'Kubernetes']
  },
  {
    designation: 'Software Engineer QA',
    skills: ['Java', 'Headless chrome', 'Selenium', 'Jira', 'Test Automation']
  }
]

const techStackColors = ['#493843', "#61988E", "#654062", "#d92027", "#ff9234", "#5c2a9d", "#f54291", "#c060a1", "#562349"]


const Card = ({ profileInfo }) => {
  const profession = professionArray[Math.floor(Math.random() * professionArray.length)];
  return (
    <CardContainer>
      <CardContent>
        <ImageTag
          src={profileInfo.picture.medium}
          alt="avatar"
        />
        <CardText>
            <NameTag>
              {profileInfo.name.first} {profileInfo.name.last} 
            </NameTag>
          <ProfessionTag> {profession.designation} </ProfessionTag>
          <MessageText>
            <BoldText>Skills</BoldText> : {
              profession.skills.map(element => {
                console.log(element);
                const randomStackColor = techStackColors[Math.floor(Math.random() * techStackColors.length)];
                return <SkillTag color={randomStackColor}> {element} </SkillTag>
              })
            }
          </MessageText>
        </CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
