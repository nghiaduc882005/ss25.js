let sum = 0;
let number = prompt("Nhap vao mot so nguyen duong:");
number = parseInt(number);

for (let i = 1; i <= number; i++) {
  sum += i;
  console.log(i);
}

if (sum % 2 !== 0) {
  console.log("Tong cac so la so le la: " + sum);
} else {
  console.log("Tong cac so la so chan ");
}

