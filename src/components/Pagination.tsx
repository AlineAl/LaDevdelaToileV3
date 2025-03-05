import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface IPagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export const Pagination = ({ currentPage, totalPages, onPageChange }: IPagination) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 3;

        let startPage = currentPage;
        if (startPage + maxPagesToShow - 1 > totalPages) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`flex items-center justify-center h-12 w-12 mx-1 rounded-md 
                        ${currentPage === i
                        ? 'bg-[#4C40CF] text-white'
                        : 'text-[#4C40CF] bg-white border border-[#4C40CF]'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <nav aria-label="pagination" className="flex items-center justify-center mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center text-sm h-12 px-3 mr-1 rounded-md leading-tight text-[#4C40CF] bg-white border border-[#4C40CF]"
            >
                <LuArrowLeft />
                <span className="ml-2">Page précédente</span>
            </button>

            <span className="flex items-center text-sm gap-1">
                {renderPageNumbers()}
            </span>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center text-sm justify-center h-12 px-3 ml-1 rounded-md leading-tight text-[#4C40CF] bg-white border border-[#4C40CF]"
            >
                <span className="mr-2">Page suivante</span>
                <LuArrowRight />
            </button>
        </nav>
    );
};
