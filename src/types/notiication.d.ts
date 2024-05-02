export interface NotifOptions {
  body?: string;
  icon?: URL | string;
  image?: URL | string;
  badge?: URL | string;
  vibrate?: number[];
  sound?: URL | string;
  dir?: "auto" | "ltr" | "rtl";
  tag?: string;
  data?: Record<string, string>;
  renotify?: boolean;
  requireInteraction?: boolean;
  silent?: boolean;
  actions?: string[];
  timestamp?: number;
}
