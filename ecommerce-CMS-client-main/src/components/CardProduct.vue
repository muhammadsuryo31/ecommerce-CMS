<template>
  <div class="card-col col-lg-4 mb-4">
          <div class="card shadow">
            <img :src="data.image_url" alt="" class="card-img-top">
            <div class="card-body">
              <div class="body-left col-6">
                <h5 class="card-title">Name</h5>
                <p class="card-text">{{data.name}}</p>
                <h5 class="card-title">Price</h5>
                <p class="card-text">{{data.price}}</p>
                <h5 class="card-title">Stock</h5>
                <p class="card-text">{{data.stock}}</p>
              </div>
              <div class="body-right col-6">
                <h5 class="card-title">Item Id</h5>
                <h1>{{data.id}}</h1>
              </div>
            </div>
            <div class="card-footer col-12">
              <a href="" class="btn btn-outline-success btn-md" v-on:click.prevent="editing"><i class="far fa-heart">Edit</i></a>
                <a href="" class="btn btn-outline-danger btn-md" v-on:click.prevent="deleting"><i class="far fa-heart">Delete</i></a>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['data'],
  methods: {
    editing () {
      this.$store.dispatch('showEditForm', this.data.id)
    },
    deleting () {
      this.$store.dispatch('deleting', this.data.id)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 400px;
  max-height: 400px;
  height: auto;
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
