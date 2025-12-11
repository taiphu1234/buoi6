// 1. Khai báo mảng đầu vào
const scores = [85, 92, 78, 90];

console.log("--- Duyệt Mảng Điểm Số Bằng forEach ---");

// 2. Sử dụng forEach()
// forEach nhận một hàm callback (hàm sẽ được gọi cho MỖI phần tử).
// Tham số đầu tiên của callback là GIÁ TRỊ của phần tử (score).
scores.forEach(function(score) {

    console.log(`Điểm: ${score}`);
});

