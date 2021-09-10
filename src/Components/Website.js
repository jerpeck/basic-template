import { React, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';

import theme from '../theme';

import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import ContentPage from './ContentPage';

class Website extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
        this.updateData = this.updateData.bind(this);
    }

    async updateData(){
        const data = await axios.get('/siteData.json')
        .then((data) => {
            // console.log(data.data);
            // const newData = JSON.parse(data.data);
            // console.log(newData);
            this.setState({data: data.data});
        })
        .catch((err) => {
            console.log(err);
        });
    };

    componentDidMount(){
        this.updateData();
    };

    render(){
            return(
                <div>
                    <ThemeProvider theme={theme} >
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    {this.state.data.hero && <Landing data={this.state.data} />}
                                </Route>
                                <Route exact path="/about" >
                                    <About title="About Us" description={this.state.data.aboutDescription} />
                                </Route>
                                <Route exact path="/contact">
                                    <Contact />
                                </Route>
                                <Route exact path="/services/:id" render={routeProps => (
                                    this.state.data.works && <ContentPage works={this.state.data.works} {...routeProps} />
                                )}/>
                            </Switch>
                        </Router>
                    </ThemeProvider>
                </div>
            )
        }
    }

export default Website;