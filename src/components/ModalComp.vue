<script>
import { store } from '../store';
export default {
    data() {
        return {
            store


        };
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

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <button class="btn btn-primary" @click="ClosedCard()">Chiudi</button>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.sfondo {
    background-color: rgba(0, 0, 0, 0.7);
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