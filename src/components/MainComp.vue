<script>
import { store } from '../store';
import axios from 'axios';
import CardComp from './CardComp.vue';
export default {
  data() {
    return {
    products: [
    ],

  
};
},

components: { CardComp },

created() {
    axios.get(`${store.apiBoolando}/products`).then((risposta) =>{
        this.products = risposta.data;
    });
 }, 
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