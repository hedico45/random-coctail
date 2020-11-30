<template>
    <div>
        <Card v-for="item in getCocktails" :info="item" key="item.idDrink"></Card>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: {
        Card
    },
    data() {
        return {};
    },
    mounted() {
        this.getDataAsync();
    },
    methods: {
        getDataAsync() {
            this.$store.dispatch("FETCH_RANDOM_COCKTAILS");
        },
    },
    computed: {
        ...mapGetters(["getCocktails"])
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>