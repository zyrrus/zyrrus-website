"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { BreadcrumbNav } from "~/app/components/navigation/breadcrumb-nav";
import {
  MultiSelect,
  type MultiSelectItem,
} from "~/app/components/multiselect";
import { Badge } from "~/app/components/ui/badge";

const DAY = 24;
const COPIES = 3; // 3 days = 6 divs
const X_OFFSET = (-1 / (DAY * COPIES)) * 100;

type Option = MultiSelectItem & { offset?: number };

const TIME_ZONE_OPTIONS: Option[] = [
  // Group: UTC-12
  {
    label: "Baker Island",
    value: "baker_island",
    group: "UTC-12",
    offset: -12,
  },

  // Group: UTC-11
  { label: "Pago Pago", value: "pago_pago", group: "UTC-11", offset: -11 },

  // Group: UTC-10
  { label: "Honolulu", value: "honolulu", group: "UTC-10", offset: -10 },
  { label: "Anchorage", value: "anchorage", group: "UTC-10", offset: -10 },

  // Group: UTC-9
  { label: "Los Angeles", value: "los_angeles", group: "UTC-9", offset: -9 },
  { label: "Vancouver", value: "vancouver", group: "UTC-9", offset: -9 },

  // Group: UTC-8
  { label: "Denver", value: "denver", group: "UTC-8", offset: -8 },
  { label: "Phoenix", value: "phoenix", group: "UTC-8", offset: -8 },

  // Group: UTC-7
  { label: "Mexico City", value: "mexico_city", group: "UTC-7", offset: -7 },
  { label: "Chicago", value: "chicago", group: "UTC-7", offset: -7 },

  // Group: UTC-6
  { label: "New York", value: "new_york", group: "UTC-6", offset: -6 },
  { label: "Toronto", value: "toronto", group: "UTC-6", offset: -6 },

  // Group: UTC-5
  { label: "Caracas", value: "caracas", group: "UTC-5", offset: -5 },
  { label: "La Paz", value: "la_paz", group: "UTC-5", offset: -5 },

  // Group: UTC-4
  { label: "Santiago", value: "santiago", group: "UTC-4", offset: -4 },
  {
    label: "Buenos Aires",
    value: "buenos_aires",
    group: "UTC-4",
    offset: -4,
  },

  // Group: UTC-3
  {
    label: "Rio de Janeiro",
    value: "rio_de_janeiro",
    group: "UTC-3",
    offset: -3,
  },
  { label: "Sao Paulo", value: "sao_paulo", group: "UTC-3", offset: -3 },

  // Group: UTC-2
  {
    label: "Fernando de Noronha",
    value: "fernando_de_noronha",
    group: "UTC-2",
    offset: 2,
  },

  // Group: UTC-1
  {
    label: "Ponta Delgada",
    value: "ponta_delgada",
    group: "UTC-1",
    offset: -1,
  },
  { label: "Cape Verde", value: "cape_verde", group: "UTC-1", offset: -1 },

  // Group: UTC+0
  { label: "London", value: "london", group: "UTC+0", offset: 0 },
  { label: "Dublin", value: "dublin", group: "UTC+0", offset: 0 },

  // Group: UTC+1
  { label: "Paris", value: "paris", group: "UTC+1", offset: 1 },
  { label: "Berlin", value: "berlin", group: "UTC+1", offset: 1 },

  // Group: UTC+2
  { label: "Istanbul", value: "istanbul", group: "UTC+2", offset: 2 },
  { label: "Athens", value: "athens", group: "UTC+2", offset: 2 },

  // Group: UTC+3
  { label: "Moscow", value: "moscow", group: "UTC+3", offset: 3 },
  {
    label: "St. Petersburg",
    value: "st_petersburg",
    group: "UTC+3",
    offset: 3,
  },

  // Group: UTC+4
  { label: "Dubai", value: "dubai", group: "UTC+4", offset: 4 },
  { label: "Abu Dhabi", value: "abu_dhabi", group: "UTC+4", offset: 4 },

  // Group: UTC+5
  { label: "Karachi", value: "karachi", group: "UTC+5", offset: 5 },
  { label: "Islamabad", value: "islamabad", group: "UTC+5", offset: 5 },

  // Group: UTC+6
  { label: "Dhaka", value: "dhaka", group: "UTC+6", offset: 6 },
  { label: "Almaty", value: "almaty", group: "UTC+6", offset: 6 },

  // Group: UTC+7
  { label: "Bangkok", value: "bangkok", group: "UTC+7", offset: 7 },
  { label: "Jakarta", value: "jakarta", group: "UTC+7", offset: 7 },

  // Group: UTC+8
  { label: "Shanghai", value: "shanghai", group: "UTC+8", offset: 8 },
  { label: "Beijing", value: "beijing", group: "UTC+8", offset: 8 },

  // Group: UTC+9
  { label: "Tokyo", value: "tokyo", group: "UTC+9", offset: 9 },
  { label: "Seoul", value: "seoul", group: "UTC+9", offset: 9 },

  // Group: UTC+10
  { label: "Sydney", value: "sydney", group: "UTC+10", offset: 10 },
  { label: "Melbourne", value: "melbourne", group: "UTC+10", offset: 10 },

  // Group: UTC+11
  {
    label: "Vladivostok",
    value: "vladivostok",
    group: "UTC+11",
    offset: 11,
  },

  // Group: UTC+12
  { label: "Auckland", value: "auckland", group: "UTC+12", offset: 12 },
  { label: "Fiji", value: "fiji", group: "UTC+12", offset: 12 },
];

export default function Page() {
  const [selectedTimeZones, setSelectedTimeZones] = useState<Option[]>([]);
  useLocalTimeZone((x) => setSelectedTimeZones([x]));

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

  // TODO: Remove
  const [currentHour, setCurrentHour] = useState(timeToDecimal(new Date()));
  const circleClamp = (min: number, value: number, max: number) => {
    const range = max - min + 1;

    let newValue = value;
    if (newValue < min) {
      newValue += range;
    } else if (newValue > max) {
      newValue -= range;
    }

    return newValue;
  };
  const handleUpdateHour = (delta: -1 | 1) => {
    setCurrentHour((prev) => {
      return circleClamp(-11, prev + delta, 12);
    });
  };

  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <BreadcrumbNav
        routes={[{ label: "Resources", href: "/resources" }]}
        page="Time Zone Visualization"
        className=""
      />
      <main className="my-20">
        <h1 className="text-2xl font-semibold">Time Zone</h1>
        <p className="mt-2 text-xl text-secondary">
          A simple tool to visualize differences between time zones.
        </p>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Select Time Zones</h2>
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
          />
        </div>
        <div className="mt-4 flex flex-row gap-x-2">
          <p className="font-semibold">Selected:</p>
          {selectedTimeZones.map((timeZone) => (
            <Badge
              key={timeZone.value}
              className="cursor-pointer gap-x-1 pr-1 "
              onClick={() => handleToggleTimeZone(timeZone)}
            >
              {timeZone.label} ({timeZone.group})
              <X className="h-3 w-3" />
            </Badge>
          ))}
        </div>

        <ul>
          <li>
            Now -{">"} {circleClamp(-11, timeToDecimal(new Date()), 12)}
          </li>
          <li>
            12:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T00:00:00")),
              12,
            )}
          </li>
          <li>
            01:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T01:00:00")),
              12,
            )}
          </li>
          <li>
            02:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T02:00:00")),
              12,
            )}
          </li>
          <li>
            03:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T03:00:00")),
              12,
            )}
          </li>
          <li>
            04:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T04:00:00")),
              12,
            )}
          </li>
          <li>
            05:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T05:00:00")),
              12,
            )}
          </li>
          <li>
            06:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T06:00:00")),
              12,
            )}
          </li>
          <li>
            07:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T07:00:00")),
              12,
            )}
          </li>
          <li>
            08:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T08:00:00")),
              12,
            )}
          </li>
          <li>
            09:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T09:00:00")),
              12,
            )}
          </li>
          <li>
            10:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T10:00:00")),
              12,
            )}
          </li>
          <li>
            11:00 AM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T11:00:00")),
              12,
            )}
          </li>
          <li>
            12:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T12:00:00")),
              12,
            )}
          </li>
          <li>
            01:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T13:00:00")),
              12,
            )}
          </li>
          <li>
            02:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T14:00:00")),
              12,
            )}
          </li>
          <li>
            03:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T15:00:00")),
              12,
            )}
          </li>
          <li>
            04:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T16:00:00")),
              12,
            )}
          </li>
          <li>
            05:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T17:00:00")),
              12,
            )}
          </li>
          <li>
            06:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T18:00:00")),
              12,
            )}
          </li>
          <li>
            07:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T19:00:00")),
              12,
            )}
          </li>
          <li>
            08:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T20:00:00")),
              12,
            )}
          </li>
          <li>
            09:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T21:00:00")),
              12,
            )}
          </li>
          <li>
            10:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T22:00:00")),
              12,
            )}
          </li>
          <li>
            11:00 PM -{">"}{" "}
            {circleClamp(
              -11,
              timeToDecimal(new Date("2024-01-01T23:00:00")),
              12,
            )}
          </li>
        </ul>

        <div className="relative mt-10 w-[300%]">
          <TimeZoneMarkers currentHour={currentHour - 1} />
          {selectedTimeZones.map(({ value, offset }) => {
            return (
              offset !== undefined && (
                <TimeZone
                  key={value}
                  currentHour={currentHour}
                  utcOffset={offset}
                />
              )
            );
          })}
          <div className="absolute bottom-0 left-[calc(1/6*100%)] top-0 w-1 bg-red-500" />
        </div>
      </main>
    </div>
  );
}

const TimeZoneMarkers = ({ currentHour }: { currentHour: number }) => {
  const times = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  return (
    <div
      className="flex flex-row"
      style={{
        transform: `translateX(${currentHour * X_OFFSET}%)`,
      }}
    >
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-300">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-300">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-500">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-500">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-800">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-8 flex-1 translate-x-[-200%] flex-row">
        {times.map((value, index) => (
          <div key={index} className="relative flex-1 bg-slate-800">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeZone = ({
  utcOffset,
  currentHour,
}: {
  utcOffset: number;
  currentHour: number;
}) => {
  const utcLabel = toUTC(utcOffset);
  return (
    <div
      className="mt-4 flex flex-row"
      style={{
        transform: `translateX(${(currentHour + utcOffset) * X_OFFSET}%)`,
      }}
    >
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-300">
        {utcLabel}
      </div>
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-300">
        {utcLabel}
      </div>
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-500">
        {utcLabel}
      </div>
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-500">
        {utcLabel}
      </div>
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-800">
        {utcLabel}
      </div>
      <div className="h-8 flex-1 translate-x-[-200%] rounded-md bg-indigo-800">
        {utcLabel}
      </div>
    </div>
  );
};

const timeToDecimal = (time: Date) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return hours + minutes / 60;
};

const toUTC = (offset: number) => {
  let label = "UTC";
  if (offset >= 0) label += "+" + offset;
  else label += offset;
  return label;
};

const useLocalTimeZone = (updateSelection: (option: Option) => void) => {
  useEffect(() => {
    const offsetHours = new Date().getTimezoneOffset() / -60;

    const item = TIME_ZONE_OPTIONS.find(
      ({ group }) => group === toUTC(offsetHours),
    );

    if (item) updateSelection(item);
  }, []);
};
