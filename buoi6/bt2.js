
const colors = ["Đỏ", "Xanh", "Vàng"];

console.log("Mảng ban đầu:", colors);


colors.unshift("Tím");
console.log("Mảng sau khi unshift('Tím'):", colors);


const firstColor = colors.shift();


console.log("\n--- Kết Quả Cuối Cùng ---");
console.log("Mảng sau khi shift():", colors);
console.log("Giá trị bị xóa (firstColor):", firstColor);