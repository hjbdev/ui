import { reactive } from "vue";
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
        this.modals.push(reactive(new Modal(component, data)));
        document.body.classList.add("overflow-y-hidden");

        return data.key;
    },
    pop(amount = 1) {
        for (let i = 0; i < amount; i += 1) {
            this.modals.pop();
        }
        if (this.modals.length === 0) {
            document.body.classList.remove("overflow-y-hidden");
        }
    },
    clear() {
        this.modals = reactive([]);
    },
    findByKey(key) {
        return this.modals.find((item) => item.data.key === key);
    },
    get current() {
        return this.modals[this.modals.length - 1];
    },
    get all() {
        return this.modals;
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
