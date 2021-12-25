let dayName = "";
const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const findDay = (date) => {
  dayName = new Date(date);
  dayName.setDate(dayName.getDate() + 1);
  return dayArray[dayName.getDay()];
};

export default { findDay };
