<template>
    <div class="site-content">
        <h1 class="animText retro">Hotline-Likes:</h1>
        <p>This page revolves all around games, that are <a class="animText">similar to Hotline Miami</a> and<a
                class="animText"> Hotline Miami 2: Wrong Number</a>. From the newest <a class="animText">AAA</a> titles
            down to the most <a class="animText">obscure </a>flash games, if the camera is from a top-down perspective
            and includes shooting, we probably covered it.</p>
        <p>We will cover them in terms of <a class="animText">quality</a>, the <a class="animText">similarities and
                differences</a> to Hotline Miami and <a class="animText">where you can play it</a>.</p>
        <SortedNavEntries :mobile="mobile" , :list="hlmLikes" />
    </div>
</template>

<script>
import Entry from '@/components/Entry.vue'
import hlmLikes from '@/assets/data/hlmLikes.json'
import FoldingText from '@/components/FoldingText.vue'
import texts from '@/assets/data/texts.json'
import SortedNavEntries from '@/components/SortedNavEntries.vue'

export default {
    components: { Entry, FoldingText, SortedNavEntries },
    data() {
        return {
            hlmLikes: hlmLikes,
            textsections: texts
        }
    },
    props: ['mobile'],
}
</script>