import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Intro() {
    return (
        <div className="relative w-full max-sm:h-[320px] max-lg:h-[480px] lg:h-[570px]">
            <div className="absolute top-0 left-0 w-full max-sm:h-[320px] max-lg:h-[480px] lg:h-[570px] bg-black opacity-50 -z-1">
                <video width="320" height="340" loop autoPlay muted controls preload="none" className="aspect-video w-full max-sm:h-[320px] max-lg:h-[480px] lg:h-[570px] object-cover">
                    <source src="/video/video.mp4" type="video/mp4" />
                    <source src="/video/video.webm" type="video/webm" />
                    <source src="/video/video.ogv" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex justify-center items-center w-full max-sm:h-[320px] max-lg:h-[480px] lg:h-[570px]  bg-black/50">
                <div className="relative w-full max-sm:h-[320px] max-lg:h-[480px] lg:h-[570px] max-w-[1300px] mx-auto">
                    <div className="absolute max-sm:bottom-6 max-md:bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 my-auto w-full text-white">
                        <div className="flex flex-col justify-end gap-4 px-6 2xl:px-0 xs:w-full sm:w-[60%] md:w-[80%] lg:w-[80%] xl:w-[80%]">
                            <h1 className="max-sm:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold uppercase">Platform Solusi Bimbingan Belajar Terbaik dalam Genggaman Anda</h1>
                            <p className="max-sm:text-xs text-sm">Tersedia Layanan Kesehatan yang Terpercaya dan Mudah Diakses untuk Kebutuhan Anda</p>
                            <Link href="#services">
                            <Icon icon="tabler:arrow-down" className="max-md:size-6 md:size-8 lg:size-12"  />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};