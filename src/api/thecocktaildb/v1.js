const axios = require('axios')

export const getRandomCocktail = async () => {
    return await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
}

//https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

export const searchIngrediente = async (ingrediente) => {
    return await axios.get(encodeURI('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingrediente))
}
/*
module.exports = {
    getRandomCocktail
}
*/
//export default { getRandomCocktail, searchIngrediente }
//getRandomCocktail().then(console.log)