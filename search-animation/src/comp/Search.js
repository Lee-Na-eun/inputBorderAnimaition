import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;
const Div = styled.div`
  width: 52vw;
  position: relative;
  height: 4vw;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: ${HeaderKeyFrame} 5s ease infinite;
  background-size: 200% 100%;
  border-radius: 50px;
  display: table-cell;
  vertical-align: middle;
  > input {
    width: 49vw;
    height: 3vw;
    border-radius: 50px;
    border: none;
    display: block;
    margin: 0 auto;
    outline: none;
    padding-left: 2vw;
  }
`;

function Search() {
  return (
    <div>
      <Div>
        <input></input>
      </Div>
    </div>
  );
}

export default Search;
