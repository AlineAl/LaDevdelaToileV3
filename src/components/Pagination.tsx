import { Icon } from "@iconify/react";
import type { Page } from "astro";

interface IPagination {
    page: Page;
    currentPage: number;
    totalPages: number;
}
export const Pagination = ({ page, currentPage, totalPages }: IPagination) => {
    return (
        <nav aria-label="pagination" className="flex items-center justify-center mt-4">
            {page?.url?.prev ? (
                <a
                    href={page?.url?.prev}
                    className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    <Icon className="size-8" icon="mdi:chevron-left" />
                </a>
            ) : (
                <button
                    disabled
                    className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg opacity-50"
                >
                    <Icon className="size-8" icon="mdi:chevron-left" />
                </button>
            )}

            <span className="flex items-center gap-1 border border-gray-300 border-r-0">
                <input
                    disabled
                    className="w-12 h-12 px-4 flex items-center justify-center leading-tight text-gray-500 bg-white"
                    value={currentPage}
                />
                <span className="text-gray-500">/</span>
                <span className="w-12 flex items-center justify-center text-gray-500">{totalPages}</span>
            </span>

            {page?.url?.next ? (
                <a
                    href={page?.url?.next}
                    className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    <Icon className="size-8" icon="mdi:chevron-right" />
                </a>
            ) : (
                <button
                    disabled
                    className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    <Icon className="size-8" icon="mdi:chevron-right" />
                </button>
            )}
        </nav>
    );
};
