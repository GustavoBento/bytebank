export class Armazenador {
    constructor() { }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
    static salvar(chave, valor) {
        const valorComString = valor;
        return localStorage.setItem(chave, valorComString);
    }
}
