/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"randomuser.me"
      },
    ],
  },

  experimental:{
    serverActions:{
      bodySizeLimit:"5mb",  //for images in ai reciept
    },
  },
 
};

export default nextConfig;


