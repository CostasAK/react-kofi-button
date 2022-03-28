import "./KofiButton.scss";

import PropTypes from "prop-types";
import React from "react";

export default function KofiButton({ label, username }) {
  return (
    <a
      className="KofiButton"
      href={"https://ko-fi.com/" + (username || "costasak")}
      target="_blank"
      rel="noreferrer"
    >
      <img className="KofiImage" alt="" />
      <span className="KofiText">{label}</span>
    </a>
  );
}

KofiButton.propTypes = {
  label: PropTypes.string,
  username: PropTypes.string.isRequired,
};

KofiButton.defaultProps = {
  label: "Support Me on Ko-fi",
};
