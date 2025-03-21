import { coordinatesCities } from "../../../datas/coordinatesCities.ts";
import React, { useMemo, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { Pagination } from "../../Pagination.tsx";
import { CardCommunity } from "../../Card/Community/CardCommunity.tsx";
import { LuCalendar } from "react-icons/lu";
import { CommunitiesHeader } from "../../Header/CommunitiesHeader.tsx";

interface ICommunityListComponent {
    communities: CollectionEntry<"communities">[];
}
const getInitialState = () => {
    if (typeof window === 'undefined') return { page: 1, city: "Toutes les villes" };

    const params = new URLSearchParams(window.location.search);
    const savedCity = localStorage.getItem("selectedCity");
    const urlCity = params.get("city");

    if (savedCity && !urlCity) {
        updateURL(1, savedCity);
        return { page: 1, city: savedCity };
    }

    return {
        page: Math.max(1, parseInt(params.get("page") || "1")),
        city: params.get("city") || savedCity || "Toutes les villes"
    };
};

const updateURL = (page: number, city: string) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);

    if (page > 1) params.set("page", page.toString());
    else params.delete("page");

    if (city !== "Toutes les villes") params.set("city", city);
    else params.delete("city");

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.pushState({}, "", newUrl);
};

export const CommunityListComponent = ({ communities }: ICommunityListComponent) => {
    const initialState = getInitialState();
    const [selectedCity, setSelectedCity] = useState(initialState.city);
    const [currentPage, setCurrentPage] = useState(initialState.page);
    const [searchValue, setSearchValue] = useState("");
    const communitiesPerPage = 4;

    const filteredEvents = useMemo(() => {
        return selectedCity === "Toutes les villes"
            ? communities
            : communities.filter(community => community.data.city === selectedCity);
    }, [communities, selectedCity]);

    const allCommunities = useMemo(() => {
        return filteredEvents.flatMap(event =>
            event.data.communities.map(community => ({
                ...community,
                eventId: event.id,
                city: event.data.city
            }))
        );
    }, [filteredEvents]);

    const filteredCommunities = useMemo(() => {
        if (!searchValue) return allCommunities;

        return allCommunities.filter(community =>
            community.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [allCommunities, searchValue]);

    const totalPages = Math.ceil(filteredCommunities.length / communitiesPerPage);

    const paginatedCommunities = useMemo(() => {
        const startIndex = (currentPage - 1) * communitiesPerPage;
        return filteredCommunities.slice(startIndex, startIndex + communitiesPerPage);
    }, [filteredCommunities, currentPage]);

    const handleSelectCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCity = e.target.value;
        setSelectedCity(newCity);
        setCurrentPage(1);
        localStorage.setItem("selectedCity", newCity);
        updateURL(1, newCity);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        updateURL(newPage, selectedCity);
    };

    const handleSearchCommunity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        setSearchValue(newSearch);
        setCurrentPage(1);
    };

    if (currentPage > totalPages && totalPages > 0) {
        handlePageChange(totalPages);
    }

    return (
        <section role="list" className="flex flex-col">
            <CommunitiesHeader />
            <section role="form" className="flex justify-between items-center flex-wrap md:flex-nowrap">
                <form className="m-8 flex items-center flex-wrap md:flex-nowrap w-full md:w-auto">
                    <select
                        id="city_select"
                        className="border border-[#DEDEDE] text-[#6D6D6D] rounded-lg text-sm h-12 md:mr-4 p-2.5 outline-none w-full md:w-56 mb-2 md:mb-0"
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
                        className="border border-[#DEDEDE] placeholder-[#6D6D6D] rounded-lg h-12 p-2.5 text-sm outline-none w-full md:w-56"
                        onChange={handleSearchCommunity}
                    />
                </form>

                <button
                    type="button"
                    className="flex items-center justify-center mt-0 md:mt-8 m-8 p-2.5 h-12 text-sm bg-[#4C40CF] text-white rounded-lg whitespace-nowrap"
                    onClick={() => window.location.href = "/events"}
                >
                    <LuCalendar size={20} className="mr-2" />
                    <span className="mt-1">Voir les événements</span>
                </button>
            </section>

            <span className="mx-8 text-sm text-[#6D6D6D] italic">{filteredCommunities.length} communautés</span>

            {paginatedCommunities.length > 0 ? (
                <>
                    <ul className="mx-8 grid grid-cols-1 gap-2">
                        {paginatedCommunities.map(community => (
                            <CardCommunity
                                key={`${community.eventId}-${community.id}`}
                                community={community}
                                city={community.city}
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
