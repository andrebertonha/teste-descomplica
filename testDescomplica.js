
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
            return elemento.startMinute;
            console.log(`aula inicia em minuto impar: ${elemento.startMinute}`)
        }
    });
}
