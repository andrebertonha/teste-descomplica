
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


lista.map(lista => (elemento) => {
    if (elemento.startMinute % 2 != 0) {
        console.log("aula inicia em minuto impar")
    }
})