/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire

function shoppingList (tabPaniers) {
    
    panier = tabPaniers[0].concat(tabPaniers[1]).concat(tabPaniers[2]).concat(tabPaniers[3]).concat(tabPaniers[4]);

    const tabOrange = panier.filter(word => word === 'orange');
    const tabKiwi = panier.filter(word => word === 'kiwi');
    const tabPrune = panier.filter(word => word === 'prune');
    const tabAnanas = panier.filter(word => word === 'ananas');
    const tabBanane = panier.filter(word => word === 'banane');
    const tabPamplemousse = panier.filter(word => word === 'pamplemousse');

    const panierObjet = {
        'orange': tabOrange.length,
        'kiwi' : tabKiwi.length,
        'ananas' : tabAnanas.length,
        'prune' : tabPrune.length,
        'banane' : tabBanane.length,
        'pamplemousse' : tabPamplemousse.length
    }
    console.log(panierObjet);
}

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
