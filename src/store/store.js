import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        player: {
            hand: []
        },
        opponent: {
            hand: []
        }
    },
    mutations: {
        addToPlayerHand(state, card) {
            state.player.hand = [...state.player.hand, card]
        },
        addToOpponentHand(state, card) {
            state.opponent.hand = [...state.opponent.hand, card]
        }
    }
})

export default store