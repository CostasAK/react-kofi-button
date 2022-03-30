import "./style.scss";

import PropTypes from "prop-types";
import React from "react";
import kofiColors from "../functions/kofiColors";

const known_presets = ["thin", "skinny"];

export default function KofiButton({
  username,
  label,
  title,
  preset,
  backgroundColor,
}) {
  username = username || "costasak";
  const profile_url = "https://ko-fi.com/" + username;

  if (preset && !known_presets.includes(preset)) {
    console.warn(`Unknown preset "${preset}", reverting to default`);
    preset = "";
  }

  return (
    <div className="KofiContainer">
      <a
        className={"KofiButton " + preset}
        href={profile_url}
        target="_blank"
        rel="noreferrer noopener external"
        title={title}
        style={{ background: kofiColors(backgroundColor) }}
      >
        <img className="KofiImage" alt="" />
        {label && <span className="KofiText">{label}</span>}
      </a>
    </div>
  );
}

KofiButton.propTypes = {
  username: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string,
  preset: PropTypes.string,
  backgroundColor: PropTypes.string,
};

KofiButton.defaultProps = {
  label: "Support Me on Ko-fi",
  title: "",
  preset: "",
  backgroundColor: "kofiBlue",
};
