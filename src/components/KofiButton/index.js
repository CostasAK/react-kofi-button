import "./style.scss";

import PropTypes from "prop-types";
import React from "react";
import kofiColors from "../functions/kofiColors";

const known_presets = [
  "",
  "default",
  "thin",
  "skinny",
  "circle",
  "no_background",
];

export default function KofiButton({
  username,
  label,
  title,
  preset,
  backgroundColor,
  animation,
}) {
  username = username || "costasak";
  const profile_url = "https://ko-fi.com/" + username;

  if (preset && !known_presets.includes(preset)) {
    console.warn(`Unknown preset "${preset}", reverting to default`);
    preset = "";
  }
  if (preset === "default") {
    preset = "";
  }

  return (
    <div
      className="KofiContainer"
      style={{ "--background-color": kofiColors(backgroundColor) }}
    >
      <a
        className={"KofiButton " + preset}
        href={profile_url}
        target="_blank"
        rel="noreferrer noopener external"
        title={title}
      >
        <figure className="KofiImageContainer">
          <img className={"KofiImage animation_" + animation} alt="" />
        </figure>
        {label && <span className="KofiText">{label}</span>}
      </a>
    </div>
  );
}

KofiButton.propTypes = {
  username: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string,
  preset: PropTypes.oneOf(known_presets),
  backgroundColor: PropTypes.string,
  animation: PropTypes.oneOf([true, false, "true", "false", "on_hover"]),
};

KofiButton.defaultProps = {
  label: "Support Me on Ko-fi",
  title: "",
  backgroundColor: "kofiBlue",
  animation: true,
};
