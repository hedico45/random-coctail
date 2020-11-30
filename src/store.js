import Vue from 'vue'
import Vuex from 'vuex'


//const thecocktaildb = require('./api/thecocktaildb/v1')
import { getRandomCocktail, searchIngrediente } from './api/thecocktaildb/v1'

Vue.use(Vuex)

let state = {
	cocktails: [],
	ingrediente: {}
}


let getters = {
	getCocktails: (state) => {
        return state.cocktails;
    },
    getIntediente: (state) => {
        return state.ingrediente;
    }
}


let mutations = {
	FETCH_RANDOM_COCKTAILS_MUTATION: (state, data) => {
        state.cocktails = data.drinks;
    },
    FETCH_SEARCH_INGREDIENTS_MUTATION: (state, data) => {
        state.ingrediente = data.ingredients[0];
    }
}


let actions = {
	async FETCH_RANDOM_COCKTAILS({ commit }){
		try{
			let res = await getRandomCocktail();
			commit("FETCH_RANDOM_COCKTAILS_MUTATION", res.data)
		}catch(err){
			console.log(err)
		}
    },
 	async FETCH_SEARCH_INGREDIENT({ commit }, { ingrediente }){
		try{
			let res = await searchIngrediente(ingrediente);
			commit("FETCH_SEARCH_INGREDIENTS_MUTATION", res.data)
		}catch(err){
			console.log(err)
		}
    }   
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})