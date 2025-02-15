import { Link } from "react-router-dom";

export function BottomWarning({label,buttonText,to}){
    return <div className="flex justify-center text-black text-md font-semibold">
        <div className="">
            {label}
        </div>
        <div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
        </Link>
        </div>
    </div>
}