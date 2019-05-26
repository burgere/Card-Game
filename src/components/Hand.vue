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
