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
p,
ul>li {
    margin-left: 30px;
    color: var(--lGreen);
    cursor: default;

    @media(max-width:768px) {
        margin-left: 0px;
    }
}

ul {
    margin-left: 30px;
}
</style>