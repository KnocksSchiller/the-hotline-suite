<template>
    <h1 class="animText">WANTED!!!</h1>
    <article>
        <p>{{ list.content }}</p>
    </article>
    <nav>
        <article>
            <ul>
                <li v-for="(l, i) in list.listed"><a>{{ l }}:</a> <i>{{ list.extraContent[i] }}</i></li>
            </ul>
        </article>
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
}

/* special rule for wanted list for style */
article a {
    font-family: "Retro-Computer";
    font-size: 20px;
}

@media(max-width:768px) {
    nav {
        max-height: 350px;
        overflow: auto;
    }

    article a {
        font-size: 16px;
    }

    nav article {
        padding: 0;
    }
}
</style>