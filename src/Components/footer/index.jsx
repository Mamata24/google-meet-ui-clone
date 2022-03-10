import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";
import InfoIcon from "@mui/icons-material/Info";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";
import CategoryIcon from "@mui/icons-material/Category";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div
        className="bg-dark p-3 d-flex justify-content-between"
        style={{ marginTop: "-75px" }}
      >
        <div style={{ fontWeight: "bold", color: "white" }}>
          9:51 PM | qdn-wiaz-tvq
        </div>
        <div className=" d-flex justify-content-between">
          <div
            className="mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#3C4043",
            }}
          >
            <MicIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#EA493C",
            }}
          >
            <VideocamOffIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#3C4043",
            }}
          >
            <ClosedCaptionOffIcon
              style={{ fontSize: "25px", color: "white" }}
            />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#3C4043",
            }}
          >
            <PresentToAllIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#3C4043",
            }}
          >
            <MoreVertIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className="mx-2 p-2"
            style={{
              borderRadius: "50%",
              backgroundColor: "#EA493C",
            }}
          >
            <CallEndIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
        </div>
        <div className=" d-flex justify-content-between">
          <div
            className="mx-2 p-2"
            style={{
              borderRadius: "50%",
            }}
          >
            <InfoIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
            }}
          >
            <PeopleAltIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
            }}
          >
            <ChatIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
          <div
            className=" mx-2 p-2"
            style={{
              borderRadius: "50%",
            }}
          >
            <CategoryIcon style={{ fontSize: "25px", color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
