//1
let Edad = prompt("ingrese su edad ")

if( Edad>=18){
    alert("ya sos mayor de edad ")
}else{
    alert("todavia no sos mayor de edad")
}

//2
let usuario=prompt("ingrese su nombre de usuario")
let contraseña=prompt("ingrese su contraseña")
if(contraseña === "123"){
    alert("acceso concedido")
}else{
    alert("acceso denegado")
}

//3

let producto1=prompt("ingrese el valor de un producto")
let producto2=prompt("ingrese el valor de un producto")
let producto3=prompt("ingrese el valor de un producto")
let sumas= producto1+producto2+producto3
if(sumas >= "5000"){
    alert("obtienes un descuetno sobre los 3 productos")
}else{
    alert("no botuviste ningun descuento")
}
