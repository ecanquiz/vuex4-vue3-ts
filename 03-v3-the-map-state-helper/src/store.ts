import { createStore } from 'vuex'
import { State } from './interfaces'

export default createStore<State>({
  state: {
    count: 0
  }
});
