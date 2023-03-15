const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
    // Validation parameter
    if (!Array.isArray(dataPenjualan)) {
        return "Error: Parameters must be an array";
    }

    // Calculate totalKeuntungan & totalModal
    let totalKeuntungan = 0;
    let totalModal = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
        const penjualan = dataPenjualan[i];
        const totalPendapatan = penjualan.totalTerjual * penjualan.hargaJual;
        const totalBiaya = penjualan.totalTerjual * penjualan.hargaBeli;
        const totalProfit = totalPendapatan - totalBiaya;
        totalKeuntungan += totalProfit;
        totalModal += totalBiaya;
    }

    // Format totalKeuntungan & totalModal as rupiah (Rp.)
    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    const formattedTotalKeuntungan = formatter.format(totalKeuntungan);
    const formattedTotalModal = formatter.format(totalModal);

    // Calculate presentaseKeuntungan
    const presentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

    // Search Product bukuTerlaris & penulisTerlaris
    let produkBukuTerlaris = null;
    let jumlahTerjualTerbanyak = 0;
    let penulisTerlaris = null;
    const penulisJumlahTerjual = {};
    for (let i = 0; i < dataPenjualan.length; i++) {
        const penjualan = dataPenjualan[i];
        if (penjualan.totalTerjual > jumlahTerjualTerbanyak) {
        jumlahTerjualTerbanyak = penjualan.totalTerjual;
        produkBukuTerlaris = penjualan.namaProduk;
        }
        const penulis = penjualan.penulis;
        if (penulisJumlahTerjual[penulis]) {
        penulisJumlahTerjual[penulis] += penjualan.totalTerjual;
        } else {
        penulisJumlahTerjual[penulis] = penjualan.totalTerjual;
        }
    }
    let jumlahTerjualPenulisTerbanyak = 0;
    for (let penulis in penulisJumlahTerjual) {
        if (penulisJumlahTerjual[penulis] > jumlahTerjualPenulisTerbanyak) {
        jumlahTerjualPenulisTerbanyak = penulisJumlahTerjual[penulis];
        penulisTerlaris = penulis;
        }
    }

    // Create a result object with the requested properties
    const result = {
        totalKeuntungan: formattedTotalKeuntungan,
        totalModal: formattedTotalModal,
        // Format presentaseKeuntungan as percent (%)
        presentaseKeuntungan: presentaseKeuntungan.toLocaleString("id-ID", {
        style: "percent",
        maximumFractionDigits: 2,
        }),
        produkBukuTerlaris: produkBukuTerlaris,
        penulisTerlaris: penulisTerlaris,
    };

    return result;
}

console.log(getInfoPenjualan(dataPenjualanNovel))
