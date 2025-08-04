<template>
    <h1 class="animText">WANTED!!!</h1>

    <p>{{ list.content }}</p>
    <nav>
        <ul>
            <li v-for="(l, i) in list.listed"><a>{{ l }}:</a> <i>{{ list.extraContent[i] }}</i></li>
        </ul>
    </nav>
</template>
<script>
export default {
    'name': "WantedList",
    props: ['mobile', 'list'],
}
</script>
<style scoped>
ul>li {
    margin: 8px 30px;
}

a,
ul>li {
    cursor: default;
    color: var(--lGreen);
}

nav {
    max-width: 100%;

    @media(max-width:768px) {
        max-height: 350px;
        overflow: auto;
    }
}
</style>