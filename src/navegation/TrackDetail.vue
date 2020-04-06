<template lang="pug">
    .Todo
        h1 Detalle de la canción
        Error(v-if="isLoading")
            p(slot="body") Lo sentimos no pudimos encontrar su busqueda
        .countainer
            ml-track(:track="track" v-show="track && track.album")
            p {{ track.name }}
</template>

<script>
import trackServices from "../services/track";
import MlTrack from "../components/Track.vue";
import Error from "../shared/Animation";

export default {
    components: { MlTrack, Error },

    data() {
        return {
            track: {},
            isLoading: false
        }
    },

    created() {
        const id = this.$route.params.id

        trackServices.getById(id)
            .then(res => {
                console.log(res)
        })
            .catch(res => {
                this.isLoading = true
                console.log(res)
            })
    }
}
</script>

<style scoped>
    .countainer {
        width: 45px;
        height: 45px
    }

    .Todo {
        margin-top: 15%;
    }
</style>