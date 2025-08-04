<template>
    <h2 class="animText">{{ text.title }}</h2>
    <p>{{ text.content }}</p>
    <p v-for="e in text.extraContent">{{ e }}</p>
    <div class="screenshot-flex"> <img v-for="i in text.images" :src="i" />
    </div>
    <a v-if="text.link" :href="text.link" target="_blank" class="animText">See the full collection</a>
</template>

<script>
export default {
    'name': "ChapterText",
    'props': ['text', 'mobile'],
}
</script>

<style scoped>
h2 {
    font-family: "Retro-Computer";
}

a {
    @media(max-width: 768px) {
        padding: 0 10px;
    }
}

.screenshot-flex {
    display: flex;
    overflow: auto;
    gap: 15px;
    margin-bottom: 1.5em;
}

.screenshot-flex img {
    min-width: 33%;

    @media(max-width: 768px) {
        min-width: 90%;
    }
}
</style>