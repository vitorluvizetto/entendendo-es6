//## Exercício 1 - Par ou ímpar?
const numeros = [0, 1, 2, 3, 4, 5];
numeros.forEach((parOuImpar) => {
    if (parOuImpar % 2 === 0) {
        console.log(parOuImpar + ' é par');
    } else {
        console.log(parOuImpar + ' é ímpar');
    }
})

// ## Exercício 2 - Quero o dobro

const numerosDobro = [1, 2, 3];

const dobrar = numerosDobro.map((dobro) => {
    return console.log(dobro * 2);
})


//## Exercício 3 - NÃO ESTOU BRAVO

const capsLock = ['oi', 'tudo', 'bem?'];

const capsL = capsLock.map((caixaAlta) => {
    return caixaAlta.toUpperCase();
})
console.log(capsL);


// ## Exercício 4 - Equilibrio de parênteses


const parenteses = ')((()()())))';

const checarParenteses = !parenteses.split("").reduce((sumParent, parenteses) => {
    if (sumParent < 0) {
        return sumParent
    } else if (parenteses === "(") {
        return ++sumParent
    } else if (parenteses === ")") {
        return --sumParent
    };
}, 0);

console.log(checarParenteses)

//## Exercício 5 - Sem duplicações



function removeDuplicatas(numbers) {
    return numbers.reduce((numberFind, number) => {
        const foundDupli = numberFind.find(valor => {
            return number === valor;
        })

        if (!foundDupli) {
            numberFind.push(number);
        }

        return numberFind;
    }, [])

}

console.log(removeDuplicatas([3, 3, 4, 5]))


//## Exercício 6 - Reprovado!


const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
];

function alunosAprovados(alunos, media) {
    return alunos.filter(alunosAcimaMedia => {
        return alunosAcimaMedia.media >= media ? console.log(`${alunosAcimaMedia.nome} aprovado, média: ${alunosAcimaMedia.media}`) :
            console.log(`${alunosAcimaMedia.nome}: reprovado, média: ${alunosAcimaMedia.media}`)
    })
}
console.log(alunosAprovados(alunos, 7))



//## Exercício 7 - Dados precisos

var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]

function buscar(propriedade, valor, lista) {
    return lista.find(tipo => {
        return tipo[propriedade] === valor;
    })
}

console.log(buscar('nome', 'Emilly', lista))

