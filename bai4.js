function tinhGiaTri(n) {
    let S = 0;
    let temp = 0;
    for (let i = 1; i <= n; i++) {
      temp = temp * 10 + 1;
      S += temp;
    }
    console.log("Giá trị của biểu thức S là: " + S);
  }
  
  let n = prompt("Nhap gia tri cua n: "); 
  n = parseInt(n);
  
  tinhGiaTri(n);
  