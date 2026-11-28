/** @type {import('next').NextConfig} */
module.exports={
  output:'standalone',
  async headers(){
    return [
      {
        source:'/:path*',
        headers:[
          {key:'Cache-Control',value:'no-store, no-cache, must-revalidate, proxy-revalidate'},
          {key:'Pragma',value:'no-cache'},
          {key:'Expires',value:'0'}
        ]
      }
    ];
  }
};
