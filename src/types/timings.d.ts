export interface RootObject {
  code: number;
  data: TimingsData;
  status: string;
}

export interface TimingsData {
  date: DateClass;
  meta: Meta;
  timings: Timings;
}

export interface DateClass {
  gregorian: Gregorian;
  hijri: Hijri;
  readable: string;
  timestamp: string;
}

export interface Gregorian {
  date: string;
  day: string;
  designation: Designation;
  format: string;
  month: GregorianMonth;
  weekday: GregorianWeekday;
  year: string;
}

export interface Designation {
  abbreviated: string;
  expanded: string;
}

export interface GregorianMonth {
  en: string;
  number: number;
}

export interface GregorianWeekday {
  en: string;
}

export interface Hijri {
  date: string;
  day: string;
  designation: Designation;
  format: string;
  month: HijriMonth;
  weekday: HijriWeekday;
  year: string;
}

export interface HijriMonth {
  ar: string;
  en: string;
  number: number;
}

export interface HijriWeekday {
  ar: string;
  en: string;
}

export interface Meta {
  latitude: number;
  latitudeAdjustmentMethod: string;
  longitude: number;
  method: Method;
  midnightMode: string;
  offset: { [key: string]: number };
  school: string;
  timezone: string;
}

export interface Method {
  id: number;
  location: Location;
  name: string;
  params: Params;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Params {
  Fajr: number;
  Isha: number;
}

export interface Timings {
  Asr: string;
  Dhuhr: string;
  Fajr: string;
  Firstthird: string;
  Imsak: string;
  Isha: string;
  Lastthird: string;
  Maghrib: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}
