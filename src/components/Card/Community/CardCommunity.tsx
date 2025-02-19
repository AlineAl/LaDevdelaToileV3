import { useMemo } from "react";

interface ICardCommunity {
    community: {
        events: {
            link: string;
            title: string;
            id: string;
            date: string;
            organizationName: string;
            latitude: number;
            longitude: number;
        }[];
        id: string;
        name: string;
        platform: string;
    };
}

export const CardCommunity = ({ community }: ICardCommunity) => {
    const sortedEvents = useMemo(() => {
        return [...community.events].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    }, [community.events]);

    const futureEvents = useMemo(() => {
        return sortedEvents.filter(event => new Date(event.date) > new Date());
    }, [sortedEvents]);

    const firstFutureEvent = futureEvents[0];

    return (
        <li
            role="listitem"
            className="min-h-full max-w-4xl rounded-md flex justify-between items-center border border-default p-6"
        >
            <div className="mb-6">
                <h3 className="text-center font-extrabold text-xl mb-2">{community.name}</h3>
            </div>

            {firstFutureEvent ? (
                <div>
                    <span className="uppercase">Prochain événement</span>
                    <div className="w-96 p-4 mt-2 border border-gray-200 rounded-md">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-semibold mb-2">{firstFutureEvent.title}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                    <span>
                                        {Intl.DateTimeFormat("fr-FR", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }).format(new Date(firstFutureEvent.date))}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href={firstFutureEvent.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 text-sm underline flex justify-end hover:text-sky-500"
                        >
                            Voir l'événement
                        </a>
                    </div>
                </div>
            ) : (
                <p className="text-sm text-gray-500">Aucun événement à venir.</p>
            )}
        </li>
    );
};

