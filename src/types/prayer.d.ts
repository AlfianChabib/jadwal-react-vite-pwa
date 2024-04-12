export interface RootObject {
  code: number;
  data: PrayerData[];
  status: string;
}

export interface PrayerData {
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
  format: Format;
  month: GregorianMonth;
  weekday: GregorianWeekday;
  year: string;
}

export interface Designation {
  abbreviated: Abbreviated;
  expanded: Expanded;
}

export enum Abbreviated {
  Ad = "AD",
  Ah = "AH",
}

export enum Expanded {
  AnnoDomini = "Anno Domini",
  AnnoHegirae = "Anno Hegirae",
}

export enum Format {
  DDMmYyyy = "DD-MM-YYYY",
}

export interface GregorianMonth {
  en: PurpleEn;
  number: number;
}

export enum PurpleEn {
  April = "April",
}

export interface GregorianWeekday {
  en: string;
}

export interface Hijri {
  date: string;
  day: string;
  designation: Designation;
  format: Format;
  holidays: string[];
  month: HijriMonth;
  weekday: HijriWeekday;
  year: string;
}

export interface HijriMonth {
  ar: Ar;
  en: FluffyEn;
  number: number;
}

export enum Ar {
  رَمَضان = "رَمَضان",
  شَوّال = "شَوّال",
}

export enum FluffyEn {
  Ramaḍān = "Ramaḍān",
  Shawwāl = "Shawwāl",
}

export interface HijriWeekday {
  ar: string;
  en: string;
}

export interface Meta {
  latitude: number;
  latitudeAdjustmentMethod: LatitudeAdjustmentMethod;
  longitude: number;
  method: Method;
  midnightMode: MidnightMode;
  offset: { [key: string]: number };
  school: MidnightMode;
  timezone: Timezone;
}

export enum LatitudeAdjustmentMethod {
  AngleBased = "ANGLE_BASED",
}

export interface Method {
  id: number;
  location: Location;
  name: Name;
  params: Params;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export enum Name {
  KementerianAgamaRepublikIndonesia = "Kementerian Agama Republik Indonesia",
}

export interface Params {
  Fajr: number;
  Isha: number;
}

export enum MidnightMode {
  Standard = "STANDARD",
}

export enum Timezone {
  AsiaJakarta = "Asia/Jakarta",
}

export interface Timings {
  Asr: ASR;
  Dhuhr: string;
  Fajr: Fajr;
  Firstthird: string;
  Imsak: Imsak;
  Isha: string;
  Lastthird: Lastthird;
  Maghrib: string;
  Midnight: string;
  Sunrise: Sunrise;
  Sunset: string;
}

export enum ASR {
  The1450Wib = "14:50 (WIB)",
  The1451Wib = "14:51 (WIB)",
  The1452Wib = "14:52 (WIB)",
}

export enum Fajr {
  The0413Wib = "04:13 (WIB)",
  The0414Wib = "04:14 (WIB)",
  The0415Wib = "04:15 (WIB)",
  The0416Wib = "04:16 (WIB)",
}

export enum Imsak {
  The0403Wib = "04:03 (WIB)",
  The0404Wib = "04:04 (WIB)",
  The0405Wib = "04:05 (WIB)",
  The0406Wib = "04:06 (WIB)",
}

export enum Lastthird {
  The0130Wib = "01:30 (WIB)",
  The0131Wib = "01:31 (WIB)",
  The0132Wib = "01:32 (WIB)",
  The0133Wib = "01:33 (WIB)",
  The0134Wib = "01:34 (WIB)",
}

export enum Sunrise {
  The0533Wib = "05:33 (WIB)",
  The0534Wib = "05:34 (WIB)",
}
