import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../footer/index.jsx";
const Hello = () => {
  return (
    <>
      <div
        className=""
        style={{
          overflowY: "hidden",
          overflowX: "hidden",
          overscrollBehavior: "none",
        }}
      >
        <div
          className="bg-dark d-flex justify-content-end"
          style={{ height: "100vh" }}
        >
          <div
            className="bg-white d-flex justify-content-center"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              marginTop: "220px",
              marginRight: "350px",
            }}
          >
            <img
              src="https://i1.sndcdn.com/artworks-000101877147-c17inw-t500x500.jpg"
              style={{ width: "110px", height: "110px", borderRadius: "50%" }}
            />
          </div>

          <div
            className="bg-white my-3 mx-3"
            style={{ width: "380px", borderRadius: "3%", height: "550px" }}
          >
            <div className="d-flex justify-content-between">
              <div className="mx-2 my-4">In-call messages</div>
              <div className="mx-2 my-4">
                <CloseIcon />
              </div>
            </div>
            <div
              className="border mx-3"
              style={{ borderRadius: "8px", backgroundColor: "#F1F3F4" }}
            >
              <p>
                <small style={{ fontSize: "14px", fontWeight: "400" }}>
                  Messages can only be seen by people in the call and are
                  deleted when the call ends.
                </small>
              </p>
            </div>
            <div
              className="border mx-3 d-flex justify-content-between"
              style={{
                borderRadius: "50px",
                backgroundColor: "#F1F3F4",
                marginTop: "355px",
              }}
            >
              <div
                className="p-2"
                style={{ fontSize: "12px", fontWeight: "500" }}
              >
                Send a message to everyone
              </div>
              <div className="p-1">
                <SendIcon style={{ fontSize: "18px" }} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hello;
