function demChuSoChan(n) {
    var count = 0; //dem
    while (n > 0) {
      var digit = n % 10; //chu so 
      if (digit % 2 === 0) {
        count++;
      }
      n = Math.floor(n / 10);
    }
    console.log("Số lượng chữ số chẵn trong", n, "là", count);
  }
  
  var n = prompt("Nhập số nguyên n:");
  n = parseInt(n);

  demChuSoChan(n);
  