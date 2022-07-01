import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import divider from '../imgs/pattern-divider-desktop.svg';
import dice from '../imgs/icon-dice.svg';

export const StyledContainer = styled.div`
  width: 500px;
  height: auto;
  border-radius: 20px;
  background-color: #435063;
  color: hsl(150, 100%, 66%);
  text-align: center;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h2 {
    color: white;
  }

  .divider {
    color: white;
  }

  .button-area {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dice-btn {
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    border: 0px;
    height: 60px;
    width: 60px;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type MainContainerState = {
  adviceNum: String;
  content: String;
};

export class MainContainer extends React.Component<{}, MainContainerState> {
  state: MainContainerState = {
    adviceNum: '',
    content: '',
  };

  async fetchAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice');
    data.json().then((res) => {
      this.setState({
        adviceNum: String(res.slip.id),
        content: res.slip.advice,
      });
    });
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  render() {
    return (
      <StyledContainer>
        <Header adviceNum={this.state.adviceNum} />
        <h2>"{this.state.content}"</h2>
        <img className="divider" src={divider} alt="divider" />
        <div className="button-area">
          <button className="dice-btn">
            <img src={dice} alt="dice" />
          </button>
        </div>
      </StyledContainer>
    );
  }
}
