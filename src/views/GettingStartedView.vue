<template>
    <div class="site-content">
        <h1 class="animText">Getting Started:</h1>
        <p class="readable"> This page teaches you about the ins and outs of <a class="animText">Hotline Miami 2
                modding</a> and mainly revolves around <a class="animText">Hotline Miami 2's Level Editor</a> and the
            workshop around it.</p>
        <p class="readable">For <a class="animText">making standablone mods</a>, see
            <router-link :to="CatHlm1.to" class="animText underline">{{ CatHlm1.title }}</router-link>.
        </p>
        <p class="readable">The following chapters of this page go as followed:</p>
        <nav>
            <ol>
                <li><a href="#chapter1">{{ textsections[2].title }}</a></li>
                <li><a href="#chapter2">{{ textsections[3].title }}</a>
                    <ul>
                        <li><a href="#chapter2-1">{{ textsections[4].title }}</a></li>
                        <li><a href="#chapter2-2">{{ textsections[5].title }}</a></li>
                        <li><a href="#chapter2-3">{{ textsections[6].title }}</a></li>
                    </ul>
                </li>
                <li><a href="#chapter3">{{ textsections[7].title }}</a></li>
                <li><a href="#chapter4">{{ textsections[8].title }}</a></li>
                <li><a href="#chapter5">{{ textsections[9].title }}</a></li>
            </ol>
        </nav>
        <FoldingText id="chapter1" :mobile="mobile" :text="textsections[2]" />
        <details id="chapter2" open>
            <summary>
                {{ textsections[3].title }}
            </summary>
            <p>{{ textsections[3].content }}</p>
            <FoldingText id="chapter2-1" :mobile="mobile" :text="textsections[4]" />
            <FoldingText id="chapter2-2" :mobile="mobile" :text="textsections[5]" />
            <FoldingText id="chapter2-3" :mobile="mobile" :text="textsections[6]" />
        </details>
        <FoldingText id="chapter3" :mobile="mobile" :text="textsections[7]" />
        <FoldingText id="chapter4" :mobile="mobile" :text="textsections[8]" />
        <FoldingText id="chapter5" :mobile="mobile" :text="textsections[9]" />
    </div>
</template>

<script>
import FoldingText from '@/components/FoldingText.vue'
import texts from '@/assets/data/texts.json'
import categories from '@/assets/data/categories.json'
export default {

    components: { FoldingText },
    data() {
        return {
            textsections: texts,
            categories: categories
        }
    },
    props: ['mobile'],
    computed: {
        CatHlm1() {
            return this.categories[1]
        }
    }
}
</script>

<style scoped>
p {
    margin-left: 8px;
}
</style>