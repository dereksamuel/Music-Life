<template lang="pug">
    #x
        img(src="https://www.gifsanimados.org/data/media/57/detective-imagen-animada-0016.gif" class="img")
        slot(name="body") danger
</template>

<style scoped>
.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 80px;
}
</style>
