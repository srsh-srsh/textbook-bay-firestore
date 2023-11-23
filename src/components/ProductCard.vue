<script setup>
defineProps({
  book: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="product-container">
    <RouterLink :to="{ name: 'book-details', params: { id: book.id } }">
      <div class="product-card">
        <h2>{{ book.id }}</h2>
        <span>First Type: {{ book.type1 }}, Second Type: {{ book.type2 }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.product-container {
  display: table;
  flex-wrap: wrap;
  gap: 16px;
}

.product-card {
  flex: 0 0 calc(50% - 16px); 
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
