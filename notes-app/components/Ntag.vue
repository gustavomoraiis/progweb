<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="(item, index) of value" :key="index">
        <n-tag-item v-model="value[index]"></n-tag-item>
      </li>
      <li>
        <n-tag-item
          v-model="tag"
          @itemConfirmado="adicionar()"
        ></n-tag-item>
      </li>
    </ul>

    <p class="text-muted">
      <small>{{ mensagemNumeroItens }} </small>
    </p>
  </div>
</template>

<script>
export default {
  name: "n-tag",
  props: {
    value: Array
  },
  data() {
    return {
      tag: {
        descricao: null,
        concluida: 0
      }
    };
  },
  computed: {
    numeroItens() {
      return this.value.length;
    },
    mensagemNumeroItens() {
      return this.value.length > 1
        ? `${this.numeroItens} itens adicionados`
        : `${this.numeroItens} item adicionado`;
    }
  },
  methods: {
    adicionar() {
      this.value.push(this.tag);

      this.tag = {
        descricao: null,
        concluida: 0
      };
    }
  }
};
</script>

<style></style>
