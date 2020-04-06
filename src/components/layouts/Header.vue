<template lang="pug">
    #Hello
        footer.footer
            img(src='../../../public/Sin título.png' style="width: 60px; height: 60px; left: 7px; top: -2px; position: absolute;")
            h1
                router-link(to="/").titleDecoration Music Life
            p Las mejores canciones solo para tí
              br
              router-Link(to="about" style="text-decoration: none;") || Acerca de
        .footer2(v-if="Player = true")
          Player
</template>

<script>
import Player from "../Player";
export default {
  components: { Player }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap");
.footer {
  height: 126px;
  width: 100%;
  background-image: linear-gradient(120deg, #94545c 0%, #fd746c 100%);
  padding: 15px;
  color: white;
}

.footer2 {
  height: auto;
  width: 100%;
  background: #d53342;
  padding: 15px;
  color: white;
}

h1 {
  font-family: "Pacifico", cursive;
}

.titleDecoration {
    text-decoration: none;
    color: white;
}

.titleDecoration:hover {
    color: beige;
}
</style>
