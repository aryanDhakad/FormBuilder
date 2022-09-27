import React from "react";
import { useNavigate } from "react-router-dom";
import form from "./form.png";
import "./Mainbody.css";

const Mainbody = () => {
  const navigate = useNavigate();
  const goToCreateForm = () => {
    navigate("/createForm");
  };
  const goToViewForm = () => {
    navigate("/showForm");
  };
  return (
    <>
      {" "}
      <div className="main_body">
        <div className="mainbody_top">
          <h3 style={{ fontSize: "16px", fontWeight: "500" }}>
            Created/Saved Forms
          </h3>
        </div>
        <div className="mainbody_docs">
          <div className="doc_card">
            <img
              onClick={() => goToCreateForm()}
              src={form}
              alt="form"
              height="100px"
            />
            <p className="creator_name" style={{ textAlign: "center" }}>
              Form Id{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="main_body">
        <div className="mainbody_top">
          <h3 style={{ fontSize: "16px", fontWeight: "500" }}>View Forms</h3>
        </div>
        <div className="mainbody_docs">
          <div className="doc_card">
            <img
              onClick={() => goToViewForm()}
              src={form}
              alt="form"
              height="100px"
            />
            <p className="creator_name" style={{ textAlign: "center" }}>
              Form Id{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
