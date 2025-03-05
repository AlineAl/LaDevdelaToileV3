import { useMemo } from "react";
import { LuCalendar, LuMapPin, LuSquareArrowOutUpRight } from "react-icons/lu";

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
        city: string
    };
}

export const CardCommunity = ({ community }: ICardCommunity) => {
    const sortedEvents = useMemo(() => {
        return [...community.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [community.events]);

    const futureEvents = useMemo(() => {
        return sortedEvents.filter(event => new Date(event.date) > new Date());
    }, [sortedEvents]);

    const firstFutureEvent = futureEvents[0];

    return (
        <li
            role="listitem"
            className="flex justify-between items-center border-b p-6"
        >
            <div className="mb-6">
                <h3 className="text-center font-extrabold text-2xl mb-2">{community.name}</h3>
            </div>

            {firstFutureEvent ? (
                <div>
                    <span className="uppercase text-sm">Prochain événement</span>
                    <div className="w-96 p-6 mt-2 border border-[#DEDEDE] rounded-[10px] shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm leading-5 mb-2">{firstFutureEvent.title}</h4>
                                <div className="flex text-sm text-[#4B4B4B]">
                                    <LuCalendar size={15} color="4C40CF" />
                                    <div className="flex items-center gap-2 ml-2 mb-2">
                                        <span className="leading-5">
                                            {Intl.DateTimeFormat("fr-FR", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            }).format(new Date(firstFutureEvent.date))}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex text-[#4B4B4B] text-sm">
                                    <LuMapPin size={15} color="4C40CF" />
                                    <span className="ml-2">{community.city}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href={firstFutureEvent.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 text-sm underline flex justify-end items-center text-[#4C40CF]"
                        >
                            <span>Voir l'événement</span>
                            <LuSquareArrowOutUpRight size={15} className="ml-2" />
                        </a>
                    </div>
                </div>
            ) : (
                <p className="text-sm text-gray-500">Aucun événement à venir.</p>
            )}
        </li>
    );
};
