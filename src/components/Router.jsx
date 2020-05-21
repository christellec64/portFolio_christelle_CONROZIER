import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import { Menu } from "semantic-ui-react";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <BrowserRouter>
          <Menu pointing secondary>
            <Link to="/">
              <Menu.Item
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              />
            </Link>{" "}
            <Link to="/projects">
              <Menu.Item
                name="Projets"
                active={activeItem === "Projets"}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>

          <Switch>
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default Router;
