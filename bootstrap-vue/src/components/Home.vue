<template>
  <div class="home">
    <HelloWorld msg="Acciones tipo Tarjetas" />
    <br />
    <center>
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Envio estado EOL</h5>
          <p class="card-text">ZZZ</p>
          <a href="#" class="btn btn-primary">IR</a>
        </div>
      </div>

      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Estado Envio</h5>
          <p class="card-text">YYY</p>
          <a href="#" class="btn btn-primary">IR</a>
        </div>
      </div>

      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Estado Envio SAG</h5>
          <p class="card-text">XXX</p>
          <a href="#" class="btn btn-primary">IR</a>
        </div>
      </div>
    </center>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
</script>
