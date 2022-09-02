import { BancoCuenta } from "../interfaces/bancoCuenta";


export class Cuenta implements BancoCuenta {

    public saldo: number;
    public titular: string;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public ingresar(ingreso: number): void {
        this.saldo += ingreso;
    }

    public retirar(retiro: number): void {
        this.saldo -= retiro;
    }
}