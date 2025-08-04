<template>
    <div class="site-content">
        <h1 class="animText">Workshop Dives:</h1>
        <p>Have a closer look to the many noteworthy custom campaigns and levels throughout the years.</p>
        <p>You can find another overview at <a href="https://linktr.ee/hlm2.workshopdives
" target="_blank" class="animText">https://linktr.ee/hlm2.workshopdives</a>.</p>
        <h3 class="animText">{{ textsections[15].title }}</h3>
        <p>{{ textsections[15].content }}</p>
        <p>{{ textsections[15].extraContent[0] }}</p>
        <ul>
            <li v-for="l in textsections[15].listed">{{ l }}</li>
        </ul>
        <i>{{ textsections[15].extraContent[1] }}</i>
        <p>{{ textsections[15].extraContent[2] }}</p>
        <ChapterText v-for="dive in dives.slice().reverse()":mobile="mobile" :text="dive"/>
    </div>
</template>

<script>
import FoldingText from '@/components/FoldingText.vue'
import texts from '@/assets/data/texts.json'
import ChapterText from '@/components/ChapterText.vue'
import wDives from '@/assets/data/wDives.json'

export default {
    components: { FoldingText, ChapterText },
    data() {
        return {
            textsections: texts,
            dives: wDives
        }
    },
    props: ['mobile']
}
</script>

<style scoped>
ul,
ul>* {
    color: var(--lGreen);
}

ul>li {
    margin: 8px 30px;

}
</style>