import { reactive } from 'vue';

export const store = reactive({
    //qui andranno i data GLOBALI
    apiUri: 'http://localhost:3000',

    modal: {
        show: false,
        image: '',
        imageB: '',
        title: '',
        model: '',
        prezzo: '',
        image: '',
    },

});