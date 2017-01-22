
import React, { Component } from 'react';
//material-ui components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import VertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

import '../App.css';

export default class LayoutTopHeader extends Component {
	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

	render () {
    return (
    	<div>
      <AppBar
        className="Dank-header" title="DankRank"
        iconElementRight={<IconMenu
    		iconButtonElement={
      			<IconButton><VertIcon /></IconButton>
    		}
    		targetOrigin={{horizontal: 'right', vertical: 'top'}}
    		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
 		 >
    	<MenuItem primaryText="Refresh" href="." />
    	<MenuItem primaryText="Help" />
    	<MenuItem primaryText="Sign out" />
  		</IconMenu>}
  		iconElementLeft={<IconButton onTouchTap={this.handleToggle}><MenuIcon /> </IconButton>}
      />
      <Drawer open={this.state.open}>
          <MenuItem>My Rated Memes</MenuItem>
          <MenuItem>Newest Memes</MenuItem>
          <MenuItem>Legacy Memes</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}> Close Menu </MenuItem>
        </Drawer>
        </div>
    );
  }
}