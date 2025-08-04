<template>
    <div>
        <router-link v-for="cat in categories" :to="cat.to">
            <img v-if="!mobile" :src="cat.icon">
            <p v-if="!mobile">{{ cat.description }}</p>
            <p v-else>{{ cat.descriptionMobile }}</p>
            <h3 :class="{ 'animText': mobile }">{{ cat.title }}</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['categories', 'mobile']
}
</script>

<style scoped>
div {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    width: max-content;
    margin: auto;

    @media(max-width:768px) {
        grid-template-columns: auto;
        grid-row-gap: 30px;
    }
}

a {
    width: 303px;
    height: 300px;
    background: linear-gradient(var(--bg), var(--bg), var(--bg), var(--green));
    transition: all .5s;
    flex-direction: column;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    z-index: 0;

    @media(max-width:768px) {
        height: 200px;
        background: linear-gradient(var(--bg), var(--green), var(--green), var(--green));
        flex-direction: column-reverse;
    }

}

h3 {
    transition: all .5s;
    text-shadow: 0px 4px var(--bg);
    margin: 1em auto;

    @media (max-width: 768px) {
        color: var(--lGreen);
        text-shadow: 4px 4px var(--red);
    }
}

p {
    transition: opacity .5s;
    opacity: 0;
    text-shadow: 4px 4px var(--bg);
    margin: 0;

    @media(max-width: 768px) {
        opacity: 1;
    }
}

a:hover {
    background: linear-gradient(var(--bg), var(--green), var(--green), var(--green));
}

a:hover p {
    opacity: 1;
}

a:hover h3 {
    color: var(--lGreen);
    text-shadow: 4px 4px var(--red);
    transform: translateY(-225px);
}

img {
    opacity: 1;
    transition: opacity .5s ease;
    position: relative;
    top: 179px;
    z-index: -1;
}

a:hover img {
    opacity: 0;
}
</style>
