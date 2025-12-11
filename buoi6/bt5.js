
const veggies = ["Cà rốt", "Bắp cải"];
const fruits = ["Táo", "Cam"];

console.log("Mảng veggies gốc:", veggies);
console.log("Mảng fruits gốc:", fruits);


const foodList = veggies.concat(fruits);


console.log("\n--- Kết Quả ---");
console.log("Mảng mới (foodList):", foodList);
console.log("Mảng veggies gốc sau khi concat (không thay đổi):", veggies);
console.log("Mảng fruits gốc sau khi concat (không thay đổi):", fruits);