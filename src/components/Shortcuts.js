import React from "react";

const Shortcuts = ({ img, name, url }) => {
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
    <div className="shortcut" onClick={renderSite}>
      <div className="select">
        <img src={img} alt={"logo"} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Shortcuts;
