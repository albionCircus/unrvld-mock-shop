import Link from "next/link"

export default async function Navigation() {
    return (
        <nav className="mx-auto pt-16 pb-6 flex flex-row items-center justify-between w-56">
            <Link href={"/"} className="text-slate-700 no-underline hover:underline hover:underline-offset-2">Home</Link>
            <span className="text-green-500"> | </span>
            <Link href={"/products"} className="text-slate-700 no-underline hover:underline hover:underline-offset-2">Products</Link>
            <span className="text-green-500"> | </span>
            <Link href={"/faqs"} className="text-slate-700 no-underline hover:underline hover:underline-offset-2">FAQ&apos;s</Link>
        </nav>
    )
};