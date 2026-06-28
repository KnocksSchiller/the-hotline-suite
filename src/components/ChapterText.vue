<template>
    <h2 class="animText">{{ text.title }}</h2>
    <article>
        <p v-for="c in text.contents">{{ c }}</p>
    </article>
    <div>
        <img v-for="i in text.images" :src="i" />
    </div>
    <a v-if="text.link" :href="text.link" target="_blank" class="animText underline">{{ linktext }}</a>
</template>

<script>
export default {
    'name': "ChapterText",
    'props': ['text', 'mobile', 'linktext'],
}
</script>

<style scoped>
h2 {
    font-family: "Retro-Computer";
}

div {
    display: flex;
    overflow: auto;
    gap: 15px;
    margin-bottom: 1.5em;
    align-items: start;
}

div img {
    min-width: 33%;
}

/* mobile view */
@media(max-width: 768px) {
    div img {
        min-width: 90%;
    }

    a {
        padding: 0 10px;
    }
}
</style>