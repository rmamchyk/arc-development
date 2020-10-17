import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApp';
import Websites from './Websites';


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
                        render={() => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}
                    />
                    <Route
                        exact
                        path="/services"
                        render={() => <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />}
                    />
                    <Route
                        exact
                        path="/custom-software"
                        render={() => <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />}
                    />
                    <Route
                        exact
                        path="/mobile-apps"
                        render={() => <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />}
                    />
                    <Route
                        exact
                        path="/websites"
                        render={() => <Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />}
                    />
                    <Route exact path="/revolution" component={() => 'Revolution'} />
                    <Route exact path="/about" component={() => 'About Us'} />
                    <Route exact path="/contact" component={() => 'Contact Us'} />
                    <Route exact path="/estimate" component={() => 'Estimate'} />
                </Switch>

                <Footer
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
};
