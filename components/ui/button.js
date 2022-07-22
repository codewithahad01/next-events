import Link from "next/link";

function Button(props) {
    if(props.link) {
        return (
            <div className="flex flex-row ">
                <Link href={props.link}>
                <a className="w-full text-center font-bold my-2 text-purple-400 hover:text-black hover:bg-white bg-gray-800 rounded-lg p-2 shadow-xl md:mt-28 md:float-right">
                    {props.children}
                </a>
                </Link>
            </div>
        );
    }
    return <button className=" text-center font-bold text-purple-400 hover:text-black hover:bg-white bg-gray-800 rounded-lg p-2 shadow-xl " onClick={props.onClick}>{props.children}</button>
}

export default Button;
