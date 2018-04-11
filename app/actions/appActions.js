import { APP_ACTION_TYPES } from '../constants/appActionTypes';

export function setTitle(title) {
    return {
        type: APP_ACTION_TYPES.setTitle,
        data: title
    };
}