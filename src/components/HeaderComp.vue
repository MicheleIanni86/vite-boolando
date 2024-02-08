<script>

export default {
  data() {
    return {
        categories: [
            {
                name: 'Donna',
                url: '#',
                current: false
            },
            {
                name: 'Uomo',
                url: '#',
                current: false
            },
            {
                name: 'Bambini',
                url: '#',
                current: false
            },

        ],
        actionUser: [
            {
                logo: 'fa-regular fa-user',  
                url: '#'
            },
            {
                logo: 'fa-regular fa-heart',  
                url: '#'
            },
            {
                logo: 'fa-solid fa-bag-shopping',  
                url: '#'
            },
            
        ]
     }
  }
}
</script>


<template>


    
    <header class="setHeader">
        
        <div class="setHeaderContainer">
            
                <ul class="setHeaderLeft">
                    <li v-for="cat in categories"><a href="">{{ cat.name }}</a> 
                    </li>
                </ul>
            
            <div class="setHeaderCenter">
                <img src="../assets/img/boolean-logo.png" alt="logo-boolean" class="setHeaderCenter">
            </div>
            
            <div class="setHeaderRight">

                <div v-for="action in actionUser"> 
                    <a href="#"><i :class="action.logo"></i></a>
                </div>
            </div>
            
        </div>
    </header>


</template>


<style scoped>
ul,li {
    list-style: none;
    color: white;
    
}

</style>