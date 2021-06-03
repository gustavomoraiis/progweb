<template>

  
    <div class="row">
    
      <div class="col-4 col-md-3"></div>
      <div class="col-12 col-md-6">
          <div class="card bg-bg-light my-5">
        <div class="card-body">
          <b-form @submit.prevent autocomplete="off">
            <b-form-group>
              <label for="">Título</label>
              <b-form-input
                class="bg-bg-light border-0 titulo text-dark"
                v-model="nota.titulo"
                type="text"
                size="lg"
                placeholder="Título"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="">Descrição</label>
              <b-form-textarea
                class="bg-bg-light border-0 text-dark"
                v-model="nota.descricao"
                placeholder="Descrição"
                rows="10"
                size="lg"
                autofocus="true"
              ></b-form-textarea>
            </b-form-group>
          </b-form>

          <b-button type="button" variant="success">
            <b-icon icon="check2-square" />
          </b-button>
          <b-button type="button" variant="success">
            <b-icon icon="tag" />
          </b-button>
        </div>
      </div>
      <div class="col-4 col-md-3"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [],
        tags: []
      }
    };
  }
};
</script>

<style>
.titulo {
  font-weight: 600;
}

label{
  font-size: 23px;
  font-weight: 600;
  margin-left: 15px;
}
</style>