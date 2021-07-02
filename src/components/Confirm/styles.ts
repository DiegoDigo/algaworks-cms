import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #F3F8FA;
   gap: 12px;
   width: 250px;
  padding: 24px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
