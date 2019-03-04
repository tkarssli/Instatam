export const RECEIVE_SCROLL = 'RECEIVE_SCROLL';
export const CLEAR_SCROLL = 'CLEAR_SCROLL';

export const receiveScroll = scroll => ({
    type: RECEIVE_SCROLL,
    scroll
})

export const clearScroll = () => ({
    type: CLEAR_SCROLL
})