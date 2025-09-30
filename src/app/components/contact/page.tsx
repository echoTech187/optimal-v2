"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function Contact() {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-4 2xl:px-0">
            <div className="flex flex-col items-center w-full max-w-[1300px] mx-auto max-sm:px-4">
                <div className="flex flex-col items-center w-full gap-4">
                    <Image priority={true} src="/Optimal.png" alt="services" width={4000} height={4000} className="h-16 w-auto mb-4" />
                    <h1 className="max-md:text-xl text-3xl font-semibold text-center mb-4">Konsultasikan Persiapan UKOM Anda Sekarang</h1>
                    <p className="max-sm:text-xs sm:text-sm md:text-base lg:text-xl text-center hidden">Konsultasi gratis dengan tim kami, Optimal hadir untuk bantu Anda tingkatkan kemampuan Anda dalam menghadapi UKOM!</p>
                    <button type="button" className="bg-green-700 hover:bg-green-800 text-white max-sm:text-xs max-sm:px-4 max-sm:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300 flex items-center gap-2"  onClick={() => window.open('https://wa.link/vqkcki', '_blank')}><Icon icon="tabler:brand-whatsapp" width={24} height={24} className="size-5mr-2" /><span>Hubungi Kami</span></button>
                </div>
            </div>
        </section>
    );
}