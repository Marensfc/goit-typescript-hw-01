enum DayOfWeek {
  Monday = "Weekday",
  Tuesday = "Weekday",
  Wednesday = "Weekday",
  Thursday = "Weekday",
  Friday = "Weekday",
  Saturday = "Weekend",
  Sunday = "Weekend",
}

const isWeekend = (day: DayOfWeek) => {
  if (day === "Weekend") {
    return true;
  } else if (day === "Weekday") {
    return false;
  }
};
