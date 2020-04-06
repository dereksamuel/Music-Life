<template lang="pug">
    #PlayererdMyApp(v-if="track && track.album")
        img(:src="track.album.images[0].url")#discImg
        #redondito
        p {{ track.name }} [{{ track.duration_ms }}]
        p
            audio(controls :src="track.preview_url")
</template>

<script>
export default {
  data() {
    return {
      track: {}
    };
  },

  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  }
};
</script>

<style scoped>
#pretendiente {
  width: 46px;
  height: 38px;
  color: white;
  background: #ff5e00;
  padding: 5px;
}

#pretendiente:hover {
  cursor: pointer;
}

#playerEver {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  width: 339px;
}

#discImg {
  border-radius: 50%;
  width: 147px;
}

#redondito {
  width: 45px;
  height: 45px;
  background: #d53342;
}
</style>
