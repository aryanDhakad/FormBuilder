import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import App from "../App";
import Formpage from "./Formpage";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    <div></div>;
  };
  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          <List>
            <div>
              <h1></h1>
            </div>
            <ListItem>
              <b>
                FormsBuilder by <br />
                Dharmendra
              </b>
            </ListItem>
            <ListItem>
              <Link to="/createForm">Create New Form</Link>
            </ListItem>
            <ListItem>
              <Link to="/showForm">View Created Form</Link>
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
