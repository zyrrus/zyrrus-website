"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Trash2 } from "lucide-react";
import { BreadcrumbNav } from "~/app/components/navigation/breadcrumb-nav";
import { MultiSelect } from "~/app/components/multiselect";
import { Badge } from "~/app/components/ui/badge";
import { Button } from "~/app/components/ui/button";
import { Input } from "~/app/components/ui/input";
import {
  type Option,
  TIME_ZONE_OPTIONS,
  TIMES_12,
  TIMES_24,
} from "~/app/resources/(tools)/timezone/constants";
import { Switch } from "~/app/components/ui/switch";
import { Label } from "~/app/components/ui/label";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Page() {
  const [animationParent] = useAutoAnimate();

  // Format Controls
  const { times, setIs24HourFormat } = useTimeFormat();

  // Scroll Controls
  const { ref: tzRef, resetScroll } = useCenterScroll();

  // Time Zone Select Controls
  const [selectedTimeZones, setSelectedTimeZones] = useState<Option[]>([]);
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

  const [timeString, setTimeString] = useState(
    hourDecimalToTime(dateToHourDecimal(new Date())),
  );

  useSetLocalTime({
    setTime: (date) => dateToHourDecimal(date, true),
    setTimeZone: (option) => setSelectedTimeZones([option]),
  });

  const timeContext = selectedTimeZones[0];

  return (
    <>
      <div className="mx-auto mt-10 max-w-7xl px-6">
        <BreadcrumbNav
          routes={[{ label: "Resources", href: "/resources" }]}
          page="Time Zone Visualization"
          className=""
        />
      </div>
      <main className="my-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-2xl font-semibold">Time Zone</h1>
          <p className="mt-2 text-xl text-secondary">
            A simple tool to visualize differences between time zones.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Column 1 */}
            <div className="">
              <p className="text-lg font-semibold">Select Time Zones</p>
              {/* Time Zone MultiSelect */}
              <div className="mt-2 flex flex-row gap-x-2">
                <MultiSelect
                  options={TIME_ZONE_OPTIONS}
                  selected={selectedTimeZones}
                  onSelectToggle={handleToggleTimeZone}
                  label={
                    selectedTimeZones.length > 0
                      ? `${selectedTimeZones.length} time zone${
                          selectedTimeZones.length > 1 ? "s" : ""
                        } selected`
                      : "Select time zones..."
                  }
                  placeholder="Select time zones..."
                  emptyResult="No time zone found."
                  buttonClassName="w-full"
                />

                {/* Clear All Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedTimeZones([])}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Time Zone Badge List */}
              <div
                ref={animationParent}
                className="mt-4 flex flex-row flex-wrap gap-2"
              >
                {selectedTimeZones.map((timeZone) => (
                  <Badge
                    key={timeZone.value}
                    variant="outline"
                    className="cursor-pointer gap-x-1 pr-1 "
                    onClick={() => handleToggleTimeZone(timeZone)}
                  >
                    {timeZone.label} ({timeZone.group})
                    <X className="h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="">
              <p className="text-lg font-semibold">Select Time</p>
              <Input
                className="mt-2"
                type="time"
                step="60"
                value={timeString}
                onChange={(e) => setTimeString(e.target.value)}
              />

              {/* Time Format Toggle */}
              <div className="mt-4 flex items-center space-x-2">
                <Label htmlFor="time-format">Use 24-hour time</Label>
                <Switch id="time-format" onCheckedChange={setIs24HourFormat} />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-row gap-x-4 md:mt-9">
              <Button variant="outline" onClick={resetScroll}>
                Reset Scroll
              </Button>
            </div>
          </div>
        </div>

        {/* Time Zone Container */}
        <div ref={tzRef} className="relative mt-8 overflow-auto pb-4">
          <div className="grid w-[500vw] grid-cols-5 gap-y-4 px-1">
            {selectedTimeZones.map(
              ({ label, value, group, offset }, index, arr) => {
                return (
                  <React.Fragment key={value}>
                    <div />
                    {/* Individual Time Zone Row */}
                    {["Yesterday", "Today", "Tomorrow"].map((day) => (
                      <div
                        key={day}
                        style={{
                          transform: `translateX(calc(${-timeToHourDecimal(
                            timeString,
                            {
                              offset: offset!,
                              isFirst: index === 0,
                              firstUTCOffset: arr[0]!.offset!,
                            },
                          )}/24 * 100vw + 50vw))`,
                        }}
                      >
                        {/* Time Zone Day Label */}
                        <p>
                          {day} ({label} - {group})
                        </p>
                        {/* Time Zone Times */}
                        <div className="mt-1 flex h-8 flex-row rounded-md bg-neutral-50 dark:bg-neutral-900">
                          {times.map((value, index) => (
                            <div
                              key={index}
                              className="relative w-[calc(100vw/12)] border border-neutral-200 dark:border-neutral-700"
                            >
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div />
                  </React.Fragment>
                );
              },
            )}
          </div>
          <div className="absolute bottom-0 left-[calc(500vw/2)] top-0 w-1 rounded-full bg-red-500/75" />
        </div>
      </main>
    </>
  );
}

// const useFormControl = () => {};

const hourDecimalToTime = (hourDecimal: number) => {
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

const timeToHourDecimal = (
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

const dateToHourDecimal = (time: Date, useUTC = false) => {
  const hours = useUTC ? time.getUTCHours() : time.getHours();
  const minutes = useUTC ? time.getUTCMinutes() : time.getMinutes();

  return hours + minutes / 60;
};

const toUTC = (offset: number) => {
  let label = "UTC";
  if (offset >= 0) label += "+" + offset;
  else label += offset;
  return label;
};

const useSetLocalTime = ({
  setTimeZone,
  setTime,
}: {
  setTimeZone: (option: Option) => void;
  setTime: (date: Date) => void;
}) => {
  const updateTimeZone = () => {
    const offsetHours = new Date().getTimezoneOffset() / -60;

    const item = TIME_ZONE_OPTIONS.find(
      ({ group }) => group === toUTC(offsetHours),
    );

    if (item) setTimeZone(item);
  };

  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    updateTimeZone();
    updateTime();
  }, []);
};

const useCenterScroll = () => {
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

const useTimeFormat = () => {
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
