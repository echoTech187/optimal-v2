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
                <h1 className=" text-md md:text-2xl xl:text-4xl font-semibold py-12 text-white max-md:w-full max-md:px-4 w-1/2 mx-auto max-w-[1300px]">Siap Lolos UKOM? OPTIMAL Hadir dengan Layanan Terbaik untuk Anda</h1>
            </section>
            <section className="w-full h-full bg-amber-900/10 dark:bg-gray-900" id="courses">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="w-full md:w-1/2 flex items-center">
                            <Image priority={true} src="/images/bimbel-optimal.png" alt="services" width={4000} height={4000} className="w-full" />
                        </div>
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/Optimal.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Bimbingan Belajar UKOM untuk Berbagai Jurusan Kesehatan</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">Satu solusi berbagai bimbingan belajar untuk menghadapi UKOM jurusan kesehatan seperti Keperawatan, Profesi, Bidan, dan Gizi.</p>
                            <ol className="list-disc max-md:text-sm md:text-base xl:text-lg ml-8 mb-3 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Pembelajaran langsung bersama dosen berpengalaman (materi & pembahasan soal).</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Rekaman dan materi tersedia untuk dipelajari ulang kapan saja.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Latihan soal sesuai blueprint resmi UKOM, relevan dan tepat sasaran.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Tips dan Trick menjawab soal cepat & efektif untuk optimalkan waktu ujian.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1">Materi yang disampaikan jelas dan mudah dipahami.</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-[#FFB800] hover:bg-[#FFB800] text-black max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://localhost:3001')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full bg-[#fffbf0] dark:bg-gray-800" id="cbt">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/cbt.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Siap Lolos UKOM dengan CBT+</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">CBT+ adalah solusi terbaik untuk menghadapi UKOM jurusan kesehatan seperti Keperawatan, Profesi, Bidan, dan Gizi.</p>
                            <ol className="list-disc max-md:text-sm md:text-base mb-3 xl:text-lg ml-8 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Kumpulan soal disusun berdasarkan blueprint resmi UKOMNAS.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Setiap latihan menghasilkan skor otomatis yang langsung tampil.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Soal-soal dilengkapi dengan pembahasan detail dalam bentuk teks maupun video.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Latihan soal dan penjelasan materi yang dapat diakses dimana saja dan kapan saja</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-purple-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Dilengkapi teknologi AI yang memberikan rekomendasi pembelajaran.</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-purple-500 hover:bg-purple-600 text-white max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://elearningoptimal.id/login')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center">
                            <Image priority={true} src="/images/cbt.png" alt="services" width={4000} height={4000} className="w-full -mt-5" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-full bg-[#eff2f8] dark:bg-gray-700" id="publisher">
                <div className="max-w-[1300px] mx-auto py-8 px-4">
                    <div className="flex max-md:flex-col w-full h-full gap-4">
                        <div className="w-full md:w-1/2 flex items-center">
                            <Image priority={true} src="/images/penerbit.png" alt="services" width={4000} height={4000} className="w-full -mt-5" />
                        </div>
                        <div className="relative w-full md:w-1/2 flex flex-col gap-4 my-4 ">
                            <Image priority={true} src="/penerbit-logo.png" alt="services" width={4000} height={4000} className="w-[20%]" />
                            <h1 className="max-md:text-2xl text-4xl font-semibold">Solusi Penerbitan Buku Resmi dengan ISBN, HKI, dan BKD</h1>
                            <p className="max-md:text-sm md:text-base xl:text-lg">Kami membantu Anda mewujudkan buku dengan kualitas terbaik, legalitas resmi, serta manfaat untuk BKD dan karier akademik.</p>
                            <ol className="list-disc max-md:text-sm md:text-base mb-3 xl:text-lg ml-8 flex flex-col justify-start gap-2">
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Penerbitan Resmi Menggunakan ISBN/ISSN.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Sampul menarik & layout yang elegan untuk meningkatkan kualitas buku.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Pemeriksaan tata bahasa, gaya penulisan, serta perbaikan naskah.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Buku yang diterbitkan bisa menjadi bukti kinerja dosen serta penunjang sertifikasi dosen.</li>
                                <li className="relative  before:absolute before:-left-8 before:z-0 before:content-['✓'] before:text-sm before:py-0.5 before:text-center before:text-black/90 before:bg-yellow-300 before:rounded-full before:m-1 before:max-md:w-5 before:max-md:h-5 before:w-6 before:h-6 before:max-md:text-xs marker:text-blue-500  marker:font-bold marker:content-[' '] marker:z-1  ">Tim kami siap membantu penulis dalam proses pendaftaran HKI.</li>
                            </ol>
                            <button type="button" className="flex w-fit items-center bg-[#FFB800] hover:bg-[#FFB800] text-black max-md:text-xs max-md:px-4 max-md:py-2 py-3 px-6 rounded-full font-semibold tracking-wide cursor-pointer transition ease-in-out duration-300" onClick={() => handleClick('http://localhost:3002')}>Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-right-alt-rounded" width={24} height={24} /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}