import { useEffect, useRef, useState } from "react";
import {
  type Option,
  TIME_ZONE_OPTIONS,
  TIMES_12,
  TIMES_24,
} from "~/app/resources/(tools)/timezone/constants";
import {
  dateToHourDecimal,
  hourDecimalToTime,
} from "~/app/resources/(tools)/timezone/utils";

export const useTimeZoneMultiSelect = () => {
  const [selectedTimeZones, setSelectedTimeZones] = useState<Option[]>([]);

  // Get Initial Time Zone
  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const item = TIME_ZONE_OPTIONS.find(({ value }) => value === timeZone);
    if (item) setSelectedTimeZones([item]);
  }, []);

  const handleToggleTimeZone = (item: Option) => {
    const newSelection = [...selectedTimeZones];

    const index = newSelection.indexOf(item);
    if (index !== -1) {
      newSelection.splice(index, 1);
    } else {
      newSelection.push(item);
    }

    setSelectedTimeZones(newSelection);
  };

  const handleResetTimeZones = () => setSelectedTimeZones([]);

  return {
    selectedTimeZones,
    handleToggleTimeZone,
    handleResetTimeZones,
  };
};

interface TimeSelectFormControls {
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const useTimeSelect = (): {
  timeString: string;
  timeSelectFormControls: TimeSelectFormControls;
} => {
  const [timeString, setTimeString] = useState(
    hourDecimalToTime(dateToHourDecimal(new Date())),
  );

  return {
    timeString,
    timeSelectFormControls: {
      value: timeString,
      onChange: (e) => setTimeString(e.target.value),
    },
  };
};

export const useScrollControls = () => {
  const ref = useRef<HTMLDivElement>(null);

  const resetScroll = () => {
    const scrollableElement = ref.current;
    if (scrollableElement) {
      const maxScrollWidth =
        scrollableElement.scrollWidth - scrollableElement.clientWidth;
      const halfwayPoint = maxScrollWidth / 2;

      scrollableElement.scrollLeft = halfwayPoint;
    }
  };

  useEffect(() => {
    resetScroll();
  }, [ref.current]);

  return { ref, resetScroll };
};

export const useTimeFormat = () => {
  // TODO: <input type="time"> formatting is handled at the browser level.
  // Use a custom solution

  const prefers24HourFormat = () => {
    const date = new Date();

    // Get the formatted time for the current locale
    const formattedTime = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "numeric",
    }).format(date);

    // Check if the formatted time contains "AM" or "PM"
    return !/[AP]M/i.test(formattedTime);
  };

  const [is24HourTime, setIs24HourFormat] = useState(prefers24HourFormat());

  return {
    setIs24HourFormat,
    times: is24HourTime ? TIMES_24 : TIMES_12,
  };
};
