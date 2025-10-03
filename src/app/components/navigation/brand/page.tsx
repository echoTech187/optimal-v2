import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function Logo({ isVisible, isMobile }: { isVisible?: boolean, isMobile?: boolean }) {
    return (
        <>

            <div className="flex justify-start items-center h-12 md:h-16 lg:h-18 w-fit relative pl-4 lg:px-0 py-2 min-xl:px-0 gap-2" >
                <div className="lg:hidden">
                    <button className="p-2 rounded-md hover:bg-purple-600/30 transition-colors" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-sidebar" data-overlay="#mobile-sidebar">
                        <Icon icon="mdi:menu" className='text-black' width="24" height="24" />
                    </button>
                </div>
                <Link href="/" className="flex justify-start items-center gap-3 cursor-pointer w-full h-full" >
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="w-full h-full" />
                    <Image src="/Optimal.png" alt="logo" width={100} height={100} className="w-full h-full" />
                </Link>
            </div>
        </>
    );
}