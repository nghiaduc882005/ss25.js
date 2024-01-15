function tinhTongLeChan(a, b) {
    let tongLe = 0;
    let tongChan = 0;
  
    for (let i = a + 1; i < b; i++) {
      if (i % 2 === 0) {
        tongChan += i;
      } else {
        tongLe += i;
      }
    }
  
    console.log("Tổng các số lẻ: " + tongLe);
    console.log("Tổng các số chẵn: " + tongChan);
  }
  
  let a = prompt("Nhập số nguyên dương a:");
  let b = prompt("Nhập số nguyên dương b:");
  
  a = parseInt(a);
  b = parseInt(b);
  
  tinhTongLeChan(a, b);
  