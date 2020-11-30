const axios = require('axios');

function base() {
	return axios.create({
        baseURL: `https://www.thecocktaildb.com/api/json/v1/1`
    })
}

module.exports = {
	base
}