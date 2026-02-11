import {Link} from "react-router";

function Button({available, done, isCurrentPage, link, display, onClick, isReset}) {
    return (

        <Link
            className={`${!done && !available && "pointer-events-none"}`}
            to={link}
            onClick={onClick}
        >
            <button
                className={`text-xs lg:text-base m-1 px-2 py-2 rounded-full w-fit cursor-pointer min-w-22 whitespace-nowrap
                ${isReset ? "text-black bg-red-600 border-red-600" : done ? isCurrentPage ?
                        "text-black bg-green-600" :
                        "text-green-600" :
                    available ?
                        isCurrentPage ?
                            "text-black bg-yellow-600" :
                            "text-yellow-600 animate-pulse" :
                        "text-gray-600"}
                        border
                        ${done ? "border-green-600" :
                    available && !isReset ?
                        "border-yellow-600" :
                        "border-gray-600"}`}
            >
                {display}
            </button>
        </Link>
    );
}

export default Button;
