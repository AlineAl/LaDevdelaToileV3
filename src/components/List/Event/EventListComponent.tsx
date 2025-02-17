import { coordinatesCities } from "../../../datas/coordinatesCities.ts";
import React, { useMemo, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { Pagination } from "../../Pagination.tsx";
import type { Page } from "astro";
import { CardCommunity } from "../../Card/Community/CardCommunity.tsx";

interface IEventListComponent {
    events: CollectionEntry<"events">[];
    page: Page;
}
export const EventListComponent = ({ events, page }: IEventListComponent) => {
    const [selectedCity, setSelectedCity] = useState("Toutes les villes");

    const handleSelectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
    };

    const filteredEvents = useMemo(() => {
        return selectedCity === "Toutes les villes" ? events : events.filter(event => event.data.city === selectedCity);
    }, [events, selectedCity]);

    console.log(filteredEvents);

    return (
        <section role="list" className="flex flex-col">
            <form className="max-w-sm md:max-w-xl m-4">
                <label htmlFor="city_select" className="block mb-2 text-lg font-medium">
                    Sélectionnez une ville
                </label>
                <select
                    id="city_select"
                    className="border border-gray-300 rounded-lg text-lg block w-full p-2.5 outline-none"
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
            </form>

            {filteredEvents.length > 0 ? (
                <>
                    <ul className="m-4 grid grid-cols-1 gap-2">
                        {filteredEvents.map(event =>
                            event.data.communities.map(community => (
                                <CardCommunity key={event.id} community={community} />
                            ))
                        )}
                    </ul>
                    {/*<Pagination page={page} currentPage={page.currentPage} totalPages={page.lastPage} />*/}
                </>
            ) : (
                <p className="text-center mt-4 text-lg font-semibold">Aucun événement trouvé pour {selectedCity}.</p>
            )}
        </section>
    );
};
