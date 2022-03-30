const colors = {
  kofiWhite: "#FFF",
  kofiBlack: "#000",
  kofiRed: "#FF5E5B",
  kofiBlue: "#13C3FF",
  kofiYellow: "#FBAA19",
  kofiGrey: "#434B57",
};

export default function kofiColors(color) {
  return colors[color] ? colors[color] : color;
}
