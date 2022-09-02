

export interface BancoCuenta {
    saldo: number;
    titular: string;
    getSaldo(): number;
    setSaldo(saldo: number): void;
    getTitular(): string;
    setTitular(titular: string): void;
    ingresar(ingreso: number): void;
    retirar(retiro: number): void;
}
