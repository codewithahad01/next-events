import Link from "next/link";

function Button(props) {
    return (
        <div className="flex flex-row ">
            <Link href={props.link}>
            <a className="w-full text-center font-bold my-2 text-purple-700 hover:text-black hover:bg-white bg-yellow-400 rounded-lg p-2 shadow-xl md:mt-28 md:float-right">
                {props.children}
            </a>
            </Link>
        </div>
    );
}

export default Button;
