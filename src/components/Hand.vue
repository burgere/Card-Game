<template>
    <div class="hand"
         draggable="true"
         ref="handElement"
         v-on:dragstart="onCardDragged($event)"
    >
        <Card
                v-for="(card, index) in cards"
                :key="index"
                :id="index"
                :card="card"
                ref="card"
                class="hand__card"
                draggable="true"
        >
        </Card>
    </div>
</template>

<script>
    import Card from '../components/Card'

    export default {
        components: {
            Card,
        },
        data() {
            return {
                cards: [
                    {
                        title: 'Test'
                    },
                    {
                        title: 'Test Two'
                    },
                    {
                        title: 'Test Three'
                    },
                    {
                        title: 'Test Four'
                    },
                    {
                        title: 'Test Five'
                    },
                    {
                        title: 'Test Six'
                    },
                    {
                        title: 'Test Seven'
                    }
                ],
            }
        },
        methods: {
            onCardDragged(event) {
                let card = this.cards[event.target.id]
                event.dataTransfer.dropEffect = 'link'

                event.dataTransfer.setData('card', JSON.stringify(card))
                this.cards = this.cards.filter(currentCard => currentCard !== card)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .hand {
        &__card {

        }
    }
</style>