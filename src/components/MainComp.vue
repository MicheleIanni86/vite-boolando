<script>
import CardComp from './CardComp.vue';
export default {
  data() {
    return {
    products: [
        {
            id: 1,
            frontImage: './src/assets/img/1.webp',
            backImage: './src//assets/img/1b.webp',
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
            frontImage: './src/assets/img/2.webp',
            backImage: './src/assets/img/2b.webp',
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
            frontImage: './src/assets/img/3.webp',
            backImage: './src/assets/img/3b.webp',
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
            frontImage: './src/assets/img/4.webp',
            backImage: './src/assets/img/4b.webp',
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
            frontImage: './src/assets/img/5.webp',
            backImage: './src/assets/img/5b.webp',
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
            frontImage: './src/assets/img/6.webp',
            backImage: './src/assets/img/6b.webp',
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
};
},

components: { CardComp }
};

</script>


<template>

<div class="container mt-3">

    
    <div class="row">
        
        <div class="col-4 mb-5" v-for="product in products">
            
            <CardComp 
            :item="product"/>
            
        </div>
        
        
    </div>
</div>
</template>



<style lang="scss" scoped>




</style>