import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { VNodeProps } from 'vue';

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_11<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_12<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_13<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_14<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_15<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_16<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_17<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_18<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_19<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_20<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_21<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_22<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_23<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_24<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_25<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_26<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_27<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_6<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_7<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_8<T, S> = T & (new () => {
    $slots: S;
});

declare type __VLS_WithTemplateSlots_9<T, S> = T & (new () => {
    $slots: S;
});

export declare const AlertAction: DefineComponent<    {}, {
as: string | Function | Record<string, any>;
$props: {
readonly as?: string | Function | Record<string, any>;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const all: any;

export declare function allModals(): any;

export declare const AutocompleteInput: __VLS_WithTemplateSlots_18<DefineComponent<    {}, {
$emit: (event: "update:modelValue" | "update:query", ...args: any[]) => void;
name: string;
id: string;
multiple: boolean;
appearance: string;
align: string;
query: string;
label?: string;
helpText?: string;
error?: string;
options?: unknown[];
modelValue?: Record<string, any> | unknown[];
defaultText?: string;
displayValue?: Function;
$props: {
readonly name?: string;
readonly id?: string;
readonly multiple?: boolean;
readonly appearance?: string;
readonly align?: string;
readonly query?: string;
readonly label?: string;
readonly helpText?: string;
readonly error?: string;
readonly options?: unknown[];
readonly modelValue?: Record<string, any> | unknown[];
readonly defaultText?: string;
readonly displayValue?: Function;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    "listbox-title"?(_: {}): any;
}>;

export declare const BaseButton: __VLS_WithTemplateSlots_8<DefineComponent<    {}, {
as: string | Record<string, any>;
size: string;
$props: {
readonly as?: string | Record<string, any>;
readonly size?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const BreadcrumbItem: __VLS_WithTemplateSlots_26<DefineComponent<    {}, {
as: string | Record<string, any>;
$props: {
readonly as?: string | Record<string, any>;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const Breadcrumbs: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const Card: __VLS_WithTemplateSlots_9<DefineComponent<    {}, {
flush: boolean;
footerJustify: string;
$props: {
readonly flush?: boolean;
readonly footerJustify?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    header?(_: {}): any;
    extra?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;

export declare const CardTitle: __VLS_WithTemplateSlots_10<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const clearModals: any;

export declare const CollapseTransition: __VLS_WithTemplateSlots_25<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare function confirmDialog(title: any, subtitle: any): Promise<any>;

export declare const Container: __VLS_WithTemplateSlots_27<DefineComponent<    {}, {
narrow: boolean;
$props: {
readonly narrow?: boolean;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const DangerAlert: __VLS_WithTemplateSlots<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
    action?(_: {}): any;
}>;

export declare const DangerButton: __VLS_WithTemplateSlots_7<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const Dialogs: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const dialogs: {
    dialog: any;
    info: (title: any, subtitle: any) => Promise<any>;
    confirm: (title: any, subtitle: any) => Promise<any>;
    reset: () => void;
    create: (type: any, data: any) => Promise<any>;
};

export declare const Dropdown: __VLS_WithTemplateSlots_11<DefineComponent<    {}, {
align: string;
bottom: boolean;
width: string;
contentClasses: string;
$props: {
readonly align?: string;
readonly bottom?: boolean;
readonly width?: string;
readonly contentClasses?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    trigger?(_: {}): any;
    content?(_: {}): any;
}>;

export declare const DropdownLink: __VLS_WithTemplateSlots_12<DefineComponent<    {}, {
as: string | Record<string, any>;
href?: string;
$props: {
readonly as?: string | Record<string, any>;
readonly href?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const FadeScaleTransition: __VLS_WithTemplateSlots_23<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const FadeTransition: __VLS_WithTemplateSlots_24<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const HH1: __VLS_WithTemplateSlots_13<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const HH2: __VLS_WithTemplateSlots_14<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const HH3: __VLS_WithTemplateSlots_15<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const InfoAlert: __VLS_WithTemplateSlots_2<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
    action?(_: {}): any;
}>;

export declare function infoDialog(title: any, subtitle: any): Promise<any>;

export declare const Input: DefineComponent<    {}, {
name: string;
id: string;
label?: string;
helpText?: string;
error?: string;
$props: {
readonly name?: string;
readonly id?: string;
readonly label?: string;
readonly helpText?: string;
readonly error?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const InputLayout: __VLS_WithTemplateSlots_16<DefineComponent<    {}, {
name: string;
id: string;
label?: string;
helpText?: string;
error?: string;
$props: {
readonly name?: string;
readonly id?: string;
readonly label?: string;
readonly helpText?: string;
readonly error?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const Modals: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const popModal: any;

export declare const PrimaryButton: __VLS_WithTemplateSlots_5<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const pushModal: any;

export declare function resetDialog(): void;

export declare const SecondaryButton: __VLS_WithTemplateSlots_6<DefineComponent<    {}, {
type: string;
$props: {
readonly type?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const SelectInput: __VLS_WithTemplateSlots_17<DefineComponent<    {}, {
$emit: (event: "update:modelValue", ...args: any[]) => void;
name: string;
id: string;
multiple: boolean;
appearance: string;
align: string;
label?: string;
helpText?: string;
error?: string;
options?: unknown[];
modelValue?: Record<string, any> | unknown[];
defaultText?: string;
$props: {
readonly name?: string;
readonly id?: string;
readonly multiple?: boolean;
readonly appearance?: string;
readonly align?: string;
readonly label?: string;
readonly helpText?: string;
readonly error?: string;
readonly options?: unknown[];
readonly modelValue?: Record<string, any> | unknown[];
readonly defaultText?: string;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    "listbox-title"?(_: {}): any;
}>;

export declare const Sidebar: __VLS_WithTemplateSlots_19<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
    bottom?(_: {}): any;
}>;

export declare const SidebarItem: __VLS_WithTemplateSlots_20<DefineComponent<    {}, {
as: string | Function | Record<string, any>;
active: boolean;
icon?: Function | Record<string, any>;
$props: {
readonly as?: string | Function | Record<string, any>;
readonly active?: boolean;
readonly icon?: Function | Record<string, any>;
};
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const SidebarItemGroup: __VLS_WithTemplateSlots_22<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const SidebarLayout: __VLS_WithTemplateSlots_21<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    top?(_: {}): any;
    sidebar?(_: {}): any;
    default?(_: {}): any;
}>;

export declare const SuccessAlert: __VLS_WithTemplateSlots_3<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
    action?(_: {}): any;
}>;

export declare namespace vAutoResize {
    export function mounted(el: any, { modifiers }: {
        modifiers: any;
    }): void;
}

export declare const WarningAlert: __VLS_WithTemplateSlots_4<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    title?(_: {}): any;
    default?(_: {}): any;
    action?(_: {}): any;
}>;

export { }


export namespace ModalsPlugin {
    function install(app: any): void;
}

declare namespace _default {
    function mounted(el: any, { modifiers }: {
        modifiers: any;
    }): void;
}

declare namespace _default {
    namespace id {
        export let type: StringConstructor;
        export let required: boolean;
        let _default: string;
        export { _default as default };
    }
    namespace name {
        let type_1: StringConstructor;
        export { type_1 as type };
        let required_1: boolean;
        export { required_1 as required };
        let _default_1: string;
        export { _default_1 as default };
    }
    namespace label {
        let type_2: StringConstructor;
        export { type_2 as type };
        let required_2: boolean;
        export { required_2 as required };
        let _default_2: any;
        export { _default_2 as default };
    }
    namespace helpText {
        let type_3: StringConstructor;
        export { type_3 as type };
        let required_3: boolean;
        export { required_3 as required };
        let _default_3: any;
        export { _default_3 as default };
    }
    namespace error {
        let type_4: StringConstructor;
        export { type_4 as type };
        let required_4: boolean;
        export { required_4 as required };
        let _default_4: any;
        export { _default_4 as default };
    }
}

