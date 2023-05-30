
const $selectArmadura = document.getElementById("selectArma");

console.log($selectArmadura);

const armas = ["Armadura","Espada", "Martillo", "Escudo", "Arma de Fuego", "Flechas"];


armas.forEach(function(opcion) {
    let option = document.createElement("option");
    option.text = opcion;
    option.value = opcion;
    $selectArmadura.appendChild(option);
});