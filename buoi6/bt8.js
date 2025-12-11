
const prices = [100000, 200000, 150000];
const PHAN_TRAM_TANG = 1.2; 

console.log("Mảng giá gốc:", prices);

const newPrices = prices.map(price => {

    return price * PHAN_TRAM_TANG;
});


console.log("\n--- Kết Quả ---");
console.log("Mảng giá mới (đã tăng 20%):", newPrices);
console.log("Kiểm tra mảng gốc (prices không bị thay đổi):", prices);