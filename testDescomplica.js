// questao 1
const lista =

[
    {
        discipline: “math”,
        startHour: 11,
        startMinute: 0
    },
    {
        discipline: “biology”,
        startHour: 12,
        startMinute: 15
    },
];

function aulasMinutoImpar() {
    lista.map(lista => (elemento) => {
        if (elemento.startMinute % 2 != 0) {
            console.log(`aula inicia em minuto impar: ${elemento.startMinute}`)
            return elemento.startMinute;            
        }
    });
}

// questao 2

function ocorrPalavraFrase(str, keepCase) {
    if (!keepCase) str = str.toLowerCase();
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (!obj[str[i]]) obj[str[i]] = 0;
        obj[str[i]]++;
    }
    return obj;
}

var a = ocorrPalavraFrase("hello");
var b = ocorrPalavraFrase("AaBbC");
var c = ocorrPalavraFrase("AaBbC", true);

console.log(a, b, c);
