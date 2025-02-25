// Begin1. Kvadratning tomoni a berilgan. Uning perimetri aniqlansin. P = 4 * a .
function task1(inputA) {
    console.log(`Kvadratning perimetri: ${4 * inputA}`); // Using backticks
    console.log("Kvadratning perimetri:", 4 * inputA);
}
task1(3);



// Begin2. Kvadratning tomoni a berilgan. Uning yuzasi aniqlansin. S= a * a
function task2(inputA) {
    console.log(`Kvadratning yuzasi: ${Math.pow(inputA, 2)}`);
}
task2(10);



// Begin3. To'g'ri to'rtburchakning tomonlari a va b berilgan. Uning yuzasi S = a * b; va P = 2 * (a + b) perimetri aniqlansin.
function task3(inputA, inputB) {
    console.log(`To'g'ri to'rtburchakning yuzasi: ${inputA * inputB}`);
    console.log(`To'g'ri to'rtburchakning perimetri: ${2 * (inputA + inputB)}`);

}
task3(4, 5);



// Begin4. Aylananing diametri d berilgan. Uning uzunligi aniqlansin L = PI * d. n = 3.14
function task4(inputD) {
    console.log(`Aylananing diametri: ${Math.PI * inputD}`);
}
task4(10);



// Begin5. Kubning yon tomoni a berilgan. Uning hajmini V = a * a * a va to'la sirti S = 6 * (a * a)aniqlansin.
function task5(inputA) {
    console.log(`Kubning hajmi: ${Math.pow(inputA, 3)},
Kubning to'la sirti: ${6 * (Math.pow(inputA, 2))}`);
}
task5(5);



// Begin6. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmini V = a * b * c va to'la sirti 
// S = 2 * (a * b + b * c + a * c) aniglansin.
function task6(inputA, inputB, inputC) {
    console.log(`Paralelepepidning hajmi: ${inputA * inputB * inputC}, 
Paralelepepidning to'la sirti: ${2 * (inputA * inputB + inputB * inputC + inputA * inputC)}`);
}
task6(2, 3, 4);



// Begin7. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin. L = 2 • л• R S = л- R°
function task7(inputR) {
    console.log(`Aylananing uzunligi: ${2 * Math.PI * inputR}, 
Aylananing yuzasi: ${Math.PI * Math.pow(inputR, 2)}`);
}
task7(10);



// Begin8. Ikkita son a va b berilgan. Ularning o'rta arifmetigi aniglansin. (a + b) / 2
function task8(inputA, inputB) {
    console.log(`Sonning o'rta arifmetigi: ${(inputA + inputB) / 2}`);
}
task8(10, 15);



// Begin13. Umumiy markazga bo'lgan ikkita aylana radiusi berilgan. R1, R2 -> (R1 > R2)
// Ularnig yuzalari S1 va S2, ularning ayirmasi S3 aniqlansin.
// S1 = PI * R1,
// S2 = PI * R2, 
// S3 = PI * (R1 - R2);

function task13(inputR1, inputR2) {
    console.log(`Aylana yuzasi: (Ikki aylana yuzasining ayirmasi) ${Math.PI * (inputR1 - inputR2)}`);
}
task13(10, 5);



// Begin32. Temperatura T(c), gradus Celsiusda berilgan. Temperatura qiymatini T(f) Farenheitga
// o'tkazuvchi programma tuzilsin. T(f) = (T(c) * 1.8) + 32   ==>   T(c) = (T(f) -32) / 1.8 
function task32(inputTc) {
    console.log(`${inputTc}°C = ${(inputTc * 1.8) + 32}°F`);
}
task32(100);