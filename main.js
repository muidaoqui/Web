

function tinhToan(n) {
    if (n <= 0) return 0; 
    return Math.sqrt(n + tinhToan(n - 1));
}
const n = parseInt(prompt("Nhập n: "), 10);
console.log("Đáp án:", tinhToan(n));

tinhToan();