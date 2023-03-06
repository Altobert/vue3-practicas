<!--SFC nos permite separar componentes en un unico archivo-->
<!--Logica estructura y estilo SFC-->
<!--El arbol que se genera en el navegador se llama DOM-->
<script setup>
    const name = "Vue 3";
    const styleColor = "color: red;";
    const active = true;
    const arrayColores = ["blue", "red", "peru"];
    const counter = 1;
</script>

<template>
  <!--interpolacion de textos, bigotes o llaves. Es una forma de insertar valores a una plantilla-->
  <h1>Hola {{name.toUpperCase()}}</h1>
  
  <!--Se interpreta como texto-->  
  <h2>{{arrayColores}}</h2>
  
  <!--Para no utilizar los bigotes-->
  <!--Style con bbind-->
  <h2 :style="styleColor">Hola {{ name.toUpperCase() }}</h2>

  <!-- interpolacion de texto -->
  <h3>{{ active ? "Estoy activado" : "Estoy desactivado" }}</h3>

  <!--interpolacion con signo peso y llaves-->
  <h4 :style="`color: ${arrayColores[2]}`">Soy Peru</h4>
  
  <!--interpolacion-->
  <h5>Contador: {{ counter + 1 }}</h5>

</template>

<style>
 h1 {
  color: red;
 }
</style>