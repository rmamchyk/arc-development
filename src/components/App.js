import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';

export default () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          ></Route>
          <Route
            exact
            path="/services"
            render={() => <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          ></Route>
          <Route exact path="/custom-software" component={() => 'Custom Software'}></Route>
          <Route exact path="/mobile-apps" component={() => 'Mobile Apps'}></Route>
          <Route exact path="/websites" component={() => 'Websites'}></Route>
          <Route exact path="/revolution" component={() => 'Revolution'}></Route>
          <Route exact path="/about" component={() => 'About Us'}></Route>
          <Route exact path="/contact" component={() => 'Contact Us'}></Route>
          <Route exact path="/estimate" component={() => 'Estimate'}></Route>
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};
