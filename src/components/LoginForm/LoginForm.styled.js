import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  width: 200px;
  margin: auto;
`;

export const Input = styled.input`
  background-color: inherit;
  width: inherit;
`;

export const Span = styled.span`
  ont-size: larger;
  font-weight: 500;
  color: #3b3a39;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: auto;
  background-color: inherit;
  box-shadow: -5px -5px 7px rgba(255, 255, 255, 0.5),
    5px 5px 7px rgba(70, 70, 70, 0.2);
  cursor: pointer;
  border: none;
  &:hover {
    color: #033e96;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #3b3a39;
`;
