<script>
import { store } from '../store';
import axios from 'axios';
import CardComp from './CardComp.vue';
import ModalComp from './ModalComp.vue';
export default {
  data() {
    return {
    products: [
    ],
    store,
  
};
},

components: { CardComp, ModalComp },

created() {
    axios.get(`${store.apiUri}/products`).then((response) =>{
        this.products = response.data;
    });
 }, 
};

</script>


<template>

    <ModalComp></ModalComp>
    
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