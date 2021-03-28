<template>
<div>
  <Navbar />
   <main class="container my-5">
     <p style="color: red"> {{ editError }}</p>
        <div class="row" id="row">
          <section class="col login-col">
            <div class="card shadow p-5" id="main-body-edit">
              <form @submit.prevent="edit">
                <h3 class="text-center text-uppercase mb-4">Edit Product Data</h3>
                <hr>
                <div class="form-group mt-2">
                  <label>Product Name</label>
                  <input type="text" class="form-control" v-model="editData.name">
                </div>
                <div class="form-group mt-2">
                  <label>Image URL</label>
                  <input type="text" class="form-control" v-model="editData.image_url">
                </div>
                <div class="form-group mt-2">
                  <label>Price</label>
                  <input type="number" class="form-control" v-model="editData.price">
                </div>
                <div class="form-group mt-2">
                  <label>Stock</label>
                  <input type="number" class="form-control" v-model="editData.stock">
                </div>
                <div id="button-edit">
                    <button class="btn btn-block btn-secondary rounded-pill mt-5 actions">Submit</button>
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
  name: 'EditProduct',
  components: {
    Navbar
  },
  methods: {
    edit () {
      this.$store.dispatch('edit', this.editData)
    }
  },
  computed: {
    editData () {
      return this.$store.state.editProduct
    },
    editError () {
      return this.$store.state.editError
    }
  }
}
</script>

<style>
#button-edit{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }
  #main-body-edit {
      border-radius: 15px;
  }
</style>
