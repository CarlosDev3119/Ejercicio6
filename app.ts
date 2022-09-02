import { Cuenta } from "./classes/cuentaBancaria";


const cuentaUsuario = new Cuenta( "Juan", 1000);

cuentaUsuario.ingresar(1000);
cuentaUsuario.retirar(500);

console.log(cuentaUsuario.getSaldo());
