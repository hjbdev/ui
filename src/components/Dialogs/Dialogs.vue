<template>
    <FadeTransition>
        <div
            v-if="currentDialog"
            class="absolute inset-0 z-[60] bg-black/40"
        ></div>
    </FadeTransition>
    <FadeScaleTransition>
        <div
            v-if="currentDialog"
            class="absolute inset-0 z-[61] flex items-center justify-center"
        >
            <Card class="mx-6 w-full max-w-lg" footer-justify="end">
                <template #header>
                    <CardTitle>{{ currentDialog?.data?.title }}</CardTitle>
                </template>
                <template #extra v-if="currentDialog.type !== 'info'">
                    <BaseButton
                        size="uniform"
                        @click="
                            currentDialog?.resolve(false);
                            resetDialog();
                        "
                    >
                        <CloseIcon class="h-5 w-5" />
                    </BaseButton>
                </template>
                <p>{{ currentDialog?.data?.subtitle }}</p>
                <template #footer>
                    <PrimaryButton
                        v-if="currentDialog.type === 'info'"
                        @click="
                            currentDialog?.resolve();
                            resetDialog();
                        "
                        >Ok</PrimaryButton
                    >
                    <template v-else-if="currentDialog.type === 'confirm'">
                        <SecondaryButton
                            @click="
                                currentDialog?.resolve(false);
                                resetDialog();
                            "
                            >No</SecondaryButton
                        >
                        <PrimaryButton
                            @click="
                                currentDialog?.resolve(true);
                                resetDialog();
                            "
                            >Yes</PrimaryButton
                        >
                    </template>
                </template>
            </Card>
        </div>
    </FadeScaleTransition>
</template>
<script setup>
import BaseButton from "../Buttons/BaseButton.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import SecondaryButton from "../Buttons/SecondaryButton.vue";
import Card from "../Cards/Card.vue";
import CardTitle from "../Cards/CardTitle.vue";
import FadeScaleTransition from "../Transitions/FadeScaleTransition.vue";
import FadeTransition from "../Transitions/FadeTransition.vue";
import CloseIcon from "../Icons/CloseIcon.vue";

import {
    current as currentDialog,
    reset as resetDialog,
} from "../../support/Dialogs";
</script>
