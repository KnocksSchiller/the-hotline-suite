<template>
    <h2>{{ entry.title }}</h2>
    <span v-if="!mobile">
        <p>By: <i>{{ entry.author }}</i></p>
        <p>Released: <i>{{ entry.date }}</i></p>
    </span>
    <div v-else>
        <p>By: <i>{{ entry.author }}</i></p>
        <p>Released: <i>{{ entry.date }}</i></p>
    </div>
    <div class="imgGrid">
        <div>
            <img v-if="entry.images[0]" :src="entry.images[this.currentScreenshot]">
            <p v-else>This entry has no screenshots.</p>
        </div>
        <div class="screenshot-grid">
            <img v-for="(image, index) in entry.images" :src="image" :aria-selected="isCurrentImage(index)"
                @click=setCurrentImage(index)>
        </div>
    </div>
    <p v-for="e in entry.contents">{{ e }}</p>
    <span v-if="this.isDownload">
        <button @click="downloadFile(entry.link, entry.title)">Download</button>
        <i>{{ entry.title }}.zip ({{ entry.size }} MB)</i>
    </span>
</template>

<script>
import axios from 'axios'

export default {
    'name': "Entry",
    props: ['mobile', 'entry', 'isDownload'],
    data() {
        return {
            currentScreenshot: 0,
        }
    },
    created() {
        this.currentScreenshot = 0
    },
    methods: {
        isCurrentImage(index) {
            return index == this.currentScreenshot
        },
        setCurrentImage(index) {
            this.currentScreenshot = index
        },
        // taken from https://medium.com/@codesense/how-to-download-file-on-button-click-in-vue-or-nuxt-in-just-2-steps-a0a013b6bd8b
        async downloadFile(link, name) {
            try {
                const response = await axios.get(link, { responseType: 'blob' })

                const fileURL = window.URL.createObjectURL(response.data)
                const a = document.createElement('a')
                a.href = fileURL
                a.download = name + ".zip"
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                window.URL.revokeObjectURL(fileURL)
            }
            catch (error) {
                console.log("Download failed: ", error)
            }
        }
    }
}
</script>

<style scoped>
span>* {
    width: max-content;
}

span {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

span:last-of-type{
    justify-content: flex-start;
}

p {
    color: var(--lGreen);
}

.imgGrid {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-column-gap: 20px;
    margin: 20px 0 40px;
    align-items: start;
}

img[aria-selected=true] {
    border: 2px solid var(--lGreen);
    box-sizing: border-box;
}

img[aria-selected=false] {
    border: 2px solid var(--bg);
    box-sizing: border-box;
}

h2 {
    text-align: left;
}

i {
    margin-left: 8px;
}

/* mobile */
@media(max-width:768px) {
    h2 {
        margin-left: 10px;
    }

    .imgGrid {
        grid-template-columns: auto;
        grid-row-gap: 10px;
        width: 95%;
        margin: auto;
    }
}
</style>
