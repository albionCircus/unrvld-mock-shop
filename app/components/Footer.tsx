export default async function Footer() {
    return <footer className="bg-stone-700 py-6 flex flex-row justify-center items-center">
            <p className="font-body text-white text-center">
                <small>
                    &copy; {new Date().getFullYear()} 
                    <span className="hidden sm:inline font-body text-white px-2">|</span>
                    <br className="block sm:hidden" />
                    <span>
                        UNRVLD Mock Shop
                    </span>
                </small>
           </p>
    </footer>
};