export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("Transação inválida! O valor da transação tem que ser maior que zero!");
        }
        if (valorDoDebito >= this.saldo) {
            throw new Error("Não foi possível realizar a operação, saldo insuficiente!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("Depósito inválido, o valor do depósito tem que ser maior que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
