## Admin Dashboard - Rew Dashboard

Admin dashboard ini dibangun dengan ViteJS.
ViteJS adalah sebuah Build Tools yang cepat, cari tahu apa itu ViteJS [disini](https://vitejs.dev/).

### Instalasi dan _Local Development_

Pastikan dikomputer kamu sudah terinstall setidaknya NodeJS versi 12.xxx dan NPM versi 4.xx.
Jika NodeJS dan NPM sudah terinstall dikomputer kamu, jalankan perintah berikut pada terminal kamu.

( _pastikan kamu berada di direktori atau folder projek ini_ )

```zsh
npm install
```

pada dasarnya perintah diatas akan menginstall semua dependensi yang dibutuhkan projek, seperti react, react-dom dan lain sebagainya.
ketika sudah selesai, jangan dulu close terminal-mu, ketikkan keyword berikut pada terminal untuk memulai aplikasi berjalan di-komputermu,

```zsh
npm run dev
```

> mohon dicatat, ketika kamu menjalankan aplikasi dikomputer-mu, itu berarti kamu sedang berada dalam mode pengembangan.
> dan mode pengembangan ini sangat tidak disarankan untuk di- _deploy_ ke server, misal _(vps, hosting, dsb.)_
> jika ingin men- _deploy_ aplikasi ke internet pastikan kamu jalankan perintah berikut

```zsh
npm run build
```

ketika sudah selesai, kamu akan mendapatkan folder baru yaitu build atau dist, folder itu merupakan aplikasi yang sama, hanya saja folder tersebut optimal untuk _production_

#### Update

Saya sudah mendeploy aplikasi ini di platform [Vercel](https://vercel.com) agar temman-teman dapat melihat aplikasi nya, artinya, ketika ada update pada commit di repo ini, maka aplikasi yang sudah saya deploy akan terupdate juga, silahkan lihat preview [disini](https://pv-rew-admin-dashboard.netlify.app)
