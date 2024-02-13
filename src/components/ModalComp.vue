<script>
import { store } from '../store';
export default {
    data() {
        return { store };
    },

    methods: {
        ClosedCard() {
            store.modal.show = false;
        },


        created() {

        },
    },
};
</script>


<template>
    <div class="sfondo">

        <div class="card card text-center">
            <div class="imageModal">
                <img :src="store.modal.image" class="card-img-top" :alt="store.modal.title">
                <img :src="store.modal.imageB" class="card-img-top" :alt="store.modal.title">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ store.modal.title }}</h5>
                <p class="card-text">{{ store.modal.model }}</p>
                <p class="fw-bold text-red">{{ store.modal.prezzo }} €</p>
                <button class="btn btn-warning" @click="ClosedCard()">Chiudi Card</button>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.card {
    width: 480px;
}

.imageModal {
    display: flex;
}

.sfondo {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>