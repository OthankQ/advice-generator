import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import dividerDesktop from '../imgs/pattern-divider-desktop.svg';
import dividerMobile from '../imgs/pattern-divider-mobile.svg';
import dice from '../imgs/icon-dice.svg';

export const StyledContainer = styled.div`
  max-width: 500px;
  min-width: 200px;
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

    :hover {
      background-color: hsl(150, 58%, 53%);
      cursor: pointer;
      transition: 0.2s;
    }

    :active {
      transform: translateY(4px);
    }
  }

  @media (max-width: 375px) {
    margin: 0 10px;
    .divider {
      width: 98%;
    }
  }
`;

type MainContainerState = {
  adviceNum: string;
  content: string;
  dividerImg: string;
};

export class MainContainer extends React.Component<{}, MainContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      adviceNum: '',
      content: '',
      dividerImg: dividerDesktop,
    };
  }

  async fetchAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice');
    data.json().then((res) => {
      this.setState({
        adviceNum: String(res.slip.id),
        content: res.slip.advice,
      });
    });
  }

  reRenderDivider = () => {
    this.setState({
      dividerImg: window.innerWidth > 375 ? dividerDesktop : dividerMobile,
    });
  };

  componentDidMount() {
    this.fetchAdvice();
    this.reRenderDivider();
    window.addEventListener('resize', this.reRenderDivider);
  }

  render() {
    return (
      <StyledContainer>
        <Header adviceNum={this.state.adviceNum} />
        <h2>"{this.state.content}"</h2>
        <img className="divider" src={this.state.dividerImg} alt="divider" />
        <div className="button-area">
          <button className="dice-btn" onClick={this.fetchAdvice.bind(this)}>
            <img src={dice} alt="dice" />
          </button>
        </div>
      </StyledContainer>
    );
  }
}
