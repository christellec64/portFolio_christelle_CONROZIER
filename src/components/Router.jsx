import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { Menu } from "semantic-ui-react";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <BrowserRouter>
        <Menu pointing secondary vertical>
        <Link to="/">
            <Menu.Item
              name="Christelle.C"
              active={activeItem === "Christelle.C"}
              onClick={this.handleItemClick}
            />
          </Link>{" "}
          <Link to="/">
            <Menu.Item
              name="Projets"
              active={activeItem === "Projets"}
              onClick={this.handleItemClick}
            />
          </Link>{" "}
          <Link to="/projects">
            <Menu.Item
              name="À propos"
              active={activeItem === "À propos"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>

        <Switch>
          <Route path="/projects" component={AboutMe} />
          <Route exact path="/" component={Projects} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
