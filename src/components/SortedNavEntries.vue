<template>
    <nav>
        <ul>
            <li v-for="entry in sortedEntries" @click="setCurrentEntry(entry.id)" :aria-selected="isSelected(entry.id)">
                <a>{{ entry.title }}</a>
            </li>
        </ul>
    </nav>
    <button @click="randomizeCurrentEntry()">Randomize</button>
    <Entry :isDownload="isDownload" :mobile="mobile" :entry="list[this.currentEntry]" />
</template>

<script>
import Entry from '@/components/Entry.vue'

export default {
    "name": "SortedNavEntries",
    components: { Entry },
    data() {
        return {
            currentEntry: 0,
        }
    },
    props: ['mobile', 'list', 'isDownload'],
    created() {
        this.randomizeCurrentEntry()
    },
    methods: {
        randomizeCurrentEntry() {
            this.currentEntry = Math.floor(Math.random() * this.list.length)
        },
        setCurrentEntry(id) {
            this.currentEntry = id
        },
        isSelected(id) {
            return id == this.currentEntry
        }
    },
    computed: {
        sortedEntries() {
            // taken from ChatGPT like a fucking loser :)))
            return this.list.slice().sort((a, b) => a.title.localeCompare(b.title))
        }
    }
}
</script>

<style scoped>
nav {
    max-height: 300px;
    overflow: auto;
}

li[aria-selected=true],
li[aria-selected=true] a {
    color: var(--lGreen);
}
</style>