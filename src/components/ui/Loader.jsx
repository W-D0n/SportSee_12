import React from 'react';
import styled from 'styled-components';
import loaderImg from './../../assets/img/loader.svg';

const Container = styled.div`
  width:100%;
`

const Loader = () => {
  return (
    <Container>
      <img src={loaderImg} className="load" alt="loading logo" />
    </Container>
  )
}

export default Loader;