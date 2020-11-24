import React from 'react';
import styled from 'styled-components';

const PError = styled.p`
color: #851712;
font-weight :bold;
`;

const Error = ({error}) => {
  return (
    <div>
      <PError>{error}</PError>
    </div>
  )
}

export default Error
