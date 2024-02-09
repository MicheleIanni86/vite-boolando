<script>
import CardComp from './CardComp.vue';
export default {
  data() {
    return {

    products: [
        {
            id: 1,
            frontImage: '1.webp',
            backImage: '1b.webp',
            brand: "Levi's",
            name: 'Relaxed Fit',
            price: 29.99,
            isInFavorites: true,
            badges: [
            {
                type: 'tag',
                value: 'Sostenibilità',
            },
            {
                type: 'discount',
                value: '-50%',
            },
            ],
        },
        {
            id: 2,
            frontImage: '2.webp',
            backImage: '2b.webp',
            brand: 'Guess',
            name: 'Roses Tee',
            price: 20.99,
            isInFavorites: true,
            badges: [
            {
                type: 'discount',
                value: '-30%',
            },
            ],
        },
        {
            id: 3,
            frontImage: '3.webp',
            backImage: '3b.webp',
            brand: 'Come Zucchero Filato',
            name: 'Voglia di colori pastello',
            price: 129.99,
            isInFavorites: false,
            badges: [
            {
                type: 'discount',
                value: '-30%',
            },
            ],
        },
        {
            id: 4,
            frontImage: '4.webp',
            backImage: '4b.webp',
            brand: "Levi's",
            name: 'Tee Unisex',
            price: 14.99,
            isInFavorites: false,
            badges: [
            {
                type: 'tag',
                value: 'Sostenibilità',
            },
            {
                type: 'discount',
                value: '-50%',
            },
            ],
        },
        {
            id: 5,
            frontImage: '5.webp',
            backImage: '5b.webp',
            brand: 'Maya Deluxe',
            name: 'Stripe Bodice',
            price: 99.99,
            isInFavorites: true,
            badges: [
            {
                type: 'tag',
                value: 'Sostenibilità',
            },
            {
                type: 'discount',
                value: '-50%',
            },
            ],
        },
        {
            id: 6,
            frontImage: '6.webp',
            backImage: '6b.webp',
            brand: 'Esprit',
            name: 'Maglione - Black',
            price: 29.99,
            isInFavorites: true,
            badges: [
            {
                type: 'tag',
                value: 'Sostenibilità',
            },
            ],
        }
    ],
      components: { CardComp }
    }
 }
}
</script>


<template>
    <main class="main-contener">

<!-- CONTAINER CARD -->
<div class="container-card">
    <CardComp v-for="product in products" 
    :img="product.image" 
    :imgHover="product.imageHover" 
    :sales="product.sales" 
    :brand="product.brand" 
    :model="product.model"/>
    
    
</div>

</main>
</template>

<!-- CARDS
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
</div> -->

<style lang="scss">
</style>