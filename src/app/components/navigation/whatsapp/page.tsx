"use client";
import { Icon } from "@iconify/react";
export default function WhatsApp() {
    return (
        <div className="px-4">
            <button onClick={() => window.open('https://wa.link/gkfaqz', '_blank')} className="max-sm:fixed max-sm:bottom-4 max-sm:right-6 max-sm:z-50 max-sm:w-[50px] max-sm:h-[50px] flex items-center justify-center gap-2 max-md:px-4 min-md:px-4 bg-green-800 rounded-full py-2 font-semibold text-white hover:bg-green-900 cursor-pointer transition ease-in-out duration-300 whitespace-nowrap">
                <Icon icon="tabler:brand-whatsapp" className="size-5" />
                <span className="max-sm:hidden text-sm">WhatsApp Kami</span>
            </button>
        </div>
    );
}