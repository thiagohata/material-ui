import React from 'react';
import {Paper, Tabs } from '@material-ui/core';
import {Tab } from '@material-ui/core';


class CenteredTabs extends React.Component {

    state = { value: 0};
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      return (
        <Paper>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Paper>
      );
    }
  }
  

  
  export default CenteredTabs;