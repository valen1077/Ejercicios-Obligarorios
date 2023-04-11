function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
var paresBaseAltura = [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10], [6, 12], [7, 14]];
paresBaseAltura.forEach(function (_a) {
    var base = _a[0], altura = _a[1];
    var area = calcularAreaTriangulo(base, altura);
    console.log("El \u00E1rea del tri\u00E1ngulo con base ".concat(base, " y altura ").concat(altura, " es: ").concat(area));
});
