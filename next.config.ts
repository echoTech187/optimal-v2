import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
<<<<<<< HEAD
  /*output: 'export',*/
=======
  // output: 'export',
>>>>>>> 13ccbf43680f9b290dd2d16d1bfeb24ff36c0305
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, './'),
  },
};

export default nextConfig;
