let name = "Lorran";
let experiencia = 10001;

const heroi = (name, experiencia) => {
    if (experiencia <= 1000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Ferro.");
    } else if (experiencia <= 2000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Bronze.");
    } else if (experiencia <= 5000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Prata Ouro.");
    } else if (experiencia <= 8000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Platina Diamante.");
    } else if (experiencia <= 9000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Ascendente.");
    } else if (experiencia <= 10000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Imortal.");
    } else if (experiencia > 10000) {
        console.log("O Herói,", name, "tem", experiencia, "de xp, então é da Liga Radiante.");
    }
}
// Exemplo de chamada da função
heroi(name, experiencia);