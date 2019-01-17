import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Avatar, Badge, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText }  from '@material-ui/core';
import  MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  list: {
    width: 350,
  },
  
};


class ButtonAppBar extends React.Component {
  
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() { 
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home', 'Sobre', 'Quem Somos', 'Contato'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Galeria', 'Notícias', 'Configuração'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );




    return(
      <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
          </IconButton>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
            {sideList}
            </div>
          </Drawer>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Admin Xpto
          </Typography>
          <Button color="inherit">Usuário</Button>
          <Badge className={classes.margin} badgeContent={10} color="secondary">
            <MailIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/46.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
    </div>
    )

  }


}




export default withStyles(styles)(ButtonAppBar);