<template>
    <div class="player-area">
        <Play class="player-area__play"></Play>
        <Hand class="player-area__hand" :hand="player.hand"></Hand>
    </div>
</template>

<script>
    import Hand from '../components/Hand'
    import Play from '../components/Play'
    import { mapMutations } from "vuex";

    export default {
        components: { Hand, Play },
        props: ['player'],
        methods: {
            ...mapMutations([
                'setPlayer'
            ]),
            populateHand() {
                this.player.hand = [{title: "Test"}]
                this.$store.commit('setPlayer', this.player)
            }
        },
        mounted() {
            this.populateHand()
        }
    }
</script>

<style scoped lang="scss">
    .player-area {
        background-color: blue;
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;

        &__hand {
            display: flex;
            position: absolute;
            bottom: -80px;
            justify-content: center;
            width: 100%;
        }
    }
</style>
