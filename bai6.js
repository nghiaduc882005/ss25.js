// bat dau tu 0 va 1 --> so tiep theo la tong cua 2 so dang truoc no
function fibonacci(n) {
    let a = 0, b = 1, temp;

    if( n === 0){
        return 0;
    }

    for( let i = 2; i <= n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}   
    
    let n = prompt("Nhap so nguyen duong n: ");
    n = parseInt(n);

    console.log("So fibonacci thu $(n) la : ${fibonacci(n)}");


