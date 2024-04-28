export const hourDecimalToTime = (hourDecimal: number) => {
  console.log("TIME", hourDecimal);
  if (hourDecimal < 0) hourDecimal += 23;
  else if (hourDecimal >= 24) hourDecimal -= 24;

  const hours = Math.floor(hourDecimal);

  const minutesDecimal = hourDecimal - hours;
  const minutes = Math.round(minutesDecimal * 60);

  // Format hours and minutes into 'HH:MM'
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

export const timeToHourDecimal = (
  time: string,
  context?: { offset: number; isFirst: boolean; firstUTCOffset: number },
) => {
  const [hourStr, minStr] = time.split(":");
  const hours =
    parseInt(hourStr ?? "0") +
    (context && !context.isFirst ? context.offset - context.firstUTCOffset : 0);
  const minutes = parseInt(minStr ?? "0");

  return hours + minutes / 60;
};

export const dateToHourDecimal = (time: Date, useUTC = false) => {
  const hours = useUTC ? time.getUTCHours() : time.getHours();
  const minutes = useUTC ? time.getUTCMinutes() : time.getMinutes();

  return hours + minutes / 60;
};

export const toUTC = (offset: number) => {
  let label = "UTC";
  if (offset >= 0) label += "+" + offset;
  else label += offset;
  return label;
};
