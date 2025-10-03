export default function Navigation() {
    return (
        <>
            <div className="max-lg:hidden flex items-center justify-center w-auto h-full px-4">
                <ul className={`flex items-center justify-center gap-4 font-normal text-gray-500 `}>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500  px-4 py-2 cursor-pointer ">
                        <a href="/" className="max-lg:text-sm">Beranda</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#courses" className="max-lg:text-sm">Bimbingan Belajar</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#cbt" className="max-lg:text-sm">CBT</a>
                    </li>
                    <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                        <a href="#publisher" className="max-lg:text-sm">Jurnal & Penerbitan</a>
                    </li>
                </ul>
            </div>
            
        </>
    );
}
