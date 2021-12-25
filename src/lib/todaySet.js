const setDescription = (today) => {
  let classForIcon = "";
  if (today === "Sunny" || today === "Clear") {
    today = "Clear";
    classForIcon = "fas fa-cloud fa-6x colorChangeCloud";
  } else if (
    today === "Overcast" ||
    today === "Partly cloudy" ||
    today === "Cloudy"
  ) {
    today = "Cloudy";
    classForIcon = "fas fa-cloud fa-6x colorChangeCloud";
  } else if (
    today.includes("snow") ||
    today.includes("Snow") ||
    today.includes("Ice")
  ) {
    today = "Snow";
    classForIcon = "far fa-snowflake fa-6x colorChangeCloud";
  } else if (today === "Blizzard") {
    today = "Strom";
    classForIcon = "fas fa-wind fa-6x colorChangeCloud";
  } else if (today === "Patchy rain possible") {
    today = "Rain Possible";
    classForIcon = "fas fa-cloud-sun-rain fa-6x colorChangeCloud";
  } else if (today === "Mist") {
    classForIcon = "fas fa-cloud-rain fa-6x colorChangeCloud";
  } else if (today.includes("rain") || today.includes("Rain")) {
    today = "Rain";
    classForIcon = "fas fa-cloud-showers-heavy fa-6x colorChangeCloud";
  } else if (today.includes("fog")) {
    today = "Fog";
    classForIcon = "fas fa-smog fa-6x colorChangeCloud";
  }

  return [today, classForIcon];
};

export default { setDescription };
