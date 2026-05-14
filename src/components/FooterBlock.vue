<template>
  <footer>
    <article>
      <p><a class="animText">Made by:</a> Knocks Schiller and <a class="animText underline" target="_blank"
          href="https://github.com/KnocksSchiller/the-hotline-suite/wiki/The-Fellow-Contributors">the fellow
          contributors</a>.</p>
      <p><a class="animText"> Runs with:</a> Vue.JS, hosted on AWS.</p>
      <p><a class="animText">Email:</a> knocks.schiller @ tutanota.com <br>OR write a Discord message to
        knocksschiller
      </p>
      <p><a class="animText">Fonts used:</a> Retro Computer by Petyka, Justice by Iconian Fonts, Winter Prime by
        Khurasan, Shogun's Clan by Christopher Hansen and Atkinson-Hyperlegible-Bold by Braille Institute of America,
        Inc.</p>
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

article a {
  font-family: "Retro-Computer";
  font-size: 20px;
}

@media(max-width:768px) {
  article a {
    font-size: 16px;
  }
}
</style>
