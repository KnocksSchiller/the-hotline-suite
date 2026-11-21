<template>
    <div class="site-content">
        <h1 class="animText">HLM1-Modding:</h1>
        <article>
            <p>This page covers all the necessary information for <a class="animText">modding Hotline Miami 1</a> and
                creating standalone mods or even fully fletched games using <a class="animText">Hotline Miami's source
                    code</a> as a basis. </p>
            <p>Next to the challenges that come with modding Hotline Miami 2 like making sprites, designing levels and
                writing stories, HLM1-modding gets more complex by letting you <a class="animText">program whole new
                    concepts</a>. That way, it's overall harder to learn but therefore <a class="animText">more flexible</a> than
                working around the restrictions of Hotline Miami 2's level editor.</p>
            <p> For making <a class="animText">Hotline Miami 2 mods</a> within the level editor, see <router-link
                    :to="CatGetStarted.to" class="animText underline">{{ CatGetStarted.title }}</router-link>.</p>
            <p>The following chapters go as followed:</p>
        </article>
        <nav>
            <ol>
                <li><a href="#setting-up-gms">{{ textsections[16].title }}</a></li>
                <li><a href="#knowing-your-tools">{{ textsections[17].title }}</a></li>
                <li><a href="#modding-hlm1">{{ textsections[18].title }}</a></li>
            </ol>
        </nav>
        <FoldingText id="setting-up-gms" :mobile="mobile" :text="textsections[16]" open/>
        <FoldingText id="knowing-your-tools" :mobile="mobile" :text="textsections[17]" />
        <FoldingText id="modding-hlm1" :mobile="mobile" :text="textsections[18]" />
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
        CatGetStarted() {
            return this.categories[0]
        }
    }
}
</script>
