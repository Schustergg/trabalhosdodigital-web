<template>
  <v-app>
    <v-snackbar
      top
      color="red"
      v-model="$store.state.errorAlert"
      :timeout="3000"
      title="Errors"
    >{{ $store.state.errorMessage }}</v-snackbar>
    <v-snackbar
      top
      color="green"
      v-model="$store.state.successAlert"
      :timeout="3000"
      title="Sucesso"
    >{{ $store.state.successMessage }}</v-snackbar> 
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

});
</script>

<style>

* {
  font-family: "Aileron";
}

@font-face {
  font-family: "Aileron";
  src: local("Aileron"),
   url(./fonts/aileron.regular.otf) format("truetype");
}
</style>