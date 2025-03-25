

function main() {
    let choice; 
    do{
        console.log("0. Thoát.");
        console.log("1. Tính diện tích, chu vi hình chữ nhật.");
        console.log("2. Chuyển đổi giây thành giờ-phút-giây.");
        console.log("3. Tính lũy thừa của 1 số.");
        console.log("4. Tính trung bình của 3 số bất kì.");
        console.log("5. Tính khoảng cách của 2 điểm trong không gian 2D.");
        console.log("6. So sánh 3 số(Nếu số đầu tiên max thì true).");
        console.log("7. Kiểm tra 2 chuỗi có giống nhau không.");
        console.log("8. Kiểm tra dương.");
        console.log("9. Kiểm tra năm nhuận.");
        console.log("10. So sánh 2 thời gian(phút, giây) nếu time1 > time2 thì true.");
        choice = parseInt(prompt("Nhập lựa chọn(1-10): "));
        switch(choice) {
            case 1:
                const area = (length, width) => {
                    return length * width;
                };
                const perimeter = (length, width) => {
                    return 2 * (length + width);
                };
    
                let width = parseFloat(prompt("Chiều rộng:"));
                let length = parseFloat(prompt("Chiều dài:"));
    
                console.log("Diện tích hình chữ nhật là: " + area(length, width));
                console.log("Chu vi hình chữ nhật là: " + perimeter(length, width));
            break;
            case 2:
                let S = parseInt(prompt("Nhập số giây: "));
                let h = Math.floor(S / 3600);
                let m = Math.floor((S % 3600) / 60);
                let s = S % 60;
                console.log(h + " giờ " + m + " phút " + s + " giây");
            break;
            case 3:
                let a = parseInt(prompt("Nhập số cần lũy thừa: "));
                let n = parseInt(prompt("Nhập số mũ: "));
                let luythua = parseInt(Math.pow(a, n));
                console.log("Kết quả: " + luythua);
            break;
            case 4:
                let num1 = parseInt(prompt("Nhập số thứ nhất: "));
                let num2 = parseInt(prompt("Nhập số thứ hai: "));
                let num3 = parseInt(prompt("Nhập số thứ ba: "));
                let avg = (num1 + num2 + num3) / 3;
                console.log("Trung bình của 3 số là: " + avg);
            break;
            case 5:
                let x1 = parseInt(prompt("Nhập tọa độ x1: "));
                let y1 = parseInt(prompt("Nhập tọa độ y1: "));
                let x2 = parseInt(prompt("Nhập tọa độ x2: "));
                let y2 = parseInt(prompt("Nhập tọa độ y2: "));
                let khoangcach = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                console.log("Khoảng cách giữa 2 điểm là: " + khoangcach);
            break;
            case 6:
                let s1 = parseInt(prompt("Nhập số thứ nhất: "));
                let s2 = parseInt(prompt("Nhập số thứ hai: "));
                let s3 = parseInt(prompt("Nhập số thứ ba: "));
                if(s1 > s2 && s1 > s3) {
                    console.log("True");
                } else {
                    console.log("False");
                }
            break;
            case 7:
                let str1 = prompt("Nhập chuỗi 1: ");
                let str2 = prompt("Nhập chuỗi 2: ");
                if(str1 === str2) {
                    console.log("True");
                } else {
                    console.log("False");
                }
            break;
            case 8:
                let num = parseInt(prompt("Nhập số: "));
                if(num > 0) {
                    console.log("True");
                } else {
                    console.log("False");
                }
            break;
            case 9:
                let year = parseInt(prompt("Nhập năm: "));
                if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                    console.log("Năm nhuận");
                } else {
                    console.log("Năm không nhuận");
                }
            break;
            case 10:
                let h1 = parseInt(prompt("Nhập giờ thứ nhất: "));
                let m1 = parseInt(prompt("Nhập phút thứ nhất: "));
                let h2 = parseInt(prompt("Nhập giờ thứ hai: "));
                let m2 = parseInt(prompt("Nhập phút thứ hai: "));
                if(h1 > h2 || (h1 == h2 && m1 > m2)) {
                    console.log("Thời gian" + h1 + "h" + m1 + "lớn hơn" + h2 + "h" + m2);
                } else {
                    console.log("False");
                }
            break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    } while(choice != 0);
    
}
main();