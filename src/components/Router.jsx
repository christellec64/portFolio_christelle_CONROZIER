import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

import Projects from './Projects'
import AboutMe from './AboutMe'
import Home from './Home'
import Resume from './Resume'
import './Router.css'

class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'Home',
    }
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      <BrowserRouter>
        <Menu pointing secondary>
          <Link to="/" className="homeButton">
            <Menu.Item
              name="ChristelleC"
              active={activeItem === 'ChristelleC'}
              onClick={this.handleItemClick}
            />
          </Link>{' '}
          <div className="navBar">
            <Link to="/projects">
              <Menu.Item
                name="Projets"
                active={activeItem === 'Projets'}
                onClick={this.handleItemClick}
              />
            </Link>{' '}
            <Link to="/resume">
              <Menu.Item
                name="CV"
                active={activeItem === 'CV'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/aboutMe">
              <Menu.Item
                name="À propos"
                active={activeItem === 'À propos'}
                onClick={this.handleItemClick}
              />
            </Link>
          </div>
        </Menu>

        <Switch>
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router
