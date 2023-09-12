import { computed, reactive } from 'vue';
import Dialog from './models/Dialog';

const dialogs = reactive({
    dialog: null,
    info(title, subtitle) {
        return dialogs.create('info', { title, subtitle });
    },
    confirm(title, subtitle) {
        return dialogs.create('confirm', { title, subtitle });
    },
    reset() {
        dialogs.dialog = null;
    },
    create(type, data) {
        return new Promise((resolve) => {
            dialogs.dialog = new Dialog(type, data, resolve);
        });
    },
});

export default dialogs;

// If the naming is an issue:
// import { info as infoDialog } from './Dialogs';
export const { info, confirm, reset } = dialogs;
export const current = computed(() => dialogs.dialog);
