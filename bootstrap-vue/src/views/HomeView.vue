<template>
  <div class="home">
    <HomeVue />
  </div>
</template>

<script>
// @ es un alias que apunta hacia /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeVue from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    HomeVue,
  },
};
</script>
