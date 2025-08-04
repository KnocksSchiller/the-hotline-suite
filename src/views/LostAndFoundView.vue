<template>
    <div class="site-content">
        <h1 class="animText retro">Lost & Found:</h1>
        <p>Take a look at our archive of custom levels and campaigns, that couldn't pass the test of time, but were
            lucky
            enough to be preserved by our dear community members, who sent the files our way.
        </p>
        <p><a class="animText">Warning!</a> Some of the content may come over as insensitive depending on the person you
            ask. The archive also does <a class="animText">NOT</a> gurantee, that each and every entry is of great
            quality. We do not stand by the messages of any of the archive's entries and save them solely for
            preservation purposes.
        </p>
        <SortedNavEntries :mobile="mobile" , :list="lfentries" />
        <FoldingText v-for="text in sortedLfFaq" :mobile="mobile" :text="text" />
        <WantedList :mobile="mobile" :list="textsections[14]" />
    </div>
</template>

<script>
import Entry from '@/components/Entry.vue'
import lfentries from '@/assets/data/lfEntries.json'
import FoldingText from '@/components/FoldingText.vue'
import texts from '@/assets/data/texts.json'
import WantedList from '@/components/WantedList.vue'
import SortedNavEntries from '@/components/SortedNavEntries.vue'

export default {
    components: { Entry, FoldingText, WantedList, SortedNavEntries },
    data() {
        return {
            lfentries: lfentries,
            textsections: texts
        }
    },
    props: ['mobile'],
    computed: {
        sortedLfFaq() {
            return this.textsections.slice(10, 14)
        }
    }
}
</script>
