export const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
export const OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL';
export const OPEN_LOADING_MODAL = 'OPEN_LOADING_MODAL';

export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL";
export const CLOSE_SETTINGS_MODAL = 'CLOSE_SETTINGS_MODAL';
export const CLOSE_LOADING_MODAL = 'CLOSE_LOADING_MODAL';

export const CLEAR_MODALS = "CLEAR_MODALS";

// Open actions
export const openPostModal = modal => {
    return {
        type: OPEN_POST_MODAL,
        modal
    }
}
export const openSettingsModal = modal => {
    return {
        type: OPEN_SETTINGS_MODAL,
        modal
    }
}
export const openLoadingModal = modal => {
    return {
        type: OPEN_LOADING_MODAL,
        modal
    }
}



// Close actions
export const closePostModal = () => ({
    type: CLOSE_POST_MODAL
})
export const closeSettingsModal = () => ({
    type: CLOSE_SETTINGS_MODAL
})
export const closeLoadingModal = () => ({
    type: CLOSE_LOADING_MODAL
})

// Clear actions
export const clearModals = () => ({
    type: CLEAR_MODALS
})