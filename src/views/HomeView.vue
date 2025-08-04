<template>
  <div class="site-content">
    <img alt="Hotline Suite logo" src="@/assets/icons/logo-placeholder2.png">
    <Category :mobile="mobile" :categories="categories" />
    <FoldingText :mobile="mobile" :text="textsections[0]" open />
    <FoldingText :mobile="mobile" :text="textsections[1]" />
  </div>
</template>

<script>
import Category from '@/components/Category.vue'
import CatData from '@/assets/data/categories.json'
import FoldingText from '@/components/FoldingText.vue'
import texts from '@/assets/data/texts.json'

export default {
  name: 'HomeView',
  components: {
    Category, FoldingText
  },
  data() {
    return {
      categories: CatData,
      textsections: texts
    }
  },
  props: ['mobile']
}
</script>

<style scoped>
img {
  display: block;
  margin: auto;
  max-height: 500px;
}
</style>
