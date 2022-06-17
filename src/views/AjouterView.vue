<template>
    <div class="divajouter" v-for="(objectTitle) in Object.keys(this.$store.state.datas[0])" >
        <label for="">{{objectTitle.toUpperCase()}}</label>

        <input v-model = "input[objectTitle]" type="text">
        <!-- <span>{{input}}</span>      -->
    </div>
    <input type="button" @click="ajouterUtilisateur()" value="ajouter">
    <router-link :to="{name:'utilisateurs'}">Annuler</router-link>
</template>

<script>
    export default {
        name: 'AjouterView',
        data: function (){
            return {
                input: {},
            }
        },
        methods: {
            ajouterUtilisateur(){
                this.$store.commit('addingUser', this.input)
            }
        }
    }
</script>

<style>
    .divajouter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>