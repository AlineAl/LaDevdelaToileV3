import type { EventLocation } from "./EventLocation.ts";

export type Event = {
    name: string;
    description: string;
    date: string;
    location: EventLocation;
    url: string;
  }