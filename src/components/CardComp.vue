<script>
export default {

  props:
  {
    item: Object,
  },

  emits: ['card-open'],

};
</script>


<template>
  <div class="card" @click="$emit('card-open')">
    <img :src="item.frontImage" :alt="item.brand" class="first-img">
    <img :src="item.backImage" :alt="item.brand" class="first-img-b">
    <div class="square-hearts" :class="{ 'square-heartsRed': item.isInFavorites === true }">&hearts;</div>

    <div class="sales">
      <span class="sostenibility" :class="item.badges[0].type == 'discount' ? 'percentual' : ''">{{ item.badges[0].value
      }}</span>
    </div>

    <p class="brand">{{ item.brand }}</p>
    <p class="model">{{ item.name }}</p>
    <p class="price">{{ item.price }}</p>
  </div>
</template>


<style lang="scss" scoped>
// inserire class della card
.card {
  position: relative;
}


#old-price {
  text-decoration: line-through;
  color: black;
}

.brand {
  padding-top: 10px;
  margin-left: 15px;
  font-weight: bolder;
  font-size: 15px;
}

.model {
  margin-left: 15px;
  font-weight: bolder;
  font-size: 20px;
}

.price {
  margin-left: 15px;
  font-size: smaller;
  font-weight: bold;
  color: red;
}


.card>img {
  max-width: 100%;
}


.first-img-b {
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
  bottom: 150px;
  left: 5px;
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


.square-heartsRed {
  color: red;
}
</style>