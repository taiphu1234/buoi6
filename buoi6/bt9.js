
const ages = [15, 22, 18, 30, 17];
const TUOI_TOI_THIEU = 18; 

console.log("Mảng tuổi gốc:", ages);


const legalAges = ages.filter(age => {

    return age >= TUOI_TOI_THIEU;
});


console.log("\n--- Kết Quả ---");
console.log(`Mảng tuổi hợp lệ (>= ${TUOI_TOI_THIEU}):`, legalAges);
console.log("Kiểm tra mảng gốc (ages không bị thay đổi):", ages);