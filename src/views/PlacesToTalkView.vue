<template>
    <div class="site-content">
        <h1 class="animText">Places To Talk:</h1>
        <article>
            <p>On this page, we go through the common places to meet other modders and people, who are
                interested in the scene. Each one varies from size, focus on the scene and which language is mainly
                spoken.</p>
            <p>If you know of one more place, that modders should check out, feel free to send us a message, and we'll
                see where we can categorize the place.</p>
        </article>
        <ChapterText v-for="place in sortedPlaces" :mobile="mobile" :text="place" :linktext="linktext"/>
    </div>
</template>

<script>
import talkPlaces from '@/assets/data/places.json'
import ChapterText from '@/components/ChapterText.vue'

export default {
    components: { ChapterText },
    data() {
        return {
            places: talkPlaces,
            linktext: "Take a look..."
        }
    },
    props: ['mobile'],
    computed: {
        sortedPlaces() {
            return this.places
        }
    }
}
</script>