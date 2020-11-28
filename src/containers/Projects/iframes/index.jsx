import React from "react";
import inviteApp from "../../../images/inviteApp.gif";
import "./style.css";

const projectList = [
  <iframe
    src="https://my-inventory.netlify.app/"
    height="500"
    width="80%"
    title="M.Y-Inventory"
  ></iframe>,
  <iframe
    src="https://feed-the-needy.netlify.app"
    height="500"
    width="80%"
    title="It's On Us"
  ></iframe>,
  <iframe
    src="https://weekly-workout-planner.netlify.app/"
    height="500"
    width="80%"
    title="Weekly-Workout-Planner"
  ></iframe>,
  <iframe
    src="https://bertacsevercan.github.io/Movie-Project/"
    height="500"
    width="80%"
    title="Movie-Project"
  ></iframe>,
  <iframe
    src="https://bertacsevercan.github.io/Madlibz/"
    height="500"
    width="80%"
    title="Madlibz"
  ></iframe>,
  <iframe title="Grad-Invite" src={inviteApp} width="80%" height="500" frameBorder="0"></iframe>
];
export default projectList;
