<template>
<div>
   <Navbar />
   <div class="container-fluid">
    <div class="row my-5 mx-3" id="card-container">
        <!-- col start -->
        <CardProduct v-for="product in products" :key="product.id" :data="product"/>
        <!-- col end -->
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardProduct from '@/components/CardProduct.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardProduct
  },
  created () {
    this.$store.dispatch('fetchProduct')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style>
img {
  max-width: 400px;
  max-height: 224px;
  height: auto;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card {
  width: 400px;
  border-radius: 15px;
}
.card-col {
  width: 450px;
  display: flex;
  justify-content: center;
}
.card-body {
  display: flex;
}
.body-right {
  text-align: center;
}
.btn{
  width: inherit;
}
</style>
