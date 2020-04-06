<template lang="pug">
    #CountainerGlobal
        b-card-group(deck)
            b-card(bg-variant="danger" text-variant="white" class="text-center")
                template(v-slot:header)
                    h6(class="mb-0") {{ track.name.toUpperCase() }}
                img(:src="track.album.images[1].url" img-alt="Card image" img-top style="width: 100%;")
                template(v-slot:footer)
                    em Artista: {{ track.artists[0].name }}
                    p.parr Duración: {{ track.duration_ms }}
                    img(
                        src="../../public/play_circle_outline-white-18dp.svg"
                        @click="selectTrack"
                    ).holl
                    span(@click="goToCard(track.id)").holl 🌏
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },

  methods: {
    selectTrack() {
      this.$emit("select", this.track.id);
      this.$bus.$emit("set-track", this.track);
    },

    goToCard(id) {
        this.$router.push({ name: 'track', params: { id } });
    }
  }
};
</script>

<style scoped>
.card-body {
  padding: 0;
}

.parr {
  color: rgb(38, 199, 73);
}

#CountainerGlobal {
  margin: 0 0 0;
}

.holl {
    padding: 4px;
}

.holl:hover {
  cursor: pointer;
}
</style>
