import type { EventLocation } from "./EventLocation.ts";

export type Conference = {
    title: string;
    description: string;
    location: EventLocation;
    path: string;
    icon?: string;
};
