<script>
import { store } from './store';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
import ModalComp from './components/ModalComp.vue';





export default {
  data() {
    return {
      store,
    };

  },
  components: { HeaderComp, MainComp, FooterComp, ModalComp }
};
</script>


<template>
  <HeaderComp></HeaderComp>

  <MainComp></MainComp>
  <ModalComp v-if="store.modal.show"></ModalComp>
  <FooterComp></FooterComp>
</template>


<style lang="scss" >
@use './styles/general.scss';
</style>
