<template>
    <div>
        <v-card flat>
            <v-toolbar flat>
                <v-toolbar-title class="text-h3  font-weight-black teal--text">
                    {{info.strDrink}}
                </v-toolbar-title>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <v-img width="400" :src="info.strDrinkThumb"></v-img>
                        <p><b>Preparacion: </b>{{info.strInstructions}}</p>
                        <p><b>Sirva en: </b>{{info.strGlass}}</p>
                    </v-col>
                    <v-col cols="8" class="d-flex justify-center">
                        <v-row>
                            <v-col v-for="(item, index) in ingredientes" :key="item.idDrink" class="d-flex child-flex" cols="4">
                                <v-card flat tile class="d-flex">
                                    <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" :src="item.imagen" :lazy-src="item.imagen" aspect-ratio="1">
                                        <v-card-title>{{formatTituloIngrediente(item)}} <v-btn @click="searchIngrediente(item.ingrediente)" text>mas</v-btn>
                                        </v-card-title>
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" max-width="600">
            <v-card>
                <v-card-title class="headline">{{this.getIntediente.strIngredient}}</v-card-title>
                <v-row>
                    <v-col cols="3">
                        <v-img :src="encodeURI('https://www.thecocktaildb.com/images/ingredients/' + this.getIntediente.strIngredient + '.png')" :lazy-src="encodeURI('https://www.thecocktaildb.com/images/ingredients/' + this.getIntediente.strIngredient + '.png')" aspect-ratio="1"></v-img>
                    </v-col>
                    <v-col cols="9">
                        <v-card-text>
                            {{this.getIntediente.strDescription}}
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {

    name: 'Card',
    props: ['info'],
    data() {
        return {
            dialog: false
        }
    },
    computed: {
        ingredientes() {
            return Object.getOwnPropertyNames(this.info).filter(e => e.indexOf('strIngredient') >= 0 && this.info[e]).map(e => {
                let ingrediente = this.info[e];
                let cantidad = this.info['strMeasure' + e.replace(/[^\d]+/, '')]
                let imagen = encodeURI('https://www.thecocktaildb.com/images/ingredients/' + ingrediente + '.png')
                return { ingrediente, cantidad, imagen }
            })
        },
        ...mapGetters(['getIntediente']),
    },
    methods: {
        formatTituloIngrediente(item) {
            let cantidad = item.cantidad ? item.cantidad + ' of ' : '';
            return cantidad + item.ingrediente;
        },
        searchIngrediente(ingrediente) {
            this.dialog = true;
            this.$store.dispatch("FETCH_SEARCH_INGREDIENT", { ingrediente });
        }
    }
}
</script>
<style lang="css" scoped>
img {
    width: 250px;
}

li img {
    width: 100px;
}
</style>