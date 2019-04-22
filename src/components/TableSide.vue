<template>
    <div class="player-area">
        <Play></Play>
        <Hand></Hand>
    </div>
</template>

<script>
    import Hand from '../components/Hand'
    import Play from '../components/Play'

    export default {
        components: { Hand, Play, }
    }
</script>

<style scoped lang="scss">
    .player-area {
        background-color: blue;
        width: 100%;
        height: 200px;
        display: flex;
    }
</style>