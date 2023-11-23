<template>
  <div class="products">
    <ProductCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      class="product-card"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import BookService from '@/services/BookService.js'

const books = ref(null)

onMounted(() => {
  BookService.getBooks()
    .then((response) => {
      books.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: calc(48% - 10px);
  margin-bottom: 20px;
  box-sizing: border-box; 
}

</style>
