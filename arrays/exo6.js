/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.prototype.sort
*/

//  écrire votre code sous ce commentaire

function sortNumbers (arr) {
    let isSorted = false;
    while (isSorted === false) {
        isSorted = true ;
        for (let i = 1; i < arr.length ; i++) {
            if (arr[i] < arr[i-1]) {
                const valMin = arr[i];
                const valMax = arr[i-1];
                arr[i-1] = valMin;
                arr[i] = valMax;
                isSorted = false;
            }
        }
    }
    return(arr);
}

/*
  Test 1
  Résultat attendu : [2, 3, 4, 5]
*/
sortNumbers([4, 3, 5, 2]);

/*
  Test 2
  Résultat attendu : [-10, 2, 10, 28]
*/
sortNumbers([10, 2, 28, -10]);

/* DO NOT TOUCH */
module.exports = {
  sortNumbers: sortNumbers
}
