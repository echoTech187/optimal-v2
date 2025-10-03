"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from '../navigation/brand/page'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <aside id="mobile-sidebar" className={`fixed top-0 left-0 z-140 lg:hidden h-screen overlay [--body-scroll:true] border-base-content/20 overlay-open:translate-x-0 drawer drawer-start sm:overlay-layout-open:translate-x-0 hidden w-full border-e [--auto-close:sm] [--is-layout-affect:true] [--opened:lg] sm:absolute sm:z-0 sm:flex sm:shadow-none lg:[--overlay-backdrop:true] ${isOpen ? 'open opened' : ''}`}>
            <div className="drawer-header">
                <div className="flex justify-start items-center h-12 md:h-16 lg:h-18 w-fit relative px-0 py-2 min-xl:px-0 gap-2" >
                    <div className="lg:hidden">
                        <button className="p-2 rounded-md hover:bg-purple-600/30 transition-colors cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-sidebar" data-overlay="#mobile-sidebar">
                            <Icon icon="mdi:menu" className='text-black' width="24" height="24" />
                        </button>
                    </div>
                    <Link href="/" className="flex justify-start items-center gap-3 cursor-pointer w-full h-full" >
                        <Image src="/logo.png" alt="logo" width={100} height={100} className="w-full h-full" />
                        <Image src="/Optimal.png" alt="logo" width={100} height={100} className="w-full h-full" />
                    </Link>
                </div>
                <button className=" bg-transparent text-black border-none rounded-full hover:rounded-full overlay-close lg:hidden" aria-label="Close" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-sidebar" data-overlay="#mobile-sidebar">
                    <Icon icon="mdi:close" width="18" height="18" />
                </button>
            </div>
            <div className="drawer-body px-2 h-full">
                <nav>
                    <ul className="menu" onClick={handleCloseSidebar}>
                        <li >
                            <a href="/" >Beranda</a>
                        </li>
                        <li >
                            <a href="#courses">Bimbingan Belajar</a>
                        </li>
                        <li >
                            <a href="#cbt" >CBT</a>
                        </li>
                        <li >
                            <a href="#publisher" >Publisher</a>
                        </li>

                    </ul>
                </nav>

            </div>

        </aside>
    )
}