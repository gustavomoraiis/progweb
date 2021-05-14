<template>
    <div class="card bg-warning my-5">
        <div class="card-body">
            <b-form @submit.prevent="adicionar" autocomplete="off">
                <b-form-group>
                    
                </b-form-group>
            </b-form>


            <b-button type="button" variant="warning">

            </b-button>
            <b-button type="submit" variant="dark">
                Adicionar
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    layout: "home",
    data(){
        return{
            nota: {
                titulo: null,
                descricao: null,
                checklists: [],
                tags: []
            }
        };
    },
    methods:{
        async adicionar (){
            this.$store.dispatch('nota/add', this.nota);
        }
    }
};
</script>

<style>

</style>