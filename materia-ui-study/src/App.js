import React, { Component } from 'react';
import { Grid } from '@material-ui/core' 

import Header from './Header';
import Footer from './Footer';
import Content from './Content';


import './base.css'



class App extends Component {
  render() {
    return (
    <Grid container>
		<Grid item xs={12}><Header /></Grid>
		<Grid item xs={12}> <Content /> </Grid>	
		 <Grid item xs={12}> <Footer /></Grid>
	</Grid>
    );
  }
}

export default App;
