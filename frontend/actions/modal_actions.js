export const OPEN_POST_MODAL = 'OPEN_POST_MODAL';
export const OPEN_SETTINGS_MODAL = 'OPEN_SETTINGS_MODAL';

export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL"
export const CLOSE_SETTINGS_MODAL = 'CLOSE_MODAL';

export const CLEAR_MODALS = "CLEAR_MODALS"

export const openPostModal = modal => {
    return {
        type: OPEN_POST_MODAL,
        modal
    }
}
export const openSettingsModal = modal => {
    // console.log(modal)
    return {
        type: OPEN_SETTINGS_MODAL,
        modal
    }
}

export const closePostModal = () => ({
    type: CLOSE_POST_MODAL
})
export const closeSettingsModal = () => ({
    type: CLOSE_SETTINGS_MODAL
})
export const clearModals = () => ({
    type: CLEAR_MODALS
})

window.openSettingsModal=openSettingsModal;