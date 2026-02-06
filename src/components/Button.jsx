import {Link} from "react-router";

function Button({available, done, isCurrentPage, link, display, onClick}) {
    return (
        <Link
            className={`
            m-1 p-3 rounded-full w-fit
            ${done ? isCurrentPage ?
                    "text-black bg-green-600" :
                    "text-green-600" :
                available ?
                    isCurrentPage ?
                        "text-black bg-yellow-600" :
                        "text-yellow-600 animate-pulse" :
                    "text-gray-600"}
                        border
                        ${done ? "border-green-600" :
                available ?
                    "border-yellow-600" :
                    "border-gray-600"}
                        ${!done && !available && "pointer-events-none"}`}
            to={link}
            onClick={onClick}
        >
            {display}
        </Link>
    );
}

export default Button;
