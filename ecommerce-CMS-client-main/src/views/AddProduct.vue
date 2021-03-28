<template>
<div>
    <Navbar />
  <main class="container my-5">
      <p style="color: red"> {{ addError }}</p>
        <div class="row" id="row">
          <section class="col login-col">
            <div class="card shadow p-5" id="main-body-add">
              <form @submit.prevent="addProduct">
                <h3 class="text-center text-uppercase mb-4">Add Product</h3>
                <hr>
                <div class="form-group mt-2">
                  <label>Product Name</label>
                  <input type="text" placeholder="example: denim jacket" class="form-control" v-model="newProduct.name">
                </div>
                <div class="form-group mt-2">
                  <label>Image URL</label>
                  <input type="text" placeholder="example: http://....." class="form-control" v-model="newProduct.image_url">
                </div>
                <div class="form-group mt-2">
                  <label>Price</label>
                  <input type="number" placeholder="example: 120000000" class="form-control" v-model="newProduct.price">
                </div>
                <div class="form-group mt-2">
                  <label>Stock</label>
                  <input type="number" placeholder="example: 100" class="form-control" v-model="newProduct.stock">
                </div>
                <div id="button-add">
                    <button type="submit" class="btn btn-block btn-secondary rounded-pill mt-5 actions">Add</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'AddProduct',
  components: {
    Navbar
  },
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.newProduct)
    }
  },
  computed: {
    addError () {
      return this.$store.state.addError
    }
  }
}
</script>

<style>
 #button-add{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }
  #main-body-add {
      border-radius: 15px;
  }
</style>
