const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Marron High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
]

// When the function is called with variable dataPenjualanPakAldi
function hitungTotalPenjualan(dataPenjualan) {
    if (!Array.isArray(dataPenjualan)) {
        return "Error: Sales data must be an array";
    }

    let totalPenjualan = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
        const penjualan = dataPenjualan[i];

        if (typeof penjualan !== "object" || penjualan === null) {
        return "Error: Items in sales data must be objects";
        }

        if (!penjualan.hasOwnProperty("totalTerjual")) {
        return "Error: Objects in the sales data must have the property 'totalTerjual'";
        }

        const totalTerjual = penjualan.totalTerjual;

        if (typeof totalTerjual !== "number") {
        return "Error: The property must be a number";
        }

        totalPenjualan += totalTerjual;
    }

    return totalPenjualan;
}


console.log(hitungTotalPenjualan(dataPenjualanPakAldi))
//Output => 307 (from value property 'totalTerjual' 90 + 37 + 90 + 90 = 307)