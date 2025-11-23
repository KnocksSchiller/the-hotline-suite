<template>
  <footer>
    <article>
      <p><a class="animText">Made by:</a> Knocks Schiller and <a class="animText underline" target="_blank" href="https://github.com/KnocksSchiller/the-hotline-suite/wiki/The-Fellow-Contributors">the fellow contributors.</a> <br><a
          class="animText"> Runs with:</a> Vue.js, Hosted on AWS.</p>
      <p><a class="animText">Email:</a> knocks.schiller @ tutanota.com <br>(or write a Discord message to
        knocksschiller)
      </p>
      <p><a class="animText">Fonts used:</a> Retro Computer by Petyka, Justice by Iconian Fonts, Winter Prime by Khurasan and Shogun's Clan by Christopher Hansen</p>
    </article>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock',
  props: {

  }
}
</script>

<style scoped>
footer {
  display: block;
  background: var(--dGreen);
  width: 100%;
}

article {
  max-width: 1366px;
  margin: auto;
  padding: 4px 10px;
}
</style>
