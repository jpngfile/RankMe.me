import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import LayoutTopHeader from './LayoutTopHeader'

export default class MainLayout extends Component {
  render() {
    // Top Menu with DropDown
    return (
      <MuiThemeProvider>
        <div className="app">
          <header className="primary-header"></header>
          <aside className="primary-aside"></aside>
          <LayoutTopHeader />
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
};
