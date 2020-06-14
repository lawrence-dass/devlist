import React from 'react';

import {
  CardContainer,
  CardContent,
  CardText,
  ImageTag,
  NameTag,
  ProfessionTag,
  TechStackInfo,
  BoldText,
  SkillTag,
} from './card.styles';

import { professionArray, techStackColors } from './cardData';

const Card = ({ profileInfo }) => {
  const profession =
    professionArray[Math.floor(Math.random() * professionArray.length)];
  return (
    <CardContainer>
      <CardContent>
        <ImageTag src={profileInfo.picture.medium} alt="avatar" />
        <CardText>
          <NameTag>
            {profileInfo.name.first} {profileInfo.name.last}
          </NameTag>
          <ProfessionTag> {profession.designation} </ProfessionTag>
          <TechStackInfo>
            <BoldText>Skills</BoldText> :{' '}
            {profession.skills.map((element) => {
              const randomStackColor =
                techStackColors[
                  Math.floor(Math.random() * techStackColors.length)
                ];
              return (
                <SkillTag key={element} color={randomStackColor}>
                  {' '}
                  {element}{' '}
                </SkillTag>
              );
            })}
          </TechStackInfo>
        </CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
