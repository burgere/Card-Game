<template>
    <div>
        <div class="card">
            <div class="card__header">
                <div class="header__name">Borogos Orgon</div>
                <div class="header__cost">2</div>
            </div>
            <div class="card__image"></div>
            <div class="card__info-row">
                <div class="info-row__type">
                    Creature - Orc
                </div>
                <div class="info-row__set">
                    Ico
                </div>
            </div>
            <div class="card__body">
                <div class="body__ability">Draw 2 cards.</div>
                <div class="body__flavor-text">"Without a doubt, the ugliest orc I've ever seen"</div>
            </div>
            <div class="card__bottom-row">
                <div class="bottom-row__stats">2 / 2</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css?family=Crimson+Text");

    .card {
        border: solid 7px black;
        border-radius: 7px;
        height: 160px;
        width: 100px;
        cursor: pointer;
        padding: 5px;
        font-family: 'Crimson Text', serif;
        font-size: 6px;
        background-color: white;

        &__header {
            display: flex;
            justify-content: space-between;
            flex-direction: row;

            &__name {
            }

            &__cost {
            }
        }

        &__image {
            background-color: red;
            height: 70px;
            margin-top: 5px;
            background-image: url('../assets/orc.jpg');
            background-size: cover;
            background-position: center;
            border: 2px inset;
        }

        &__info-row {
            display: flex;
            justify-content: space-between;
        }

        &__body {

        }
    }
</style>