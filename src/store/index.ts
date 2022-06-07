import { StoreStateType } from '@/type/store'
import { createStore} from 'vuex'
import user from './modules/user'

const store = createStore<StoreStateType>({
    modules: {
        user
    }
})



export default store
