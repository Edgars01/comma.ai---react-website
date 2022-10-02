import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Navbar, Homepage, Compatibility, Setupguide } from './components';
import './css/navbar.css';


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
            </div>

            <div className='footer'>
            
            </div>

        </div>
    );
}

export default App