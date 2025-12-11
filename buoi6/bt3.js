
const numbers = [10, 20, 30, 40, 50, 60];

console.log("Mảng gốc ban đầu:", numbers);


const newArray = numbers.slice(2, 4);


console.log("\n--- Kết Quả ---");
console.log("Mảng mới (trích xuất từ 2 đến 4):", newArray);
console.log("Mảng gốc sau khi slice (không thay đổi):", numbers);