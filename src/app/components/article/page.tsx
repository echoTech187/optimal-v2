import Image from "next/image";
export default function Article() {
    return (
        <section className="flex flex-col items-center w-full max-w-[1300px] mx-auto  px-4 2xl:px-0" id="article">
            <h1 className="max-md:text-2xl text-4xl font-semibold py-12 mt-0">Artikel Kesehatan Terbaru</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="relative w-full h-[300px] bg-black max-md:rounded-2xl rounded-4xl">
                    <Image priority={true} src="/images/article-1.png" alt="services" width={6000} height={4000} className="w-full h-full object-cover opacity-70  max-md:rounded-2xl rounded-4xl" />
                    <div className="absolute bottom-6 left-0 w-full h-1/2 px-4 py-2">
                        <div className="flex flex-col gap-2 text-white">
                            <span className="text-xs bg-white text-gray-700 py-1 px-2 rounded-full w-fit">Homecare, Kesehatan</span>
                            <h1 className="max-md:text-base md:text-lg xl:text-xl font-semibold w-[80%]">Mengenal CAPD: Cuci Darah Mandiri dan Perawatannya di Rumah </h1>
                            <p className="max-md:text-xs text-sm">May 7, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[300px] bg-black  max-md:rounded-2xl rounded-4xl">
                    <Image priority={true} src="/images/article-1.png" alt="services" width={6000} height={4000} className="w-full h-full object-cover opacity-70  max-md:rounded-2xl rounded-4xl" />
                    <div className="absolute bottom-6 left-0 w-full h-1/2 px-4 py-2">
                        <div className="flex flex-col gap-2 text-white">
                            <span className="text-xs bg-white text-gray-700 py-1 px-2 rounded-full w-fit">Homecare, Kesehatan</span>
                            <h1 className="max-md:text-base md:text-lg xl:text-xl font-semibold w-[80%]">Mengenal CAPD: Cuci Darah Mandiri dan Perawatannya di Rumah </h1>
                            <p className="max-md:text-xs text-sm">May 7, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[300px] bg-black  max-md:rounded-2xl rounded-4xl">
                    <Image priority={true} src="/images/article-1.png" alt="services" width={6000} height={4000} className="w-full h-full object-cover opacity-70  max-md:rounded-2xl rounded-4xl " />
                    <div className="absolute bottom-6 left-0 w-full h-1/2 px-4 py-2">
                        <div className="flex flex-col gap-2 text-white">
                            <span className="text-xs bg-white text-gray-700 py-1 px-2 rounded-full w-fit">Homecare, Kesehatan</span>
                            <h1 className="max-md:text-base md:text-lg xl:text-xl font-semibold w-[80%]">Mengenal CAPD: Cuci Darah Mandiri dan Perawatannya di Rumah </h1>
                            <p className="max-md:text-xs text-sm">May 7, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-fit rounded-full text-black/80 font-stretch-extra-condensed hover:text-blue-400 tracking-wide cursor-pointer transition ease-in-out duration-300 my-12 border border-gray-500 hover:border-blue-400 py-3 px-6 text-sm">Lihat Semua Artikel</button>
        </section>
    );
}