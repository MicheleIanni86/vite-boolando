<script>
export default {
  
     props: 
        {
          item: Object,
        },
 
}
</script>


<template>




  
  <div class="card">
    <img :src="item.frontImage" :alt="item.brand" class="first-img">
    <img :src="item.backImage" :alt="brand" class="first-img-b">
    <p class="brand">{{ item.brand }}</p>
    
    
        <span class="sostenibility">{{ item.badges[0].value }}</span>
    
    <p class="model">{{ item.name }}</p>
    <p class="price">{{ item.price }}</p>
  </div>


</template>


<style lang="scss" scoped>
// inserire class della card


#old-price{
text-decoration: line-through;
color: black;
}

.brand{
font-size: 12px;
}

.model {
  font-weight: bolder;
}

.price {
  font-size: small;
  font-weight: bold;
  color: red;
}


.card > img {
  max-width: 100%;
  }


.first-img-b{
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}


.card:hover .first-img-b {
  display: block;
}

/* SALES ETICHETTE */

.sales {
  position: absolute;
  bottom: 50px;
  left: 0;
  color: white;
  padding: 3px 0px;
  font-size: 14px;
  font-weight: bold;
  
}

.percentual {
  display: inline-block;
  margin: 3px;
  background-color: red;
  padding: 3px;
}

.sostenibility {
  display: inline-block;
  margin: 3px;
  background-color: green;
  padding: 3px;
}


/* HEARTS */

.square-hearts {
  position: absolute;
  top: 15px;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: white;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
}


.square-hearts:hover {
  color:red;
}


</style>