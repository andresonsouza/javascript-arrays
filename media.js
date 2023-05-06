const notas = [10, 6.5, 8, 7.5,];

soma = null;
notas.forEach(item => {
    soma += item;
});


const media = soma / notas.length;
console.log(media);