function fibnacci(n)
{
let a =0
let b=1
let c=0
for(index =3;index<=n;index++){
    c=a+b
    a=b
    b=c
}
console.log(c)
}
fibnacci(5)