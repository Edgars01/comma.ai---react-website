import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Navbar, Homepage, Compatibility, Setupguide, Footer } from './components';
import './css/navbar.css';
import './css/footer.css';

const App = () => {

    return (
        <div className='app'>

            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>

                            <Route exact path="/">
                                <Homepage />
                            </Route>

                            <Route exact path="/compatibility">
                                <Compatibility />
                            </Route>

                            <Route exact path="/setup-guide">
                                <Setupguide />
                            </Route>
                            
                        </Switch>
                    </div>
                </Layout>

                <footer className='footerContainer'>
                < Footer />
                </footer>
            </div>

            

        </div>
        
    );
}

export default App