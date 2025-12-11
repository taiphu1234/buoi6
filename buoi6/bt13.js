
const stocks = [true, false, true, true];

console.log("Mảng trạng thái (stocks):", stocks);


const hasOutOfStock = stocks.some(stock => {
   
    return stock === false;
});


const allInStock = stocks.every(stock => {
   
    return stock === true;
});


console.log("\n--- Kết Quả Kiểm Tra ---");
console.log(`Kiểm tra 'có ít nhất một sản phẩm hết hàng' (some): ${hasOutOfStock}`);
console.log(`Kiểm tra 'tất cả còn hàng' (every): ${allInStock}`);