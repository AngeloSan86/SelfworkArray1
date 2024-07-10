let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

console.log(`Ordine Originale\n ${array}`);

array.sort((a,b)=> a-b);

console.log(`Ordine Crescente\n ${array}`);

array.sort((a,b)=> b-a);

console.log(`Ordine Derescente\n ${array}`);
