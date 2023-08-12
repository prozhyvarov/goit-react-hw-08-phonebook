import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  margin-right: 10px;
  font: inherit;
  cursor: pointer;
  min-width: 90px;
  border-radius: 8px;

  background-color: #fff;

  font-size: 20px;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #fba003;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 10px;
  width: 1000px;
  flex-direction: row-reverse;
`;