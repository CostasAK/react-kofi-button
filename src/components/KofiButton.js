import "./KofiButton.scss";

import PropTypes from "prop-types";
import React from "react";

export default function KofiButton({ label, username, title }) {
  return (
    <a
      className="KofiButton"
      href={"https://ko-fi.com/" + (username || "costasak")}
      target="_blank"
      rel="noreferrer noopener external"
      title={title}
    >
      <img className="KofiImage" alt="" />
      {label && <span className="KofiText">{label}</span>}
    </a>
  );
}

KofiButton.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string.isRequired,
};

KofiButton.defaultProps = {
  label: "Support Me on Ko-fi",
  title: "",
};
