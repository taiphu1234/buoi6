
const users = [
    { name: "An", age: 25 },
    { name: "Bình", age: 30 },
    { name: "Cường", age: 28 }
];

console.log("--- Bắt đầu Tìm kiếm ---");


const foundUser = users.find(user => {
    return user.name === "Bình";
});


const foundIndex = users.findIndex(user => {
    return user.age === 28;
});


console.log("\n--- Kết Quả ---");
console.log("Đối tượng tìm thấy (name='Bình'):", foundUser);
console.log("Chỉ số tìm thấy (age=28):", foundIndex);