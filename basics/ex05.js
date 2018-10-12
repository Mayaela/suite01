/*
    Ecrire une fonction "isEvenConcat",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "<le nombre> est pair" si le nombre est pair
        - "<le nombre> est impair" si le nombre est impair

*/

//  écrire votre code sous ce commentaire

function isEvenConcat (nb) {
    let reponse = '';
    if (nb % 2 === 0) {
        reponse = `${nb} est pair`;
    } else {
        reponse = `${nb} est impair`;
    }
    console.log(reponse);
}

/*
  Test 1
  Résultat attendu : "6 est pair"
*/

isEvenConcat(6);

/*
  Test 2
  Résultat attendu : "5 est impair"
*/

isEvenConcat(5);

/* DO NOT TOUCH */
module.exports = {
  isEvenConcat: isEvenConcat
}
