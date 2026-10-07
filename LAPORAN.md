# Laporan Proyek React: Signal & Sound

## Identitas Proyek

| Informasi | Keterangan |
|---|---|
| Nama aplikasi | Signal & Sound |
| Jenis proyek | Prototipe toko audio berbasis React |
| Nama penyusun | Isi nama Anda |
| Kelas / mata kuliah | Isi sesuai kebutuhan |
| Tanggal | Isi tanggal pengumpulan |

## 1. Latar Belakang

Signal & Sound adalah prototipe toko online perlengkapan audio dengan visual bertema studio dan pertunjukan. Produk yang tersedia meliputi microphone, headphones, audio interface, mixer, mixing console, studio monitor, preamp, MIDI controller, dan perlengkapan live sound. Aplikasi ini dikembangkan sebagai studi kasus untuk menerapkan konsep dasar React dalam pengalaman belanja: pengguna dapat melihat dan mencari produk, membuka detail produk, membaca review, mengelola keranjang, dan mengisi alur checkout. Aplikasi juga memiliki area admin sederhana.

## 2. Tujuan

1. Menerapkan React Component untuk membagi antarmuka menjadi bagian yang dapat digunakan kembali.
2. Meneruskan data dan fungsi antar-komponen menggunakan props.
3. Menampilkan antarmuka secara kondisional sesuai state aplikasi.
4. Mengelola state lokal menggunakan `useState`.
5. Membagikan state keranjang ke beberapa halaman menggunakan `useContext`.
6. Membuat prototipe toko online yang memiliki alur penggunaan dari katalog sampai konfirmasi pesanan.
7. Menambahkan interaksi review produk menggunakan state lokal React.

## 3. Tech Stack

| Teknologi | Penggunaan |
|---|---|
| React 19 | Membuat komponen dan antarmuka aplikasi. |
| JavaScript (ES modules) | Bahasa untuk logika dan data aplikasi. |
| Vite | Development server dan proses build. |
| React Router | Mengatur navigasi halaman dashboard, detail produk, cart, checkout, dan admin tanpa memuat ulang aplikasi. |
| Tailwind CSS | Styling dan tata letak responsif melalui utility classes. |
| React Context API | Membagikan state dan operasi keranjang antarkomponen. |
| CSS | Styling dasar aplikasi. |

## 4. Fitur Aplikasi

- Katalog audio gear dengan pencarian nama dan filter kategori seperti Microphones, Headphones, Recording, Mixers, Mixing Consoles, Studio Monitors, Preamps, MIDI Controllers, dan Live Essentials.
- Halaman detail produk, termasuk tampilan ketika ID produk tidak ditemukan.
- Detail produk menampilkan rating bintang, review contoh, jumlah review, dan form untuk menambahkan review baru.
- Keranjang belanja: menambah produk, mengubah kuantitas, menghapus produk, dan menghitung subtotal.
- Checkout dengan formulir kontak/pengiriman dan pilihan pembayaran cash on delivery. Checkout ini hanya simulasi frontend; belum memproses pembayaran atau menyimpan pesanan ke server.
- Navigasi utama menampilkan jumlah item di keranjang.
- Area admin dengan sidebar responsif, status katalog, ringkasan jumlah produk, kategori, stok, nilai inventaris, dan halaman About toko.

## 5. Penerapan Konsep React

| Konsep | Penerapan dalam proyek |
|---|---|
| React Component | `App`, `Navbar`, `Sidebar`, `MainLayout`, `AdminLayout`, serta halaman dashboard, detail produk, cart, dan checkout dibuat sebagai komponen terpisah. |
| Passing Props | `AdminLayout` meneruskan `sidebarOpen` dan `setSidebarOpen` ke `Sidebar` untuk mengendalikan visibilitas sidebar. |
| Conditional Rendering | Katalog menampilkan pesan ketika pencarian tidak menghasilkan produk; cart dan checkout membedakan kondisi kosong dan berisi; halaman detail menampilkan fallback jika produk tidak ditemukan; checkout menampilkan konfirmasi setelah pesanan disimulasikan. |
| `useState` | State lokal digunakan untuk pencarian dan kategori katalog, visibilitas sidebar admin, status pesanan, daftar item keranjang, serta daftar review dan nilai input form review. |
| `useContext` | `CartProvider` menyediakan state dan fungsi keranjang. Hook `useCart` menggunakan `useContext` agar komponen seperti Navbar, Dashboard, Cart, dan Checkout dapat mengaksesnya. |

## 6. Alur Penggunaan

1. Pengguna membuka dashboard untuk melihat katalog produk.
2. Pengguna mencari produk atau memilih kategori.
3. Pengguna membuka detail produk untuk melihat rating dan review.
4. Pengguna dapat menambahkan review baru atau langsung memasukkan produk ke keranjang.
5. Pengguna mengubah kuantitas atau menghapus item dari keranjang.
6. Pengguna melanjutkan ke checkout dan mengisi data yang diminta.
7. Setelah formulir dikirim, aplikasi menampilkan konfirmasi pesanan dan mengosongkan keranjang.

## 7. Bukti Tangkapan Layar

Lampirkan tangkapan layar aplikasi pada bagian ini. Simpan berkas gambar di folder `screenshots/` pada proyek, lalu sesuaikan nama berkas di tabel.

| No. | Tangkapan layar yang perlu dilampirkan | Nama berkas yang disarankan |
|---|---|---|
| 1 | Dashboard yang menampilkan katalog, pencarian, dan filter kategori | `screenshots/01-dashboard.png` |
| 2 | Halaman detail produk | `screenshots/02-product-detail.png` |
| 3 | Review produk dan form untuk menambahkan review | `screenshots/03-product-review.png` |
| 4 | Keranjang dengan setidaknya satu produk dan subtotal | `screenshots/04-cart.png` |
| 5 | Form checkout atau halaman konfirmasi pesanan | `screenshots/05-checkout.png` |
| 6 | Area admin yang menunjukkan sidebar | `screenshots/06-admin.png` |

Pastikan screenshot menampilkan hasil aplikasi dengan jelas. Untuk bukti alur keranjang dan checkout, tambahkan produk terlebih dahulu sebelum mengambil screenshot.

## 8. Pengujian dan Validasi

Pengujian manual berikut perlu dijalankan kembali setelah aplikasi dipublikasikan. Hasil build dan lint sudah dijalankan pada proyek lokal.

| Skenario | Hasil yang diharapkan | Hasil aktual |
|---|---|---|
| Membuka dashboard | Daftar audio gear tampil. | Berhasil diuji di browser lokal |
| Mencari nama produk | Daftar produk tersaring sesuai kata kunci. | Perlu konfirmasi manual |
| Memilih kategori | Daftar produk tersaring sesuai kategori. | Perlu konfirmasi manual |
| Membuka detail produk | Rating, review, dan form review tampil. | Berhasil diuji di browser lokal |
| Mengirim review | Review baru muncul di bagian community notes. | Perlu konfirmasi manual |
| Menambahkan produk ke cart | Item dan jumlah pada navigasi cart bertambah. | Perlu konfirmasi manual |
| Mengubah kuantitas cart | Jumlah dan subtotal diperbarui; kuantitas nol menghapus item. | Perlu konfirmasi manual |
| Membuka cart kosong | Pesan cart kosong ditampilkan. | Perlu konfirmasi manual |
| Mengirim checkout | Konfirmasi pesanan tampil dan cart dikosongkan. | Perlu konfirmasi manual |
| Membuka ID produk tidak valid | Pesan produk tidak ditemukan tampil. | Perlu konfirmasi manual |

Validasi teknis yang dijalankan:

- `npm run lint` — berhasil tanpa error.
- `npm run build` — berhasil membuat production bundle dengan Vite.

## 9. Batasan dan Pengembangan Berikutnya

Proyek ini merupakan prototipe frontend. Data katalog dan review awal masih berupa data statis di dalam aplikasi. Review baru hanya tersimpan selama halaman detail terbuka karena belum terhubung ke backend. Checkout belum terhubung ke backend atau payment gateway, dan pesanan tidak disimpan secara permanen. Gambar produk menggunakan URL eksternal sehingga aplikasi yang dipublikasikan memerlukan koneksi internet untuk menampilkan seluruh gambar.

Pengembangan berikutnya dapat mencakup validasi dan perapian data katalog, penyimpanan keranjang, autentikasi admin, backend untuk produk dan pesanan, serta integrasi pembayaran.

## 10. Tautan Publikasi dan Repository

Lengkapi bagian ini setelah aplikasi dipublikasikan dan repository dibuat.

- URL aplikasi yang sudah dipublikasikan: **[tempel URL deployment di sini]**
- URL web portofolio: **[tempel URL portofolio di sini]**
- URL GitHub repository: **[tempel URL repository di sini]**

## 11. Kesimpulan

Signal & Sound menerapkan konsep React Component, props, conditional rendering, `useState`, dan `useContext` dalam prototipe toko online audio. Aplikasi menyediakan alur katalog, pengelolaan keranjang, dan checkout simulasi. Validasi teknis dengan lint dan production build telah berhasil. Sebelum pengumpulan, lengkapi identitas, tangkapan layar, hasil pengujian manual, dan tautan publikasi.
