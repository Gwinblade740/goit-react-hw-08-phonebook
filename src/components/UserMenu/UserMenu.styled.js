import styled from '@emotion/styled';

export const Button = styled.button`
  width: 60px;
  height: 30px;
  background-color: inherit;
  // box-shadow: 2px 2px 2px 2px #6a6a6e;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 5px;
  border: none;
  color: #3b3a39;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: red;
    box-shadow: -5px -5px 7px rgba(255, 255, 255, 0.5),
      5px 5px 7px rgba(70, 70, 70, 0.2);
  }
`;
export const Text = styled.p`
  font-size: larger;
  font-weight: 500;
  color: #3b3a39;
  margin-bottom: 10px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  flex-direction: column;
`;
