import { markRaw, reactive } from "vue";
import genKey from "./genKey";

class Modal {
    constructor(component, data = {}) {
        this.component = component;
        this.data = data;
    }
}

const modals = reactive({
    modals: reactive([]),
    push(component, data = {}) {
        if (!data.key) {
            data.key = genKey();
        }
        modals.modals.push(reactive(new Modal(markRaw(component), data)));
        document.body.classList.add("overflow-y-hidden");

        return data.key;
    },
    pop(amount = 1) {
        for (let i = 0; i < amount; i += 1) {
            modals.modals.pop();
        }
        if (modals.modals.length === 0) {
            document.body.classList.remove("overflow-y-hidden");
        }
    },
    clear() {
        modals.modals = reactive([]);
    },
    findByKey(key) {
        return modals.modals.find((item) => item.data.key === key);
    },
    get current() {
        return modals.modals[modals.modals.length - 1];
    },
    get all() {
        return modals.modals;
    },
});

export default modals;

export const ModalsPlugin = {
    install: (app) => {
        app.config.globalProperties.$modals = modals;
    },
};

export const { push, pop, clear } = modals;
export const current = () => modals.current;
export const all = () => modals.all;
