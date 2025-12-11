
const animals = ["Chó", "Mèo", "Gà", "Vịt"];

console.log("Mảng gốc ban đầu:", animals);


animals.splice(1, 2, "Cáo", "Sói");


console.log("\n--- Kết Quả ---");
console.log("Mảng sau khi splice():", animals);