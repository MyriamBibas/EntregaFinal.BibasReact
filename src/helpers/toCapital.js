/*Cadena de texto con la primera letra en mayuscula*/
export function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}