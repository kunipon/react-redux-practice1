import _ from 'lodash'
import {READ_EVENTS} from '../actions'

export default (events={}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        // case DECREMENT:
        //     return {value: state.value - 1}
        default:
            return events
    }
}