<template>
    <details>
        <summary>{{ text.title }}</summary>
        <p>{{ text.content }}</p>
        <ul v-if="text.listed">
            <li v-for="l in text.listed">{{ l }}</li>
        </ul>
        <template v-for="(c, i) in text.extraContent">
            <img v-if="text.images" :src="text.images[i]">
            <p v-if="c">{{ c }}</p>
        </template>
    </details>
</template>

<script>
export default {
    'name': "FoldingText",
    'props': ['text', 'mobile'],
}

</script>

<style scoped>
li {
    color: var(--lGreen);
}
</style>