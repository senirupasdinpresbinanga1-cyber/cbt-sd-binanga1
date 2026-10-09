// Database Siswa Kelas 6A dan 6B
const validStudents = [
  // KELAS 6B
  { nisn: "3140466270", nama: "AIRIN RAHMI ANDINI", kelas: "6B" },
  { nisn: "3144872142", nama: "ALKAUSAR", kelas: "6B" },
  { nisn: "3145816553", nama: "ANINDYA JINAN RISQI", kelas: "6B" },
  { nisn: "3155916287", nama: "ANNISA RAMADANI", kelas: "6B" },
  { nisn: "3153814142", nama: "ANNISA SALSABILA", kelas: "6B" },
  { nisn: "3153207429", nama: "Asykar Alfatih", kelas: "6B" },
  { nisn: "0157237608", nama: "CAHAYA AURA NAZHIFA", kelas: "6B" },
  { nisn: "0144017685", nama: "DEWA AYU RESTTI GAURI", kelas: "6B" },
  { nisn: "3140013762", nama: "DIAN AFIKA", kelas: "6B" },
  { nisn: "3143677322", nama: "FACHRU RAFAY", kelas: "6B" },
  { nisn: "3146161150", nama: "FITRAH RAMADHAN ABDILLA", kelas: "6B" },
  { nisn: "3155806770", nama: "JANUAR MUSA P", kelas: "6B" },
  { nisn: "3158220865", nama: "KHARMAWAN", kelas: "6B" },
  { nisn: "3157251088", nama: "M HILAL FIQRI AUTHAR R", kelas: "6B" },
  { nisn: "3158928704", nama: "MIRZA SIDDIQIYAH RUSADY", kelas: "6B" },
  { nisn: "3143756321", nama: "MUH FARIS GHAIZAN", kelas: "6B" },
  { nisn: "3159351673", nama: "MUH IQWAL", kelas: "6B" },
  { nisn: "3144800157", nama: "MUH MUHAIMIN FAIZAL. M", kelas: "6B" },
  { nisn: "0131400871", nama: "MUH NAUFAL HAFIDZ", kelas: "6B" },
  { nisn: "0158917600", nama: "MUH. AL HAFIDZ NASWAR", kelas: "6B" },
  { nisn: "0149770417", nama: "MUH. AL QADRI", kelas: "6B" },
  { nisn: "3146513265", nama: "MUH. MIRZA UKAIL", kelas: "6B" },
  { nisn: "3142351906", nama: "MUHAMMAD ALGHAZHALY", kelas: "6B" },
  { nisn: "3157774636", nama: "MUHAMMAD NUR", kelas: "6B" },
  { nisn: "0127036921", nama: "Siti Almirah", kelas: "6B" },
  { nisn: "0157732812", nama: "UTARI MAHYA SANJAYA", kelas: "6B" },

  // KELAS 6A
  { nisn: "3156000315", nama: "ABID AQILAH WAHYUDI", kelas: "6A" },
  { nisn: "3147561743", nama: "AINUN HAKIMAH", kelas: "6A" },
  { nisn: "0142128968", nama: "AINUN NUR AZIZAH A", kelas: "6A" },
  { nisn: "3145705181", nama: "AMELIA AHMAD", kelas: "6A" },
  { nisn: "0141377777", nama: "ANDI FAISYA SYAHIRA", kelas: "6A" },
  { nisn: "3140573690", nama: "ANDI MUHAMMAD FAQIH AIRY H", kelas: "6A" },
  { nisn: "3147604091", nama: "CAHYA AINUN", kelas: "6A" },
  { nisn: "0148954249", nama: "DZAKY", kelas: "6A" },
  { nisn: "0158527938", nama: "FARDHAN ZAKI JASMAR", kelas: "6A" },
  { nisn: "3154882039", nama: "FEBY KHAIRUNNISA", kelas: "6A" },
  { nisn: "0158898393", nama: "KHAIRA NAJWA BAZIMA", kelas: "6A" },
  { nisn: "3141393725", nama: "LISNA YANTI", kelas: "6A" },
  { nisn: "0134551900", nama: "MUH ARDIANSYAH", kelas: "6A" },
  { nisn: "3151725727", nama: "MUH REVAN APRILIAN", kelas: "6A" },
  { nisn: "0151615246", nama: "MUH RIFKI AL FAHREZA Z", kelas: "6A" },
  { nisn: "3139286099", nama: "MUH. ARIFKI", kelas: "6A" },
  { nisn: "3141628787", nama: "MUH. MIFTAHUL YAFI ASIS", kelas: "6A" },
  { nisn: "0143085041", nama: "MUH. RAFLI", kelas: "6A" },
  { nisn: "3144207806", nama: "MUHAMMAD ARAS QURUSYA", kelas: "6A" },
  { nisn: "3159066266", nama: "MUHAMMAD SYAWAL", kelas: "6A" },
  { nisn: "0148124368", nama: "NAYLA SALSABILLAH", kelas: "6A" },
  { nisn: "3157945789", nama: "NURUL ADIVA AMRAN", kelas: "6A" },
  { nisn: "0149106374", nama: "ST ASSYURAH JUHARBI", kelas: "6A" },
  { nisn: "0141999506", nama: "SYAFWAAN SABQI", kelas: "6A" },
  { nisn: "3158929490", nama: "YUSUF GIBRAN Y", kelas: "6A" },
  { nisn: "0141239341", nama: "ZAM ZAMMY KHAIRIL MALIKI ABHAL", kelas: "6A" }
];

// Data Bank Soal 160 Soal (8 Mata Pelajaran)[cite: 1]
const examData = {
  pai: {
    title: "Pendidikan Agama Islam",
    questions: [
      { id: 1, type: "pg", text: "Rukun iman yang keenam adalah iman kepada ....", options: ["A. Rasul", "B. Hari akhir", "C. Qada dan Qadar", "D. Malaikat"], answer: 2 },
      { id: 2, type: "pg", text: "Rudi sudah belajar dengan giat, tetapi nilai ulangannya belum sesuai harapan. Sikap yang sesuai dengan iman kepada Qada dan Qadar adalah ....", options: ["A. Menyalahkan gurunya", "B. Berhenti belajar", "C. Mencontek agar nilai naik", "D. Bersabar, mengevaluasi diri, dan tetap berusaha"], answer: 3 },
      { id: 3, type: "pg", text: "Asmaul Husna Ar-Rahman berarti ....", options: ["A. Maha Pengasih", "B. Maha Melihat", "C. Maha Mendengar", "D. Maha Kuasa"], answer: 0 },
      { id: 4, type: "pg", text: "Siti menemukan dompet berisi uang di jalan dekat sekolah. Sikap amanah yang tepat adalah ....", options: ["A. Mengambil uangnya lalu membuang dompetnya", "B. Mencari pemiliknya atau menyerahkannya kepada guru atau pihak berwenang", "C. Membiarkan dompet itu di jalan", "D. Membagikan uangnya kepada teman"], answer: 1 },
      { id: 5, type: "pg", text: "Sebelum diangkat menjadi rasul, Nabi Muhammad saw. dijuluki Al-Amin karena beliau ....", options: ["A. Sangat kaya", "B. Sangat kuat", "C. Dapat dipercaya", "D. Pandai berdagang"], answer: 2 },
      { id: 6, type: "pg", text: "Sifat wajib rasul yang berarti jujur adalah ....", options: ["A. Siddiq", "B. Amanah", "C. Tabligh", "D. Fathanah"], answer: 0 },
      { id: 7, type: "pg", text: "Berikut ini yang membatalkan puasa adalah ....", options: ["A. Berkumur tanpa menelan air", "B. Menggosok gigi", "C. Mandi", "D. Makan dan minum dengan sengaja"], answer: 3 },
      { id: 8, type: "pg", text: "Zakat fitrah dikeluarkan pada ....", options: ["A. Awal bulan Rajab", "B. Bulan Ramadan sampai sebelum salat Idulfitri", "C. Hari raya Iduladha", "D. Bulan Muharam"], answer: 1 },
      { id: 9, type: "pg", text: "Orang yang berhak menerima zakat disebut ....", options: ["A. Muzaki", "B. Munfik", "C. Mustahik", "D. Mujtahid"], answer: 2 },
      { id: 10, type: "pg", text: "Salat berjemaah lebih utama daripada salat sendirian, yaitu dengan pahala sebanyak ... derajat.", options: ["A. 27", "B. 25", "C. 10", "D. 7"], answer: 0 },
      { id: 11, type: "pg", text: "Nabi Yusuf a.s. tetap sabar ketika dibuang oleh saudara-saudaranya dan kemudian memaafkan mereka. Teladan yang dapat kita ambil adalah ....", options: ["A. Membalas dendam", "B. Mudah putus asa", "C. Berbohong demi selamat", "D. Sabar dan pemaaf"], answer: 3 },
      { id: 12, type: "pg", text: "Nabi Ayyub a.s. menjadi teladan dalam hal ....", options: ["A. Kekayaan", "B. Kesabaran menghadapi penyakit dan cobaan", "C. Keberanian di medan perang", "D. Kepandaian berdagang"], answer: 1 },
      { id: 13, type: "pg", text: "Rina melihat temannya membuang sampah sembarangan. Ia mengingatkannya karena kebersihan adalah ....", options: ["A. Sebagian dari iman", "B. Syarat naik kelas", "C. Tugas petugas kebersihan saja", "D. Aturan yang boleh dilanggar"], answer: 0 },
      { id: 14, type: "pg", text: "Husnuzan artinya ....", options: ["A. Prasangka buruk", "B. Iri hati", "C. Berprasangka baik", "D. Marah"], answer: 2 },
      { id: 15, type: "pg", text: "Dua orang teman bertengkar. Andi lalu meminta maaf lebih dulu dan memaafkan temannya. Akhlak yang ditunjukkan Andi adalah ....", options: ["A. Tamak", "B. Hasad", "C. Takabur", "D. Pemaaf"], answer: 3 },
      { id: 16, type: "essay", text: "Jelaskan arti beriman kepada Qada dan Qadar, lalu berikan satu contoh penerapannya di sekolah!" },
      { id: 17, type: "essay", text: "Dimas sudah berlatih keras, tetapi gagal menjuarai lomba. Ia kecewa dan ingin berhenti mengikuti lomba. Berikan nasihat kepada Dimas berdasarkan sikap sabar dan tawakal!" },
      { id: 18, type: "essay", text: "Sebutkan empat sifat wajib rasul beserta artinya!" },
      { id: 19, type: "essay", text: "Sebutkan tiga hal yang dapat membatalkan puasa!" },
      { id: 20, type: "essay", text: "Saat ujian, Hana melihat temannya menyontek. Apa yang sebaiknya dilakukan Hana menurut akhlak terpuji? Jelaskan alasannya!" }
    ]
  },
  pancasila: {
    title: "Pendidikan Pancasila",
    questions: [
      { id: 1, type: "pg", text: "Sila ketiga Pancasila berbunyi ....", options: ["A. Kemanusiaan yang adil dan beradab", "B. Persatuan Indonesia", "C. Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan", "D. Keadilan sosial bagi seluruh rakyat Indonesia"], answer: 1 },
      { id: 2, type: "pg", text: "Pak RT mengajak seluruh warga membersihkan selokan bersama-sama tanpa membedakan suku dan agama. Nilai yang tampak dari kegiatan tersebut adalah ....", options: ["A. Ketuhanan semata", "B. Kekuasaan", "C. Persaingan", "D. Persatuan dan gotong royong"], answer: 3 },
      { id: 3, type: "pg", text: "Berikut yang termasuk hak warga negara adalah ....", options: ["A. Mendapatkan pendidikan", "B. Membayar pajak", "C. Menaati hukum", "D. Membela negara"], answer: 0 },
      { id: 4, type: "pg", text: "Contoh kewajiban warga negara adalah ....", options: ["A. Memilih agama", "B. Mendapat pekerjaan", "C. Membayar pajak", "D. Mengeluarkan pendapat"], answer: 2 },
      { id: 5, type: "pg", text: "Andi dan Budi berbeda pendapat tentang tema kegiatan kelas. Cara penyelesaian yang sesuai dengan sila keempat adalah ....", options: ["A. Memaksakan kehendak", "B. Musyawarah untuk mufakat", "C. Bertaruh dengan undian", "D. Diputuskan sepihak oleh yang paling keras suaranya"], answer: 1 },
      { id: 6, type: "pg", text: "Di kelas VI terdapat murid dari berbagai suku dengan logat yang berbeda. Sikap yang tepat adalah ....", options: ["A. Saling menghargai perbedaan", "B. Hanya berteman dengan yang sesuku", "C. Menirukan logat teman untuk mengejek", "D. Menjauhi teman yang berbeda"], answer: 0 },
      { id: 7, type: "pg", text: "Semboyan Bhinneka Tunggal Ika berarti ....", options: ["A. Bersatu kita teguh", "B. Satu nusa satu bangsa", "C. Maju terus pantang mundur", "D. Berbeda-beda tetapi tetap satu"], answer: 3 },
      { id: 8, type: "pg", text: "Norma yang aturannya dibuat oleh negara dan memiliki sanksi tegas adalah norma ....", options: ["A. Kesusilaan", "B. Kesopanan", "C. Hukum", "D. Kebiasaan"], answer: 2 },
      { id: 9, type: "pg", text: "Berbicara kasar kepada guru termasuk pelanggaran norma ....", options: ["A. Hukum", "B. Kesopanan", "C. Lalu lintas", "D. Pajak"], answer: 1 },
      { id: 10, type: "pg", text: "Sikap yang mencerminkan sila kelima adalah ....", options: ["A. Menyontek saat ulangan", "B. Memilih-milih teman", "C. Menang sendiri dalam permainan", "D. Bersikap adil dalam membagi tugas kelompok tanpa membeda-bedakan teman"], answer: 3 },
      { id: 11, type: "pg", text: "Pancasila sebagai dasar negara tercantum dalam ....", options: ["A. Pembukaan UUD 1945", "B. Sumpah Pemuda", "C. Teks Proklamasi", "D. Pasal 33 UUD 1945"], answer: 0 },
      { id: 12, type: "pg", text: "Sumpah Pemuda diikrarkan pada tanggal ....", options: ["A. 17 Agustus 1945", "B. 20 Mei 1908", "C. 28 Oktober 1928", "D. 1 Juni 1945"], answer: 2 },
      { id: 13, type: "pg", text: "Di sekolah diadakan pemilihan ketua OSIS. Setiap siswa memilih sesuai hati nurani tanpa paksaan. Hal ini mencerminkan prinsip ....", options: ["A. Otoriter", "B. Demokrasi", "C. Monarki", "D. Anarki"], answer: 1 },
      { id: 14, type: "pg", text: "Di desa Sari, warga berbeda agama hidup rukun. Saat ada hari raya, mereka tidak mengganggu ibadah satu sama lain dan saling membantu. Sikap ini disebut ....", options: ["A. Toleransi", "B. Egoisme", "C. Diskriminasi", "D. Fanatisme"], answer: 0 },
      { id: 15, type: "pg", text: "Beni menuntut haknya memakai fasilitas sekolah tetapi tidak mau ikut menjaga kebersihan. Sikap yang benar adalah ....", options: ["A. Menuntut hak saja", "B. Menjalankan kewajiban saja tanpa mengambil hak", "C. Tidak peduli pada fasilitas", "D. Menjalankan kewajiban menjaga sarana bersamaan dengan menggunakan haknya"], answer: 3 },
      { id: 16, type: "essay", text: "Tuliskan bunyi kelima sila Pancasila secara berurutan!" },
      { id: 17, type: "essay", text: "Dua kelompok murid berselisih karena sama-sama ingin memakai lapangan untuk kegiatan pada hari yang sama. Bagaimana cara menyelesaikannya melalui musyawarah? Jelaskan langkah-langkahnya!" },
      { id: 18, type: "essay", text: "Jelaskan perbedaan hak dan kewajiban, lalu berikan masing-masing dua contoh di lingkungan sekolah!" },
      { id: 19, type: "essay", text: "Seorang siswa baru berbeda suku dan logat bicaranya. Ia sering diejek oleh beberapa teman. Analisislah tindakan teman-temannya, sebutkan sila yang dilanggar, dan berikan solusinya!" },
      { id: 20, type: "essay", text: "Jelaskan pentingnya gotong royong dan berikan dua contoh penerapannya di lingkungan tempat tinggalmu!" }
    ]
  },
  indonesia: {
    title: "Bahasa Indonesia",
    questions: [
      { id: 1, type: "pg", text: "[Bacaan 1: Hutan Mangrove Penjaga Pantai]\nGagasan utama bacaan di atas adalah ....", options: ["A. Mangrove banyak ditebang", "B. Nelayan kesulitan mencari ikan", "C. Pentingnya hutan mangrove bagi pesisir", "D. Warga Desa Bahari menanam bibit"], answer: 2 },
      { id: 2, type: "pg", text: "Manfaat akar mangrove menurut bacaan adalah ....", options: ["A. Menahan ombak sehingga abrasi berkurang", "B. Menyuburkan tambak", "C. Memperluas permukiman", "D. Menarik wisatawan"], answer: 0 },
      { id: 3, type: "pg", text: "Hasil tangkapan nelayan menurun karena ....", options: ["A. Ombak semakin tenang", "B. Warga menanam bibit mangrove", "C. Jumlah nelayan bertambah", "D. Mangrove ditebang sehingga tempat berkembang biak ikan hilang"], answer: 3 },
      { id: 4, type: "pg", text: "Arti kata 'abrasi' pada bacaan adalah ....", options: ["A. Banjir di daratan", "B. Pengikisan tepi pantai oleh ombak", "C. Kekeringan di pesisir", "D. Naiknya suhu udara"], answer: 1 },
      { id: 5, type: "pg", text: "Sikap yang dapat diteladani dari warga Desa Bahari adalah ....", options: ["A. Peduli menjaga lingkungan dengan menanam mangrove", "B. Menebang pohon untuk tambak", "C. Menunggu bantuan tanpa berbuat apa-apa", "D. Memindahkan permukiman"], answer: 0 },
      { id: 6, type: "pg", text: "[Bacaan 2: Cerita Dani & Nenek Ina]\nWatak Dani dalam cerita adalah ....", options: ["A. Pemalas", "B. Pemarah", "C. Penolong", "D. Sombong"], answer: 2 },
      { id: 7, type: "pg", text: "Latar waktu dan suasana pada cerita tersebut adalah ....", options: ["A. Malam hari yang sunyi", "B. Siang hari yang terik", "C. Sore hari yang berangin", "D. Pagi hari ketika hujan deras"], answer: 3 },
      { id: 8, type: "pg", text: "Konflik batin yang dialami Dani adalah ....", options: ["A. Takut kepada Pak Satpam", "B. Ragu membantu Nenek karena takut terlambat", "C. Marah kepada Nenek Ina", "D. Malu memakai jas hujan sobek"], answer: 1 },
      { id: 9, type: "pg", text: "Amanat cerita tersebut adalah ....", options: ["A. Kita hendaknya menolong sesama walaupun ada kepentingan pribadi", "B. Kita harus selalu datang paling awal", "C. Jas hujan harus selalu baru", "D. Jangan berjalan saat hujan"], answer: 0 },
      { id: 10, type: "pg", text: "Kejadian yang terjadi tepat setelah Dani membantu Nenek Ina adalah ....", options: ["A. Dani melihat Nenek kesulitan", "B. Dani merasa ragu", "C. Dani tiba di sekolah dan pagar sudah tertutup", "D. Pak Satpam tersenyum dan membukakan pagar"], answer: 2 },
      { id: 11, type: "pg", text: "Kalimat yang efektif adalah ....", options: ["A. Para siswa-siswa sedang membersihkan halaman sekolah.", "B. Mereka semua para siswa itu sedang bersih-bersih.", "C. Halaman dibersihkan oleh itu para siswa kelas.", "D. Para siswa sedang membersihkan halaman sekolah."], answer: 3 },
      { id: 12, type: "pg", text: "Kalimat dengan ejaan yang tepat adalah ....", options: ["A. Ayah membeli buku, pensil, dan penggaris di Pasar Mamuju.", "B. Ayah membeli buku pensil dan penggaris di Pasar Mamuju.", "C. Ayah membeli buku, pensil, dan penggaris di pasar mamuju.", "D. ayah Membeli buku, pensil, dan penggaris di Pasar Mamuju."], answer: 0 },
      { id: 13, type: "pg", text: "\"Kakiku mau patah karena berjalan seharian.\" Kalimat ini mengandung majas ....", options: ["A. Metafora", "B. Hiperbola", "C. Personifikasi", "D. Simile"], answer: 1 },
      { id: 14, type: "pg", text: "Kata baku yang tepat adalah ....", options: ["A. Apotik", "B. Resiko", "C. Praktik", "D. Nasehat"], answer: 2 },
      { id: 15, type: "pg", text: "Kalimat pembuka pidato yang paling sesuai adalah ....", options: ["A. \"Woi, dengarkan aku bicara!\"", "B. \"Bapak dan Ibu guru serta teman-teman yang saya hormati, ....\"", "C. \"Halo, aku mau cerita nih.\"", "D. \"Pokoknya hari ini aku mau bicara.\""], answer: 1 },
      { id: 16, type: "essay", text: "Ringkaslah bacaan 1 (Hutan Mangrove) menjadi dua kalimat!" },
      { id: 17, type: "essay", text: "Dari bacaan 1, tuliskan dua penyebab dan dua akibat dari penebangan mangrove!" },
      { id: 18, type: "essay", text: "Sebutkan watak Dani pada bacaan 2 beserta bukti dari cerita!" },
      { id: 19, type: "essay", text: "Buatlah pidato singkat (empat sampai lima kalimat) bertema 'Menjaga Kebersihan Sekolah'!" },
      { id: 20, type: "essay", text: "Kembangkan gagasan utama 'Membaca bermanfaat bagi kita' menjadi satu paragraf (minimal 4 kalimat)!" }
    ]
  },
  matematika: {
    title: "Matematika",
    questions: [
      { id: 1, type: "pg", text: "Suhu di puncak gunung -3 derajat Celsius, sedangkan di kaki gunung 25 derajat Celsius. Selisih suhunya adalah ....", options: ["A. 22 derajat Celsius", "B. 25 derajat Celsius", "C. 28 derajat Celsius", "D. 30 derajat Celsius"], answer: 2 },
      { id: 2, type: "pg", text: "Sebuah kapal selam berada 40 m di bawah permukaan laut. Kapal naik 15 m, lalu turun lagi 30 m. Posisi akhir kapal selam adalah ....", options: ["A. 55 m di bawah permukaan laut", "B. 25 m di bawah permukaan laut", "C. 55 m di atas permukaan laut", "D. 85 m di bawah permukaan laut"], answer: 0 },
      { id: 3, type: "pg", text: "Hasil dari (-12) + 8 - (-5) adalah ....", options: ["A. -9", "B. -1", "C. 1", "D. 9"], answer: 2 },
      { id: 4, type: "pg", text: "Bu Sari memiliki 2 1/2 liter minyak. Hari pertama dipakai 3/4 liter, hari kedua 1 1/4 liter. Sisa minyak Bu Sari adalah ....", options: ["A. 1/4 liter", "B. 3/4 liter", "C. 1/2 liter", "D. 1 liter"], answer: 2 },
      { id: 5, type: "pg", text: "Sebuah pita sepanjang 3,6 m dipotong-potong, tiap potong 0,45 m. Banyak potongan pita adalah ....", options: ["A. 8", "B. 7", "C. 9", "D. 6"], answer: 0 },
      { id: 6, type: "pg", text: "Harga sebuah tas Rp150.000 mendapat diskon 20%. Uang yang harus dibayar adalah ....", options: ["A. Rp130.000", "B. Rp120.000", "C. Rp30.000", "D. Rp110.000"], answer: 1 },
      { id: 7, type: "pg", text: "Dari 40 siswa, 35% menyukai sepak bola. Banyak siswa yang menyukai sepak bola adalah ....", options: ["A. 14 siswa", "B. 12 siswa", "C. 16 siswa", "D. 35 siswa"], answer: 0 },
      { id: 8, type: "pg", text: "Perbandingan kelereng Budi dan Citra adalah 3 : 5. Jika jumlah kelereng mereka 48, maka kelereng Citra berjumlah ....", options: ["A. 18", "B. 24", "C. 30", "D. 36"], answer: 2 },
      { id: 9, type: "pg", text: "Pada peta berskala 1 : 2.000.000, jarak dua kota pada peta adalah 4 cm. Jarak sebenarnya adalah ....", options: ["A. 8 km", "B. 40 km", "C. 800 km", "D. 80 km"], answer: 3 },
      { id: 10, type: "pg", text: "Pak Dani memagari taman berbentuk persegi panjang berukuran 20 m x 15 m. Biaya pemagaran Rp25.000 per meter. Biaya seluruhnya adalah ....", options: ["A. Rp1.500.000", "B. Rp7.500.000", "C. Rp3.500.000", "D. Rp1.750.000"], answer: 3 },
      { id: 11, type: "pg", text: "Sebuah bangun terdiri dari persegi bersisi 10 cm dan segitiga di atasnya dengan alas 10 cm dan tinggi 6 cm. Luas bangun tersebut adalah ....", options: ["A. 110 cm persegi", "B. 130 cm persegi", "C. 160 cm persegi", "D. 100 cm persegi"], answer: 1 },
      { id: 12, type: "pg", text: "Luas lingkaran berdiameter 14 cm (pi = 22/7) adalah ....", options: ["A. 154 cm persegi", "B. 44 cm persegi", "C. 88 cm persegi", "D. 616 cm persegi"], answer: 0 },
      { id: 13, type: "pg", text: "Bak mandi berbentuk kubus dengan sisi 80 cm terisi penuh air. Volume air tersebut adalah ....", options: ["A. 64 liter", "B. 512 liter", "C. 5.120 liter", "D. 640 liter"], answer: 1 },
      { id: 14, type: "pg", text: "Akuarium berbentuk balok berukuran 60 cm x 40 cm x 30 cm diisi air setinggi 3/4 tinggi akuarium. Volume air adalah ....", options: ["A. 54 liter", "B. 72 liter", "C. 18 liter", "D. 54.000 liter"], answer: 0 },
      { id: 15, type: "pg", text: "Rata-rata tiga nilai ulangan Dika adalah 80. Agar rata-rata empat ulangan menjadi 82, nilai ulangan keempat harus ....", options: ["A. 84", "B. 86", "C. 88", "D. 90"], answer: 2 },
      { id: 16, type: "essay", text: "Sebuah gedung memiliki 3 lantai basement di bawah lantai dasar. Rina naik lift dari basement 3 ke lantai 5, lalu turun 2 lantai. Di lantai berapa Rina sekarang? Tuliskan model operasi bilangan bulatnya!" },
      { id: 17, type: "essay", text: "Dina membawa uang Rp500.000. Ia ingin membeli sepatu Rp350.000 dan tas Rp250.000. Keduanya diskon 20%. Cukupkah uang Dina? Jika cukup, berapa sisa uangnya? Jelaskan langkahmu!" },
      { id: 18, type: "essay", text: "Resep kue untuk 4 orang memerlukan 300 g tepung, 100 g gula, dan 2 butir telur. Berapa bahan yang diperlukan untuk 10 orang?" },
      { id: 19, type: "essay", text: "Kolam renang berbentuk balok berukuran 12 m x 6 m x 1,5 m. Kolam diisi air dengan pompa yang mengalirkan 9 m kubik per jam. Berapa jam waktu yang diperlukan sampai kolam penuh?" },
      { id: 20, type: "essay", text: "Dari 40 siswa kelas VI, 16 siswa suka olahraga, 12 suka membaca, 8 suka menggambar, dan sisanya suka hobi lain. Tentukan persentase tiap hobi, hobi yang paling diminati, dan selisih peminat hobi tertinggi dan terendah!" }
    ]
  },
  ipas: {
    title: "IPAS (Ilmu Pengetahuan Alam dan Sosial)",
    questions: [
      { id: 1, type: "pg", text: "Organ tubuh yang berfungsi memompa darah ke seluruh tubuh adalah ....", options: ["A. Paru-paru", "B. Jantung", "C. Lambung", "D. Ginjal"], answer: 1 },
      { id: 2, type: "pg", text: "Rafi berlari selama 10 menit. Napasnya menjadi lebih cepat dan jantungnya berdetak lebih kencang. Penjelasan yang tepat adalah ....", options: ["A. Tubuh Rafi sedang sakit", "B. Paru-parunya mengalami kerusakan", "C. Jantungnya lelah selamanya", "D. Otot membutuhkan lebih banyak oksigen sehingga napas dan denyut jantung meningkat"], answer: 3 },
      { id: 3, type: "pg", text: "Fungsi utama usus halus adalah ....", options: ["A. Menyerap sari-sari makanan", "B. Menyimpan sisa makanan", "C. Menyaring darah", "D. Memompa darah"], answer: 0 },
      { id: 4, type: "pg", text: "Urutan jalannya makanan dalam sistem pencernaan yang benar adalah ....", options: ["A. Mulut, lambung, kerongkongan, usus halus", "B. Kerongkongan, mulut, lambung, usus halus", "C. Mulut, kerongkongan, lambung, usus halus", "D. Mulut, usus halus, lambung, kerongkongan"], answer: 2 },
      { id: 5, type: "pg", text: "Zat gizi yang menjadi sumber tenaga utama bagi tubuh adalah ....", options: ["A. Vitamin", "B. Karbohidrat", "C. Mineral", "D. Serat"], answer: 1 },
      { id: 6, type: "pg", text: "Ani sering sarapan hanya dengan minuman manis, lalu cepat lemas dan sulit berkonsentrasi di kelas. Saran yang paling tepat untuk Ani adalah ....", options: ["A. Tidak perlu sarapan", "B. Minum lebih banyak minuman manis", "C. Tidur di kelas", "D. Sarapan bergizi seimbang yang berisi karbohidrat, protein, sayur, dan buah"], answer: 3 },
      { id: 7, type: "pg", text: "Perubahan energi listrik menjadi energi cahaya terjadi pada ....", options: ["A. Lampu yang menyala", "B. Kompor gas", "C. Kipas angin", "D. Radio"], answer: 0 },
      { id: 8, type: "pg", text: "Ketika setrika listrik dinyalakan, energi listrik berubah menjadi energi ....", options: ["A. Gerak", "B. Bunyi", "C. Panas", "D. Kimia"], answer: 2 },
      { id: 9, type: "pg", text: "Sebuah desa pesisir ingin memiliki listrik dari sumber energi yang tidak akan habis dan ramah lingkungan. Pilihan yang paling tepat adalah ....", options: ["A. Pembangkit listrik batu bara", "B. Panel surya", "C. Genset berbahan solar", "D. Membakar kayu hutan"], answer: 1 },
      { id: 10, type: "pg", text: "Sampah yang paling mudah terurai oleh alam adalah ....", options: ["A. Botol plastik", "B. Pecahan kaca", "C. Kaleng bekas", "D. Daun kering"], answer: 3 },
      { id: 11, type: "pg", text: "Banyak ikan di sungai mati setelah warga membuang limbah ke sungai. Penyebab utamanya adalah ....", options: ["A. Pencemaran air", "B. Musim hujan", "C. Ikan terlalu banyak", "D. Sungai terlalu dalam"], answer: 0 },
      { id: 12, type: "pg", text: "Rantai makanan di sawah: padi, tikus, ular, elang. Jika jumlah ular berkurang drastis, yang akan terjadi pada jumlah tikus adalah ....", options: ["A. Berkurang", "B. Tetap", "C. Bertambah banyak", "D. Hilang"], answer: 2 },
      { id: 13, type: "pg", text: "Orang yang menggunakan atau membeli barang untuk memenuhi kebutuhannya disebut ....", options: ["A. Produsen", "B. Konsumen", "C. Distributor", "D. Pedagang"], answer: 1 },
      { id: 14, type: "pg", text: "Menjelang hari raya, harga cabai naik. Penyebab yang paling mungkin adalah ....", options: ["A. Permintaan meningkat sedangkan persediaan terbatas", "B. Persediaan cabai sangat banyak", "C. Tidak ada orang yang membeli", "D. Cabai tidak laku"], answer: 0 },
      { id: 15, type: "pg", text: "Teks Proklamasi Kemerdekaan Indonesia dibacakan oleh ....", options: ["A. Jenderal Sudirman", "B. Ki Hajar Dewantara", "C. Moh. Yamin", "D. Ir. Soekarno dan Drs. Moh. Hatta"], answer: 3 },
      { id: 16, type: "essay", text: "Jelaskan perjalanan makanan dari mulut hingga menjadi sisa pembuangan, sebutkan organ yang dilalui!" },
      { id: 17, type: "essay", text: "Ani selalu sarapan dengan minuman manis saja. Analisislah dampaknya bagi tubuh Ani dan susunlah satu contoh menu sarapan bergizi seimbang!" },
      { id: 18, type: "essay", text: "Pada rantai makanan padi, tikus, ular, dan elang, elang sering diburu manusia hingga jumlahnya sangat sedikit. Jelaskan dampaknya terhadap rantai makanan tersebut!" },
      { id: 19, type: "essay", text: "Sebutkan tiga contoh perubahan energi yang terjadi di rumah dan jelaskan perubahannya!" },
      { id: 20, type: "essay", text: "Sungai di dekat desa menjadi keruh dan berbau karena sampah dan limbah. Berikan tiga solusi yang dapat dilakukan warga desa!" }
    ]
  },
  pjok: {
    title: "PJOK",
    questions: [
      { id: 1, type: "pg", text: "Berikut yang termasuk permainan bola besar adalah ....", options: ["A. Kasti", "B. Bulu tangkis", "C. Sepak bola", "D. Tenis meja"], answer: 2 },
      { id: 2, type: "pg", text: "Teknik dasar mengoper bola pendek dalam sepak bola menggunakan ....", options: ["A. Kaki bagian dalam", "B. Ujung jari kaki", "C. Tumit", "D. Lutut"], answer: 0 },
      { id: 3, type: "pg", text: "Dalam permainan kasti, pemain yang bertugas melambungkan bola kepada pemukul disebut ....", options: ["A. Penjaga", "B. Pemukul", "C. Penangkap", "D. Pelambung"], answer: 3 },
      { id: 4, type: "pg", text: "Urutan gerakan lompat jauh yang benar adalah ....", options: ["A. Awalan, melayang, tumpuan, mendarat", "B. Awalan, tumpuan, melayang, mendarat", "C. Tumpuan, awalan, melayang, mendarat", "D. Mendarat, tumpuan, melayang, awalan"], answer: 1 },
      { id: 5, type: "pg", text: "Start yang digunakan pada lari jarak pendek adalah start ....", options: ["A. Berdiri", "B. Melayang", "C. Jongkok", "D. Duduk"], answer: 2 },
      { id: 6, type: "pg", text: "Dina akan belajar guling depan pada pelajaran senam lantai. Sebelum memulai, hal yang harus dilakukan adalah ....", options: ["A. Pemanasan agar otot siap dan mengurangi risiko cedera", "B. Langsung berguling tanpa pemanasan", "C. Makan dalam jumlah banyak", "D. Tidur"], answer: 0 },
      { id: 7, type: "pg", text: "Pada guling depan, posisi kepala yang benar adalah ....", options: ["A. Kepala tegak lurus", "B. Ubun-ubun menyentuh matras", "C. Kepala menoleh ke samping", "D. Dagu menempel ke dada dan tengkuk menyentuh matras"], answer: 3 },
      { id: 8, type: "pg", text: "Lari selama 12 menit (tes Cooper) digunakan untuk mengukur ....", options: ["A. Kekuatan lengan", "B. Daya tahan jantung dan paru-paru", "C. Kelincahan", "D. Keseimbangan"], answer: 1 },
      { id: 9, type: "pg", text: "Pendinginan setelah berolahraga bertujuan untuk ....", options: ["A. Menurunkan denyut jantung dan napas secara bertahap", "B. Menambah kelelahan", "C. Menaikkan suhu tubuh", "D. Menghentikan olahraga seketika"], answer: 0 },
      { id: 10, type: "pg", text: "Lama tidur yang dianjurkan bagi anak usia sekolah dasar sekitar ....", options: ["A. 4 sampai 5 jam", "B. 6 jam", "C. 9 sampai 11 jam", "D. 14 jam"], answer: 2 },
      { id: 11, type: "pg", text: "Temanmu terjatuh saat bermain bola sehingga lututnya lecet. Pertolongan pertama yang tepat adalah ....", options: ["A. Membiarkan luka terbuka tanpa dibersihkan", "B. Menaburkan tanah pada luka", "C. Menyuruh temanmu tetap bermain", "D. Membersihkan luka dengan air bersih lalu menutupnya dengan kasa atau plester"], answer: 3 },
      { id: 12, type: "pg", text: "Tim kelas VI-A kalah dalam pertandingan kasti antarkelas. Sikap sportif yang sebaiknya ditunjukkan adalah ....", options: ["A. Menuduh wasit curang", "B. Menerima kekalahan dan memberi selamat kepada pemenang", "C. Marah dan meninggalkan lapangan", "D. Mengejek tim lawan"], answer: 1 },
      { id: 13, type: "pg", text: "Salah satu cara menjaga kebersihan diri adalah ....", options: ["A. Mandi dan menggosok gigi secara teratur", "B. Memakai baju yang sama berhari-hari", "C. Jarang mencuci tangan", "D. Memotong kuku hanya setahun sekali"], answer: 0 },
      { id: 14, type: "pg", text: "Jumlah pemain inti dalam satu regu permainan bola voli adalah ....", options: ["A. 5", "B. 7", "C. 6", "D. 11"], answer: 2 },
      { id: 15, type: "pg", text: "Rendi ingin meningkatkan kebugaran, tetapi tidak memiliki alat olahraga. Pilihan yang paling tepat adalah ....", options: ["A. Menonton televisi seharian", "B. Tidur siang sepanjang hari", "C. Makan makanan manis dalam jumlah banyak", "D. Berlari pagi dan lompat tali secara rutin tiga kali seminggu"], answer: 3 },
      { id: 16, type: "essay", text: "Tuliskan urutan gerakan lompat jauh dan jelaskan singkat tiap tahapannya!" },
      { id: 17, type: "essay", text: "Jelaskan manfaat pemanasan dan pendinginan dalam berolahraga!" },
      { id: 18, type: "essay", text: "Saat bermain, temanmu terjatuh dan lengannya berdarah karena luka goresan. Tuliskan langkah pertolongan pertama yang akan kamu lakukan!" },
      { id: 19, type: "essay", text: "Dalam pertandingan kasti, Tono menyentuh bola ketika sudah keluar garis, tetapi ia mengaku tidak menyentuhnya. Analisislah sikap Tono dan jelaskan sikap yang seharusnya ditunjukkan!" },
      { id: 20, type: "essay", text: "Susunlah jadwal sederhana kegiatan sehari-hari yang mencerminkan pola hidup sehat (makan, tidur, dan aktivitas fisik)!" }
    ]
  },
  seni: {
    title: "Seni Budaya (Seni Rupa)",
    questions: [
      { id: 1, type: "pg", text: "Unsur seni rupa yang terbentuk dari titik yang bergerak adalah ....", options: ["A. Bidang", "B. Garis", "C. Warna", "D. Tekstur"], answer: 1 },
      { id: 2, type: "pg", text: "Warna primer terdiri atas ....", options: ["A. Hijau, jingga, ungu", "B. Hitam, putih, abu-abu", "C. Merah, hijau, biru muda", "D. Merah, kuning, biru"], answer: 3 },
      { id: 3, type: "pg", text: "Campuran warna merah dan kuning menghasilkan warna ....", options: ["A. Jingga", "B. Hijau", "C. Ungu", "D. Cokelat"], answer: 0 },
      { id: 4, type: "pg", text: "Kelompok warna hangat adalah ....", options: ["A. Biru, hijau, ungu", "B. Biru, putih, hitam", "C. Merah, jingga, kuning", "D. Ungu, biru, hijau"], answer: 2 },
      { id: 5, type: "pg", text: "Karya seni rupa dua dimensi adalah ....", options: ["A. Patung", "B. Lukisan", "C. Keramik", "D. Ukiran kayu"], answer: 1 },
      { id: 6, type: "pg", text: "Fungsi utama poster adalah ....", options: ["A. Menghias ruangan semata", "B. Menyimpan benda", "C. Menjadi alat tulis", "D. Menyampaikan pesan atau ajakan kepada masyarakat secara visual"], answer: 3 },
      { id: 7, type: "pg", text: "Teknik arsir dalam menggambar adalah ....", options: ["A. Membuat garis-garis sejajar rapat untuk menghasilkan kesan gelap terang", "B. Menempel kertas pada bidang gambar", "C. Menekan kain dengan lilin", "D. Memahat kayu"], answer: 0 },
      { id: 8, type: "pg", text: "Berikut yang termasuk karya seni rupa tiga dimensi adalah ....", options: ["A. Kolase", "B. Batik", "C. Patung", "D. Lukisan"], answer: 2 },
      { id: 9, type: "pg", text: "Membuat pot bunga dari botol plastik bekas termasuk kerajinan ....", options: ["A. Lukis", "B. Daur ulang", "C. Cetak", "D. Anyaman"], answer: 1 },
      { id: 10, type: "pg", text: "Kolase adalah karya seni yang dibuat dengan cara ....", options: ["A. Menempelkan berbagai bahan seperti kertas atau kain pada bidang gambar", "B. Memahat batu", "C. Mencetak dengan balok kayu", "D. Mewarnai dengan cat air saja"], answer: 0 },
      { id: 11, type: "pg", text: "Teknik membuat batik secara umum adalah ....", options: ["A. Memahat kain", "B. Menjahit kain", "C. Menganyam bambu", "D. Menutup bagian kain dengan lilin (malam), lalu mencelupnya dengan warna"], answer: 3 },
      { id: 12, type: "pg", text: "Kain tradisional khas Sulawesi Barat adalah ....", options: ["A. Ulos", "B. Songket Palembang", "C. Sutra Mandar", "D. Tenun Sumba"], answer: 2 },
      { id: 13, type: "pg", text: "Prinsip keseimbangan dalam karya seni rupa adalah ....", options: ["A. Penataan unsur-unsur agar terlihat serasi dan stabil", "B. Penggunaan satu warna saja", "C. Menggambar objek sebesar-besarnya", "D. Mengosongkan semua bidang"], answer: 0 },
      { id: 14, type: "pg", text: "Tujuan diadakannya pameran karya seni di sekolah adalah ....", options: ["A. Mencari-cari kesalahan karya teman", "B. Menghargai karya dan menunjukkan hasil karya kepada orang lain", "C. Mengejek karya teman", "D. Membandingkan nilai ulangan"], answer: 1 },
      { id: 15, type: "pg", text: "Budi menggambar pemandangan dan ingin menampilkan kesan jarak yang jauh. Teknik yang tepat adalah ....", options: ["A. Objek jauh digambar lebih besar dan lebih gelap", "B. Semua objek digambar sama besar", "C. Memakai satu warna tebal untuk semua objek", "D. Objek jauh digambar lebih kecil dan warnanya lebih pudar"], answer: 3 },
      { id: 16, type: "essay", text: "Jelaskan perbedaan warna primer dan warna sekunder, lalu berikan masing-masing dua contoh!" },
      { id: 17, type: "essay", text: "Tuliskan langkah-langkah membuat karya kolase dari bahan bekas!" },
      { id: 18, type: "essay", text: "Kamu diminta membuat poster bertema 'Cintai Lingkungan'. Jelaskan unsur-unsur yang harus ada pada poster tersebut!" },
      { id: 19, type: "essay", text: "Seorang siswa membuat tempat pensil dari kaleng bekas dan dihias dengan kertas warna. Analisislah manfaat karya tersebut bagi lingkungan dan bagi siswa itu sendiri!" },
      { id: 20, type: "essay", text: "Mengapa kain tenun atau sutra Mandar perlu dilestarikan? Berikan dua alasan dan satu cara melestarikannya!" }
    ]
  },
  inggris: {
    title: "Bahasa Inggris",
    questions: [
      { id: 1, type: "pg", text: "[Text Sinta]\nHow old is Sinta?", options: ["A. Eleven", "B. Twelve", "C. Thirteen", "D. Ten"], answer: 1 },
      { id: 2, type: "pg", text: "What time does Sinta wake up?", options: ["A. 5.00", "B. 6.00", "C. 6.30", "D. 5.30"], answer: 3 },
      { id: 3, type: "pg", text: "How does Sinta go to school?", options: ["A. By bicycle", "B. By bus", "C. On foot", "D. By motorbike"], answer: 0 },
      { id: 4, type: "pg", text: "What does Sinta do after school?", options: ["A. She plays football", "B. She watches television", "C. She helps her mother and does her homework", "D. She visits her grandmother"], answer: 2 },
      { id: 5, type: "pg", text: "The word 'near' in the text has the same meaning as ....", options: ["A. Far", "B. Close", "C. Behind", "D. Under"], answer: 1 },
      { id: 6, type: "pg", text: "Who do Sinta and her family visit on Sunday?", options: ["A. Her grandmother", "B. Her teacher", "C. Her friend", "D. Her uncle"], answer: 0 },
      { id: 7, type: "pg", text: "I ___ breakfast every morning.", options: ["A. eats", "B. eating", "C. is eat", "D. eat"], answer: 3 },
      { id: 8, type: "pg", text: "She ___ to school at 6.30.", options: ["A. go", "B. going", "C. goes", "D. gone"], answer: 2 },
      { id: 9, type: "pg", text: "My little brother ___ playing football now.", options: ["A. is", "B. are", "C. am", "D. be"], answer: 0 },
      { id: 10, type: "pg", text: "Where ___ you live?", options: ["A. does", "B. do", "C. is", "D. are"], answer: 1 },
      { id: 11, type: "pg", text: "The elephant is ___ than the cat.", options: ["A. small", "B. smallest", "C. more big", "D. bigger"], answer: 3 },
      { id: 12, type: "pg", text: "The bank is ___ the post office and the market.", options: ["A. on", "B. at", "C. between", "D. under"], answer: 2 },
      { id: 13, type: "pg", text: "A place where we borrow books is a ....", options: ["A. library", "B. canteen", "C. market", "D. hospital"], answer: 0 },
      { id: 14, type: "pg", text: "What do you say to ask someone's name?", options: ["A. How old are you?", "B. What is your name?", "C. Where do you live?", "D. What time is it?"], answer: 1 },
      { id: 15, type: "pg", text: "Rina: \"Thank you for helping me.\"\nDani: \"....\"", options: ["A. Good bye", "B. I'm sorry", "C. Nice to meet you", "D. You're welcome"], answer: 3 },
      { id: 16, type: "essay", text: "Answer the questions based on the text: (a) Where does Sinta live? (b) Who does she live with? (c) What does she do every morning?" },
      { id: 17, type: "essay", text: "Write four sentences about your daily activities!" },
      { id: 18, type: "essay", text: "Arrange the words into a good sentence: 'school / goes / to / she / every day'." },
      { id: 19, type: "essay", text: "Describe your best friend in four sentences (name, age, appearance, hobby)!" },
      { id: 20, type: "essay", text: "Analyze the dialogue and complete it with suitable sentences.\nDani: 'Good morning, Rina. How are you?'\nRina: '....'\nDani: 'Where are you going?'\nRina: '....'" }
    ]
  }
};

// Global Variables
let currentUser = null;
let currentSubject = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval = null;
let timeLeft = 60 * 60;

// Toggle Password
document.getElementById("toggle-pass").addEventListener("click", function() {
  const passInput = document.getElementById("password");
  if (passInput.type === "password") {
    passInput.type = "text";
    this.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passInput.type = "password";
    this.classList.replace("fa-eye-slash", "fa-eye");
  }
});

// Event Login
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputNisn = document.getElementById("nisn").value.trim();
  const inputPass = document.getElementById("password").value.trim().toUpperCase();
  const loginError = document.getElementById("login-error");

  // Login dengan NISN & Password (pilihan kelas: 6A / 6B)
  const student = validStudents.find(s => s.nisn === inputNisn && s.kelas === inputPass);

  if (!student) {
    loginError.style.display = "block";
    return;
  }

  loginError.style.display = "none";
  currentUser = student;

  document.getElementById("conf-nama").innerText = student.nama;
  document.getElementById("conf-nisn").innerText = student.nisn;
  document.getElementById("conf-kelas").innerText = student.kelas;

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("confirm-screen").classList.remove("hidden");
});

document.getElementById("btn-back-login").addEventListener("click", function() {
  document.getElementById("confirm-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
});

document.getElementById("start-exam-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const selectedMapel = document.getElementById("mapel").value;

  if (!examData[selectedMapel]) {
    alert("Soal mata pelajaran ini belum tersedia.");
    return;
  }

  currentSubject = selectedMapel;
  document.getElementById("confirm-screen").classList.add("hidden");
  document.getElementById("exam-screen").classList.remove("hidden");

  renderNumberGrid();
  loadQuestion(0);
  startTimer();
});

function renderNumberGrid() {
  const grid = document.getElementById("number-grid");
  grid.innerHTML = "";
  const questions = examData[currentSubject].questions;

  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "num-btn";
    btn.innerText = idx + 1;
    if (userAnswers[idx] !== undefined && userAnswers[idx] !== "") {
      btn.classList.add("answered");
    }
    if (idx === currentQuestionIndex) {
      btn.classList.add("active");
    }
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const questions = examData[currentSubject].questions;
  const q = questions[index];

  document.getElementById("soal-number-indicator").innerText = `Soal ${index + 1} dari ${questions.length}`;
  document.getElementById("soal-type-badge").innerText = q.type === "pg" ? "Pilihan Ganda" : "Uraian";
  document.getElementById("question-text").innerText = `${index + 1}. ${q.text}`;

  const optionsContainer = document.getElementById("options-container");
  const essayContainer = document.getElementById("essay-container");

  optionsContainer.innerHTML = "";
  
  if (q.type === "pg") {
    optionsContainer.classList.remove("hidden");
    essayContainer.classList.add("hidden");

    q.options.forEach((opt, optIdx) => {
      const item = document.createElement("label");
      item.className = "option-item";
      
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = optIdx;
      if (userAnswers[index] === optIdx) {
        radio.checked = true;
      }

      radio.onchange = () => {
        userAnswers[index] = optIdx;
        renderNumberGrid();
      };

      item.appendChild(radio);
      item.appendChild(document.createTextNode(opt));
      optionsContainer.appendChild(item);
    });
  } else {
    optionsContainer.classList.add("hidden");
    essayContainer.classList.remove("hidden");

    const essayTextarea = document.getElementById("essay-answer");
    essayTextarea.value = userAnswers[index] || "";
    essayTextarea.oninput = (e) => {
      userAnswers[index] = e.target.value;
      renderNumberGrid();
    };
  }

  document.getElementById("btn-prev").disabled = index === 0;
  document.getElementById("btn-next").disabled = index === questions.length - 1;

  renderNumberGrid();
}

document.getElementById("btn-prev").onclick = () => {
  if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
};

document.getElementById("btn-next").onclick = () => {
  const questions = examData[currentSubject].questions;
  if (currentQuestionIndex < questions.length - 1) loadQuestion(currentQuestionIndex + 1);
};

document.getElementById("btn-finish").onclick = () => {
  if (confirm("Apakah Anda yakin ingin menyelesaikan ujian?")) {
    finishExam();
  }
};

function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  timerInterval = setInterval(() => {
    timeLeft--;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Waktu ujian telah habis!");
      finishExam();
    }
  }, 1000);
}

function finishExam() {
  clearInterval(timerInterval);
  document.getElementById("exam-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  const questions = examData[currentSubject].questions;
  let pgScore = 0;
  let essayHtml = "";

  questions.forEach((q, idx) => {
    if (q.type === "pg") {
      if (userAnswers[idx] === q.answer) {
        pgScore += 2;
      }
    } else {
      essayHtml += `<div style="margin-bottom: 10px; padding: 12px; border: 1px solid #d9d9d9; border-radius: 6px; background:#fff;">
        <strong>Soal ${idx + 1}:</strong> ${q.text}<br>
        <strong>Jawaban Siswa:</strong> ${userAnswers[idx] || "<i>Tidak diisi</i>"}
      </div>`;
    }
  });

  document.getElementById("res-nama").innerText = currentUser.nama;
  document.getElementById("res-nisn").innerText = currentUser.nisn;
  document.getElementById("res-kelas").innerText = currentUser.kelas;
  document.getElementById("res-mapel").innerText = examData[currentSubject].title;
  document.getElementById("res-score").innerText = pgScore;
  document.getElementById("essay-results").innerHTML = essayHtml;
}
