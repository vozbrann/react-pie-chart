import styled from 'styled-components';

export default styled.button`
  flex: none;
  background-color: ${props => props.danger ? "#be0000" : "dodgerblue"};;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 13px 20px;
  cursor: pointer;
`;
