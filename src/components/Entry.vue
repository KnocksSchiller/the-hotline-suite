<template>
    <h2>{{ entry.title }}</h2>
    <span>
        <p>By: <i>{{ entry.author }}</i></p>
        <p>Released: <i>{{ entry.date }}</i></p>
    </span>
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
    <template v-if="this.isDownload">
        <button @click="downloadFile(entry.link, entry.title)">Download</button> <i>{{ entry.title }}.zip ({{ entry.size
        }} MB)</i>
    </template>
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

    @media(max-width:768px) {
        flex-direction: column;
        align-items: flex-start;
        margin: 0 10px;
    }
}

p {
    color: var(--lGreen);
}

.imgGrid {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-column-gap: 30px;
    margin: 20px 0 40px;

    @media(max-width:768px) {
        grid-template-columns: auto;
        grid-row-gap: 20px;
        width: 95%;
        margin: auto;
    }
}

/* .screenshot-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 15px;

    @media(max-width:768px) {
        grid-column-gap: 10px;
    }
} */

img[aria-selected=true] {
    border: 2px solid var(--lGreen);
}

img[aria-selected=false] {
    border: 2px solid black;
}

h2 {
    text-align: left;

    @media(max-width:768px) {
        margin-left: 10px;
    }
}

i {
    margin-left: 8px;
}
</style>
