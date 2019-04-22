<template>
    <draggable class="hand">
        <Card id="one" class="hand__card"></Card>
        <Card id="two" class="hand__card"></Card>
        <Card id="three" class="hand__card"></Card>
    </draggable>
</template>

<script>
    import Card from '../components/Card'
    import Draggable from 'vuedraggable'

    export default {
        components: {
            Card,
            Draggable
        },
    }
</script>

<style scoped lang="scss">
    .hand {
        display: flex;
        position: fixed;
        bottom: -80px;
        justify-content: center;
        width: 100%;

        &__card {
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(2) translateY(-80px);
            }
        }
    }
</style>
