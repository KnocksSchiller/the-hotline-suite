<template>
    <div class="site-content">
        <h1 class="animText">Getting Started:</h1>
        <article>
            <p> This page teaches you about the ins and outs of <a class="animText">Hotline Miami 2 modding</a> and
                mainly revolves around <a class="animText">Hotline Miami 2's Level Editor</a> and the workshop around
                it.</p>
            <p>For <a class="animText">making standalone mods</a> within GameMaker Studio, see <router-link :to="CatHlm1.to"
                    class="animText underline">{{ CatHlm1.title }}</router-link>.
            </p>
            <p>The following chapters go as followed:</p>
        </article>
        <nav>
            <ol>
                <li><a href="#how-to-play-custom-levels">{{ textsections[2].title }}</a></li>
                <li><a href="#how-to-make-custom-content">{{ textsections[3].title }}</a>
                    <ul>
                        <li><a href="#the-level-editor">{{ textsections[4].title }}</a></li>
                        <li><a href="#cutscenes">{{ textsections[5].title }}</a></li>
                        <li><a href="#making-sprites">{{ textsections[6].title }}</a></li>
                    </ul>
                </li>
                <li><a href="#tutorials-and-guides">{{ textsections[7].title }}</a></li>
                <li><a href="#advanced-tools-and-guides">{{ textsections[8].title }}</a></li>
                <li><a href="#i-want-more">{{ textsections[9].title }}</a></li>
            </ol>
        </nav>
        <FoldingText id="how-to-play-custom-levels" :mobile="mobile" :text="textsections[2]" />
        <details id="how-to-make-custom-content" open>
            <summary>
                {{ textsections[3].title }}
            </summary>
            <p>{{ textsections[3].content }}</p>
            <FoldingText id="the-level-editor" :mobile="mobile" :text="textsections[4]" />
            <FoldingText id="cutscenes" :mobile="mobile" :text="textsections[5]" />
            <FoldingText id="making-sprites" :mobile="mobile" :text="textsections[6]" />
        </details>
        <FoldingText id="tutorials-and-guides" :mobile="mobile" :text="textsections[7]" />
        <FoldingText id="advanced-tools-and-guides" :mobile="mobile" :text="textsections[8]" />
        <FoldingText id="i-want-more" :mobile="mobile" :text="textsections[9]" />
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