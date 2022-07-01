import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  font-size: 12px;
  color: hsl(150, 100%, 66%);
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

type HeaderProps = {
  adviceNum: String;
};

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    const { adviceNum } = this.props;
    return <StyledHeader>ADVICE #{adviceNum}</StyledHeader>;
  }
}
