import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        players: {
            'testOne': {
                name: 'testOne',
                hand: []
            },
            testTwo: {
                name: 'testTwo',
                hand: []
            }
        }
    },
    mutations: {
        setPlayer(state, player) {
            state[player.name] = player
        }
    }
})

export default store