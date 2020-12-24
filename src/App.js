import { Container } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import theme from './Theme'
import SocialBar from './components/Social/SocialBar';
import CardContainer from './components/CardContainer/CardContainer';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CardContainer />
        <SocialBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
