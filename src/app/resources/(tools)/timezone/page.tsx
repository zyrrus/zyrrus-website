"use client";

import React from "react";
import { X, Trash2 } from "lucide-react";
import { BreadcrumbNav } from "~/app/components/navigation/breadcrumb-nav";
import { MultiSelect } from "~/app/components/multiselect";
import { Badge } from "~/app/components/ui/badge";
import { Button } from "~/app/components/ui/button";
import { Input } from "~/app/components/ui/input";
import { Switch } from "~/app/components/ui/switch";
import { Label } from "~/app/components/ui/label";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { timeToHourDecimal } from "~/app/resources/(tools)/timezone/utils";
import {
  type Option,
  TIME_ZONE_OPTIONS,
} from "~/app/resources/(tools)/timezone/constants";
import {
  useScrollControls,
  useTimeFormat,
  useTimeSelect,
  useTimeZoneMultiSelect,
} from "~/app/resources/(tools)/timezone/hooks";

export default function Page() {
  const { times, setIs24HourFormat } = useTimeFormat();
  const { ref: scrollRef, resetScroll } = useScrollControls();
  const { handleResetTimeZones, handleToggleTimeZone, selectedTimeZones } =
    useTimeZoneMultiSelect();
  const { timeString, timeSelectFormControls } = useTimeSelect();

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
                  onClick={handleResetTimeZones}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Time Zone Badge List */}
              <SelectedTimeZones
                timeZones={selectedTimeZones}
                onTimeZoneClick={handleToggleTimeZone}
              />
            </div>

            {/* Column 2 */}
            <div className="">
              <p className="text-lg font-semibold">Select Time</p>
              <Input
                className="mt-2"
                type="time"
                step="60"
                {...timeSelectFormControls}
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
        <TimeZoneViewer
          timeZones={selectedTimeZones}
          scrollRef={scrollRef}
          timeString={timeString}
          times={times}
        />
      </main>
    </>
  );
}

interface SelectedTimeZonesProps {
  timeZones: Option[];
  onTimeZoneClick: (timeZone: Option) => void;
}

const SelectedTimeZones = ({
  timeZones,
  onTimeZoneClick,
}: SelectedTimeZonesProps) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="mt-4 flex flex-row flex-wrap gap-2">
      {timeZones.map((timeZone) => (
        <Badge
          key={timeZone.value}
          variant="outline"
          className="cursor-pointer gap-x-1 pr-1 "
          onClick={() => onTimeZoneClick(timeZone)}
        >
          {timeZone.label} ({timeZone.group})
          <X className="h-3 w-3" />
        </Badge>
      ))}
    </div>
  );
};

interface TimeZoneViewerProps {
  timeZones: Option[];
  scrollRef: React.RefObject<HTMLDivElement>;
  timeString: string;
  times: string[];
}

const TimeZoneViewer = ({
  timeZones,
  scrollRef,
  timeString,
  times,
}: TimeZoneViewerProps) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={scrollRef} className="relative mt-8 overflow-auto pb-4">
      <div
        ref={animationParent}
        className="grid w-[500vw] grid-cols-5 gap-y-4 px-1"
      >
        {timeZones.map(({ label, value, group, offset }, index, arr) => {
          return (
            <React.Fragment key={value}>
              <div />
              {/* Individual Time Zone Row */}
              {["Yesterday", "Today", "Tomorrow"].map((day) => (
                <div
                  key={day}
                  className="transition-transform"
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
        })}
      </div>
      <CurrentTimeIndicator />
    </div>
  );
};

const CurrentTimeIndicator = () => {
  return (
    <div className="absolute bottom-0 left-[calc(500vw/2)] top-0 w-1 rounded-full bg-red-500/75" />
  );
};
