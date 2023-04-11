
function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

const paresBaseAltura: [number, number][] = [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10], [6, 12], [7, 14]];

paresBaseAltura.forEach(([base, altura]) => {
  const area = calcularAreaTriangulo(base, altura);
  console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);
});