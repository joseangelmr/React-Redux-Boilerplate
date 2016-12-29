import {
    HOME_ACTION,
} from './constants';

export function homeAction() {
    return {
        type: HOME_ACTION,
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case HOME_ACTION:
            return {
                ...state,
            };

        default:
            return state;
    }
}
