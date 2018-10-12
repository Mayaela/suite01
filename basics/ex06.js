/*
    Ecrire une fonction "getHumanTypeByAge",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "enfant" si le nombre est strictement inférieur à 12
        - "ado" si le nombre est supérieur ou égal à 12 et strictement inférieur à 18
        - "adulte" si le nombre est supérieur ou égal à 18 et strictement inférieur à 124
        - "impossible... ou encore jamais vu" si le nombre est supérieur ou égal à 124
            ou si le nombre est strictement inférieur à 1;

*/

//  écrire votre code sous ce commentaire

function getHumanTypeByAge (nb) {
    let type = '';
    if(nb < 12 && nb > 1) {
        type = 'enfant';
    } else if (nb >= 12 && nb < 18 ) {
        type = 'ado';
    } else if (nb >= 18 && nb < 124){
        type = 'adulte';
    } else {
        type = 'impossible... ou encore jamais vu';
    }
    console.log(type);
}

/*
  Test 1
  Résultat attendu : "impossible... ou encore jamais vu"
*/

getHumanTypeByAge(-5);

/*
  Test 2
  Résultat attendu : "enfant"
*/

getHumanTypeByAge(6);

/*
  Test 3
  Résultat attendu : "ado"
*/

getHumanTypeByAge(17);

/*
  Test 4
  Résultat attendu : "adulte"
*/

getHumanTypeByAge(33);

/*
  Test 5
  Résultat attendu : "impossible... ou encore jamais vu"
*/

getHumanTypeByAge(140);

/* DO NOT TOUCH */
module.exports = {
  getHumanTypeByAge: getHumanTypeByAge
}
