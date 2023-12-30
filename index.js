//classe hreoi 
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
    }

// declara a variável   
    atacar() {
        let ataque; 

// determinar o ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                console.log('Tipo inválido'); 
                return; 
        }

// tipo do herói e o tipo de ataque utilizado
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// classe Heroi com diferentes tipos
let mago = new Heroi('John', 30, 'mago');
let guerreiro = new Heroi('Jim', 25, 'guerreiro');
let monge = new Heroi('Jack', 22, 'monge');
let ninja = new Heroi('Joe', 28, 'ninja');

// método 'atacar()' 
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
