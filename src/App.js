import { Container } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import SocialBar from './components/Social/SocialBar';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <>
    <Container maxWidth="lg">
      <Header />
      <CardContainer />
      <SocialBar />

    </Container>
      
    </>
  );
}

export default App;
