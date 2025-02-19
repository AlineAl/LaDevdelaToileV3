import { Icon } from "@iconify/react";

interface IPagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export const Pagination = ({ currentPage, totalPages, onPageChange }: IPagination) => {
    return (
        <nav aria-label="pagination" className="flex items-center justify-center mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
            >
                <Icon className="size-8" icon="mdi:chevron-left" />
            </button>

            <span className="flex items-center gap-1 border border-gray-300 border-r-0">
                <input
                    disabled
                    className="w-12 h-12 px-4 flex items-center justify-center leading-tight text-gray-500 bg-white"
                    value={currentPage}
                />
                <span className="text-gray-500">/</span>
                <span className="w-12 flex items-center justify-center text-gray-500">{totalPages}</span>
            </span>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
            >
                <Icon className="size-8" icon="mdi:chevron-right" />
            </button>
        </nav>
    );
};
