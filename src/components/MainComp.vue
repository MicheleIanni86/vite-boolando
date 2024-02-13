<script>
import { store } from '../store';
import axios from 'axios';
import CardComp from './CardComp.vue';
export default {
    data() {
        return {
            products: [
            ],
            store,

        };
    },

    components: { CardComp },

    methods: {
        OpenedCard() {

            store.modal.show = true;
        }
    },

    created() {
        axios.get(`${store.apiUri}/products`).then((response) => {
            this.products = response.data;
        });
    },
};

</script>


<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-4 mb-5" v-for="(product, index) in products">
                <CardComp :item="product" @card-open="OpenedCard" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>