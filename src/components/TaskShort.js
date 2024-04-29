import React from "react";

const TaskShort = ({ img, url }) => {
  const renderSite = () => {
    var width = 1000;
    var height = 600;

    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    var newWindow = window.open(
      url,
      "_blank",
      "width=" +
        width +
        ", height=" +
        height +
        ", left=" +
        left +
        ", top=" +
        top
    );

    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div className="taskshort" onClick={renderSite}>
      <div className="select2">
        <img src={img} alt={"logo"} />
      </div>
    </div>
  );
};

export default TaskShort;
