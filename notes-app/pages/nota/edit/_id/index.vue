<template>
 <div class="container">
      <b-alert class="mt-5" variant="dark" show v-if="$nuxt.isOffline">
        Você está offline
        <n-nota :id="parseInt($route.params.id)"></n-nota>
      </b-alert>
 </div>
  
</template>

<script>
export default {
  layout: "home"
};
</script>

<style></style>
