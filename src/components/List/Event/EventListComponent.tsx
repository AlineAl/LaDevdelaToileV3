import { coordinatesCities } from "../../../datas/coordinatesCities.ts";
import React, { useMemo, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { Pagination } from "../../Pagination.tsx";
import { CardCommunity } from "../../Card/Community/CardCommunity.tsx";

interface IEventListComponent {
    events: CollectionEntry<"events">[];
}

export const EventListComponent = ({ events }: IEventListComponent) => {
    const [selectedCity, setSelectedCity] = useState("Toutes les villes");
    const [currentPage, setCurrentPage] = useState(1);
    const communitiesPerPage = 4;

    const handleSelectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
        setCurrentPage(1);
    };

    const filteredEvents = useMemo(() => {
        return selectedCity === "Toutes les villes"
            ? events
            : events.filter(event => event.data.city === selectedCity);
    }, [events, selectedCity]);

    const allCommunities = useMemo(() => {
        return filteredEvents.flatMap(event =>
            event.data.communities.map(community => ({
                ...community,
                eventId: event.id
            }))
        );
    }, [filteredEvents]);

    const totalPages = Math.ceil(allCommunities.length / communitiesPerPage);

    const paginatedCommunities = useMemo(() => {
        const startIndex = (currentPage - 1) * communitiesPerPage;
        return allCommunities.slice(startIndex, startIndex + communitiesPerPage);
    }, [allCommunities, currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section role="list" className="flex flex-col">
            <form className="max-w-sm md:max-w-xl m-4 flex justify-between">
                <select
                    id="city_select"
                    className="border border-gray-300 rounded-lg text-lg block w-full mr-4 p-2.5 outline-none"
                    onChange={handleSelectCity}
                    value={selectedCity}
                >
                    <option>Toutes les villes</option>
                    {coordinatesCities.map((cityObj, index) => (
                        <option key={index} value={cityObj.city}>
                            {cityObj.city}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Rechercher une communauté"
                    className="border border-gray-300 rounded-lg block w-full p-2.5 outline-none"
                />
            </form>

            {paginatedCommunities.length > 0 ? (
                <>
                    <ul className="mx-4 grid grid-cols-1 gap-2">
                        {paginatedCommunities.map(community => (
                            <CardCommunity
                                key={`${community.eventId}-${community.id}`}
                                community={community}
                            />
                        ))}
                    </ul>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <p className="text-center mt-4 text-lg font-semibold">
                    Aucune communauté trouvée pour {selectedCity}.
                </p>
            )}
        </section>
    );
};
