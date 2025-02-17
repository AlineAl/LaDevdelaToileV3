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
    return (
        <li
            role="listitem"
            className="min-h-full max-w-4xl flex flex-col items-center border border-default bg-offset p-12 transition duration-300 ease-in-out hover:cursor-pointer hover:text-white hover:bg-sky-700"
        >
            <p className="text-center font-extrabold text-xl">{community.name}</p>
        </li>
    );
};
