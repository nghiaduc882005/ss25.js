function timSoNguyenLonNhat(n) {
    let tong = 0;
    let m = 0;
    while (tong < n) {
      m++;
      tong += m;
    }
    console.log("Số nguyên dương m lớn nhất là: " + (m - 1));
  }
  
  let n = prompt("Nhập vào số nguyên dương n: ");
  n = parseInt(n);
  
  timSoNguyenLonNhat(n);
  
