<template>
    <div
            class="play"
            v-on:dragover="handleDragOverEvent($event)"
            v-on:drop="cardDropped($event)"
            v-on:dragleave="hideBorder($event)"
            v-on:dragenter="cardDraggedOver($event)"
    >
        <Card
                v-for="(card, index) in cards"
                :key="index"
                :id="index"
                :card="card"
        >
        </Card>

    </div>
</template>

<script>
    import Card from '../components/Card'

    export default {
        components: { Card },
        data() {
            return {
                cards: []
            }
        },
        methods: {
            cardDraggedOver(event) {
                this.showBorder(event)
            },
            cardDropped(event) {
                this.hideBorder(event)

                let cardString = event.dataTransfer.getData('card')
                this.cards.push(JSON.parse(cardString))
            },
            handleDragOverEvent(event) {
                event.preventDefault()
            },
            showBorder(event) {
                event.target.style.border = "5px solid red"
            },
            hideBorder(event) {
                event.target.style.borderStyle = "none"
            }
        }
    }
</script>

<style scoped lang="scss">
    .play {
        width: 100%;
        background-color: green;
        height: 60%;
        display: flex;
        justify-content: center;
        transition: border 0.5s;
    }
</style>
