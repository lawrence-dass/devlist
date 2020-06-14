import styled from 'styled-wind';

export const CardContainer = styled.div`
  .flex;
  .shadow-lg;
  .rounded-lg;
  .mx-4;
  .mx-auto;
  .my-4;
  .max-w-md;
  .md:max-w-3xl;
  background-color: whitesmoke;
`;

export const CardContent = styled.div`
  .px-8;
  .py-6;
  .max-w-sm;
  .w-full;
  .md:max-w-full;
  .md:flex;
`;

export const ImageTag = styled.img`
  .w-24; 
  .h-24;
  .rounded-full;
  .object-cover;
  .mr-5;
  .my-auto;
  .shadow;
`;

export const NameTag = styled.h2`
  .text-xl;
  .font-semibold;
  .text-gray-900;
  .my-4;
  .text-2xl;
`;

export const ProfessionTag = styled.p`
  .text-gray-700;
  .mb-5;
`;

export const CardText = styled.div`
  .lg:text-left;
`;

export const TechStackInfo = styled.div`
  .mt-3;
  .text-gray-700;
  .text-sm;
  .my-3;
`;

export const BoldText = styled.span`
  .font-semibold;
`;

export const SkillTag = styled.span`
  .inline-block;
  .rounded-md;
  .bg-black;
  .border-4;
  .border-gray-100;
  .py-1;
  .px-3;
  .text-xs;
  .font-bold;
  .mr-3;
  .mt-2;
  background-color: ${props => props.color};
`;
