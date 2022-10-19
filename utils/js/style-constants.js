// Default Dark
export const defaultStyleConstants = {
  primary_bg_color: "#000000"
}

// Light
export const Light = {
  primary_bg_color: "#FFFFFF"
}

const getStyleConstants = () => {
  //TODO: Logic for switching Modes
  // Overwrite Constants Repo with Light if user has selected the light mode

  return defaultStyleConstants;
}

export default getStyleConstants;