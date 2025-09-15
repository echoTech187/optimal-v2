export default function Navigation() {
    return (
        <>
            <div className="max-md:hidden flex items-center justify-center w-auto h-full px-4">
                <ul className={`flex items-center justify-center gap-4 font-normal text-gray-500 `}>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500  px-4 py-2 cursor-pointer ">
                        <a href="/">Beranda</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#courses">Bimbingan Belajar</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#cbt">CBT</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#publisher">Jurnal & Penerbitan</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer hidden">
                        <a href="#article">Artikel</a>
                    </li>
                </ul>
            </div>
            
        </>
    );
}
