<template>
    <div v-if="theBook" class="book-details">
      <h1>{{ theBook.id }}</h1>
      <div class="book-info">
        <img :src="theBook.image_url" alt="Book Image" class="book-image" />
        <div class="details">
          <p>
            <strong>First Type:</strong> {{ theBook.type1 }}
            <strong>Second Type:</strong> {{ theBook.type2 }}
          </p>
          <p>
            <strong>Japanese Name:</strong> {{ theBook.japanese_name }}
            <strong>Evolution Data:</strong> {{ theBook.evolution }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import BookService from '@/services/BookService.js'
  
  const theBook = ref(null)
  
  const props = defineProps({
      id: { required: true }
  })
  
  onMounted(() => {
      BookService.getBook(props.id)
      .then((response)=>{
          theBook.value = response.data
      })
      .catch((error)=>{
          console.log(error)
      })
  })
  </script>
  
  <style scoped>
  .book-details {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .book-info {
    display: flex;
    align-items: center;
  }
  
  .book-image {
    max-width: 200px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .details {
    flex-grow: 1;
  }
  </style>
  