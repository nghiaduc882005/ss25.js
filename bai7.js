function timBoiChungNhoNhat(a, b, c, d) {
    function timUocChungLonNhat(x, y) {
      while (y !== 0) {
        var temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    }
  
    function timBoiChungLonNhat(x, y) {
      return (x * y) / timUocChungLonNhat(x, y);
    }
  
    var boiChungCuaAB = timBoiChungLonNhat(a, b);
    var boiChungCuaCD = timBoiChungLonNhat(c, d);
    var boiChungCuaABCD = timBoiChungLonNhat(boiChungCuaAB, boiChungCuaCD);
  
    return boiChungCuaABCD
}