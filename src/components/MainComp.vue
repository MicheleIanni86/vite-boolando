<script>
export default {
  data() {
    return {

    cards: [
        {
            image: '../assets/img/1.webp'
        }
    ]
    }
  }
}
</script>


<template>
    <main class="main-contener">

<!-- CONTAINER CARD -->
<div class="container-card">

    <!-- CARDS -->
    <div v-for="card in cards" class="card">
        <img src="../assets/img/1.webp" class="first-img">
        <img src="../assets/img/1b.webp" alt="img1b" class="first-img-b">
        
        <div class="square-hearts">&hearts;</div>

        <div class="sales">
            <span class="percentual">-50%</span>
            <span class="sostenibility">Sostenibilità</span>
        </div>
        <p class="brand">Levi's</p>
        <P class="model">RELAXED FIT TEE UNISEX</P>
        <P class="price">14,99€  <span id="old-price"> 29,99€</span></P>
    </div>


</div>
       
</main>
</template>


<style lang="scss">
</style>