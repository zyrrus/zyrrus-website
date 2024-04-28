import type { MultiSelectItem } from "~/app/components/multiselect";

export const DAY = 24;
export const COPIES = 3; // 3 days = 6 divs
export const X_OFFSET = (-1 / (DAY * COPIES)) * 100;

export type Option = MultiSelectItem & { offset?: number };

// TODO: Correct data
export const TIME_ZONE_OPTIONS: Option[] = [
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

export const TIMES_12 = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

export const TIMES_24 = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
