import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
    return (
        <>

            <div className="flex justify-start items-center h-12 md:h-16 lg:h-18 w-fit relative px-4 md:px-4 py-2 min-xl:px-0 gap-4" >
                <div className="max-md:block hidden cursor-pointer"  aria-haspopup="dialog" aria-expanded="false" aria-controls="menu-drawer" data-overlay="#menu-drawer"><Icon icon="solar:hamburger-menu-bold" className="size-10 text-black/50" /></div>
                <Link href="/" className="flex justify-start items-center gap-3 cursor-pointer w-full h-full" >
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="w-full h-full" />
                    <Image src="/Optimal.png" alt="logo" width={100} height={100} className="w-full h-full" />
                </Link>
            </div>

            <div id="menu-drawer" className="overlay drawer overlay-open:translate-y-0 drawer-bottom hidden" role="dialog" tabIndex={-1}>
                <div className="drawer-header">
                    <h3 className="drawer-title">Drawer Title</h3>
                    <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#menu-drawer">
                        <Icon icon="tabler:x" className=" size-5"/>
                    </button>
                </div>
                <div className="drawer-body">
                    <div className="max-md:hidden flex items-center justify-center w-auto h-full px-4">
                        <ul className={`flex flex-col items-center justify-center gap-4 font-normal text-gray-500 `}>
                            <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500  px-4 py-2 cursor-pointer ">
                                <a href="/">Beranda</a>
                            </li>
                            <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                                <a href="#courses">Bimbingan Belajar</a>
                            </li>
                            <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                                <a href="#publisher">Jurnal & Penerbitan</a>
                            </li>
                            <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                                <a href="#cbt">CBT</a>
                            </li>
                            <li className="relative hover:bg-purple-50 hover:rounded-md hover:text-blue-500 px-4 py-2 cursor-pointer">
                                <a href="#article">Artikel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}