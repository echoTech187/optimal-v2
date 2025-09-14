"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Services() {
    const router = useRouter();
    const handleClick = (service: string) => { router.push(`${service}`) }
    return (
        <>
            <section className="w-full h-full text-center bg-purple-900" id="services">
                <h1 className=" text-md md:text-2xl xl:text-4xl font-semibold py-12 text-white max-md:w-full max-md:px-4 w-1/2 mx-auto max-w-[1300px]">Maksimalkan potensi Anda dengan berbagai layanan terbaik kami</h1>
            </section>
            <section className="w-full h-full bg-amber-900/10" id="courses">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="w-full md:w-1/2">
                            <Image priority={true} src="/images/ukom.png" alt="services" width={4000} height={4000} className="w-full" />
                        </div>
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/logo.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Bimbingan Belajar UKOM untuk Berbagai Jurusan Kesehatan</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">Satu solusi berbagai bimbingan belajar untuk menghadapi UKOM jurusan kesehatan seperti Keperawatan, Profesi, Bidan, dan Gizi.</p>
                            <ol className="list-disc max-md:text-sm md:text-base xl:text-lg ml-8 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Materi lengkap dan terbaru sesuai dengan kurikulum resmi, membantu persiapan ujian UKOM dengan optimal</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Modul bimbingan belajar yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Penjelasan materi yang jelas dan mudah dimengerti</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Latihan soal dan penjelasan materi yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Nilai penilaian akhir yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Support konsultasi dan penjelasan materi secara real-time</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-[#FFB800] hover:bg-[#FFB800] text-black max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://localhost:3001')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full bg-[#fffbf0]" id="publisher">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/Optimal.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Bimbingan Belajar Untuk Menghadapi CPNS PPPK</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">Solusi digital untuk menghadapi ujian tes CPNS PPPK secara interaktif dan akurat bersama para tutor yang berpengalaman.</p>
                            <ol className="list-disc max-md:text-sm md:text-base xl:text-lg ml-8 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Materi lengkap dan terbaru sesuai dengan kurikulum resmi, membantu persiapan ujian UKOM dengan optimal</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Modul bimbingan belajar yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Penjelasan materi yang jelas dan mudah dimengerti</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Latihan soal dan penjelasan materi yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Nilai penilaian akhir yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Support konsultasi dan penjelasan materi secara real-time</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-purple-500 hover:bg-purple-600 text-white max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://localhost:3002')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image priority={true} src="/images/asnesia.png" alt="services" width={4000} height={4000} className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full bg-[#eff2f8]" id="cbt">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="w-full md:w-1/2">
                            <Image priority={true} src="/images/homecare.png" alt="services" width={4000} height={4000} className="w-full" />
                        </div>
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/logo.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Layanan Perawatan Kesehatan di Rumah oleh Perawat Profesional</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">Layanan perawatan kesehatan di rumah oleh perawat profesional menyediakan perawatan medis yang berkualitas di lingkungan yang nyaman bagi pasien.</p>
                            <ol className="list-disc max-md:text-sm md:text-base xl:text-lg ml-8 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Materi lengkap dan terbaru sesuai dengan kurikulum resmi, membantu persiapan ujian UKOM dengan optimal</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Modul bimbingan belajar yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Penjelasan materi yang jelas dan mudah dimengerti</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Latihan soal dan penjelasan materi yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Nilai penilaian akhir yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Support konsultasi dan penjelasan materi secara real-time</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-[#FFB800] hover:bg-[#FFB800] text-black max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://localhost:3001')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}