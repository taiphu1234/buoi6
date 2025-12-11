
let students = [
    { name: "An", score: 8 }, 
    { name: "Bình", score: 7 }
];

console.log("--- Danh sách ban đầu (2 SV) ---");
console.log(students);


students.push({ name: "Cường", score: 9 });
students.push({ name: "Dương", score: 6 });
students.push({ name: "Hải", score: 9.5 });
students.push({ name: "Linh", score: 7.5 });
students.push({ name: "Minh", score: 8 });

console.log("\n--- Danh sách sau khi thêm 5 SV (7 SV) ---");
console.log(students);

const removedStudent = students.pop();
console.log("\n--- Xóa SV cuối cùng ---");
console.log(`Đã xóa sinh viên: ${removedStudent.name} (Điểm: ${removedStudent.score})`);


students.sort((a, b) => b.score - a.score);

console.log("\n--- Danh sách SAU KHI SẮP XẾP (Giảm dần theo điểm) ---");


for (const student of students) {
    console.log(`- ${student.name}: ${student.score}`);
}