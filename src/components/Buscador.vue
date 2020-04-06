<template lang="pug">
    #todo(@keyup.enter="search")
        Loader(v-show="isLoading")
        header(v-show="!isLoading")
            nav.nav
                b-input-group(class="mt-3").shadowInput
                    template(v-slot:prepend)
                        b-button(variant="danger")
                            img(src="../assets/clear-white-18dp.svg")
                    template(v-slot:append)
                        b-button(variant="primary" @click="search")
                            img(src="../assets/search-white-18dp.svg")
                    b-form-input(v-model="BuscadorJQRY" type="text" placeholder="Buscar canción")
            .countainer
                p(v-if="lenghtSearchResult" :class="isBad ?'dangerus' :'green'")#findLenght {{ lenghtSearch }}
                .countList
                        ul(align="left" class="ulOrder" style="list-style: none; width: 319px; padding: 15px;", v-for="m in musicList", v-if="m && m.album")
                            TrackCard(
                                :track="m"
                                @select="setSelectedTrack"
                                :class="{'greenTrack': m.id === selectedTrack}"
                                )
        #space(v-show="!isLoading")
        AnimationNotFound(v-show="isBad" v-if="!isLoading")
            p(slot="body") Lo sentimos no pudimos encontrar su busqueda
        #space
</template>

<script>
import trackServices from "../services/track.js";
import TrackCard from "../components/Track";
import Loader from "../shared/Loader";
import AnimationNotFound from "../../src/shared/Animation";

const musicListener = [
  { name: "Cómo duele", artist: "Ricardo Arjona" },
  { name: "Me soltaste", artist: "Jesse & Joy" },
  { name: "Monkey", artist: "Toons and I" }
];

export default {
  name: "Buscador",

  components: { TrackCard, Loader, AnimationNotFound },

  data() {
    return {
      BuscadorJQRY: "",
      musicList: [],
      lenghtSearchResult: false,
      isLoading: false,
      selectedTrack: "",
      isBad: false
    };
  },

  computed: {
    lenghtSearch() {
      return `Encontrados: ${this.musicList.length}`;
    }
  },

  watch: {
    isBad() {
      if (this.isBad) {
        setTimeout(() => {
          this.isBad = false;
        }, 5000);
      }
    }
  },

  methods: {
    search() {
      this.lenghtSearchResult = true;
      this.musicList = musicListener;
      if (!this.BuscadorJQRY) {
        this.lenghtSearchResult = false;
        return console.log("No hemos podido encontrar su búsqueda");
      }
      this.isLoading = true;
      trackServices.search(this.BuscadorJQRY).then(res => {
        this.isBad = res.tracks.total === 0;
        this.musicList = res.tracks.items;
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style scoped>
.green {
  background: #99e097;
}

.dangerus {
  background: #ee192e;
  color: white;
}

#green {
  background: green;
}
.shadowInput {
  box-shadow: 2px 2px 110px;
}

#findLenght {
  font-size: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 157px;
  padding: 0;
}

.listOrder {
  display: block;
  margin-right: auto;
  padding: 33px;
  margin-left: auto;
}

.ulOrder {
  list-style: none;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 436px;
  padding: 20px;
}
.greenTrack {
  border: 2px solid greenyellow;
  box-shadow: 12px 20px 50px black;
}

#space {
  height: 100px;
}
</style>
