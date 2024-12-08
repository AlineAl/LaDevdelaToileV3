import type { EventLocation } from "./EventLocation.ts";

export type Event = {
    title: string;
    description: string;
    events: [{
        location: EventLocation;
        path: string;
    }]
    icon?: string;
  }