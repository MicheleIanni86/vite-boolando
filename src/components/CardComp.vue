<script>
export default {
  
     props: {
            img: String,
            imgHover: String,
            sales: String,
            brand: String,
            model: String,
        },
  
}
</script>


<template>
<main class="main-contener">
    
    <div class="container-card">
        <div class="card">
            <img :src="img" :alt="model" class="first-img">
            <img :src="imgHover" :alt="model" class="first-img-b">
            <h3 class="model">{{ model }}</h3>
            <p class="brand">{{ brand }}</p>
            <p class="sales">{{ sales }}</p>
            
        </div>
    </div>
</main>
</template>


<style lang="scss" scoped>
// inserire class della card
.main-contener {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1620px;

}

.container-card {
  width: 1420px;
  height: 1500px;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 45px;
}
.card {
  width: calc(100% / 3 - 40px);
  height: 635px;
  margin: 20px 20px;
  position: relative;
}
.brand{
font-size: 12px;
}

.model {
  font-weight: bolder;
}

.card > img {
  width: 100%;
  height: 100%;
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
.card {
    width: calc(100% / 3 - 40px);
    height: 635px;
    margin: 20px 20px;
    position: relative;
  }
</style>