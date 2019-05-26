<template>
    <div id="app">
        <TableSide class="top-board"/>
        <TableSide class="bottom-board"/>
    </div>
</template>

<script>
    import TableSide from "./components/TableSide";

    export default {
        name: 'app',
        components: {
            TableSide
        }
    }
</script>

<style lang="scss">
    body {
        height: 100vh;
        margin: 0;
        overflow: hidden;

        #app {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;

            .top-board {
                .player-area {
                    &__hand {
                        top: -15px;

                        .hand {
                            &__card {
                                transform: none;
                            }
                        }
                    }
                }
            }

            .bottom-board {
                .hand {
                    &__card {
                        transition: all 0.2s ease-in-out;

                        &:hover {
                            transform: scale(2) translateY(-80px);
                        }
                    }
                }
            }
        }
    }
</style>
