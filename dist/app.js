"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuentaBancaria_1 = require("./classes/cuentaBancaria");
const cuentaUsuario = new cuentaBancaria_1.Cuenta("Juan", 1000);
cuentaUsuario.ingresar(1000);
cuentaUsuario.retirar(500);
console.log(cuentaUsuario.getSaldo());
