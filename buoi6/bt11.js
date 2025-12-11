
const expenses = [50000, 120000, 80000];

console.log("Mảng chi phí:", expenses);


const totalExpenses = expenses.reduce((tongTichLuy, chiPhiHienTai) => {

    return tongTichLuy + chiPhiHienTai;
}, 0); 
console.log("\n--- Kết Quả ---");
console.log("Tổng chi phí (totalExpenses):", totalExpenses);