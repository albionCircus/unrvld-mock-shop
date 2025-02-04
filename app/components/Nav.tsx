import Link from "next/link"

export default async function Navigation() {
    return (
        <nav className="mx-auto pt-16 pb-6 flex flex-row items-center justify-center w-64">
            <Link href={"/"} className="text-slate-700 no-underline hover:underline hover:underline-offset-2">Home</Link>
            <span className="text-green-500 mx-5"> | </span>
            <Link href={"/products"} className="text-slate-700 no-underline hover:underline hover:underline-offset-2">Products</Link>
        </nav>
    );
};