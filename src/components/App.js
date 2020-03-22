import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => 'Home'}></Route>
          <Route exact path="/services" component={() => 'Services'}></Route>
          <Route exact path="/custom-software" component={() => 'Custom Software'}></Route>
          <Route exact path="/mobile-apps" component={() => 'Mobile Apps'}></Route>
          <Route exact path="/websites" component={() => 'Websites'}></Route>
          <Route exact path="/revolution" component={() => 'Revolution'}></Route>
          <Route exact path="/about" component={() => 'About Us'}></Route>
          <Route exact path="/contact" component={() => 'Contact Us'}></Route>
          <Route exact path="/estimate" component={() => 'Estimate'}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
