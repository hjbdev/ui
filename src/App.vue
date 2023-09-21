<script setup>
import Container from "./components/Container.vue";
import Card from "./components/Cards/Card.vue";
import Input from "./components/Inputs/Input.vue";
import DangerAlert from "./components/Alerts/DangerAlert.vue";
import InfoAlert from "./components/Alerts/InfoAlert.vue";
import SuccessAlert from "./components/Alerts/SuccessAlert.vue";
import WarningAlert from "./components/Alerts/WarningAlert.vue";
import AlertAction from "./components/Alerts/AlertAction.vue";
import Modals from "./components/Modals/Modals.vue";
import CardTitle from "./components/Cards/CardTitle.vue";
import PrimaryButton from "./components/Buttons/PrimaryButton.vue";
import SecondaryButton from "./components/Buttons/SecondaryButton.vue";
import DangerButton from "./components/Buttons/DangerButton.vue";
import SidebarLayout from "./components/Sidebar/SidebarLayout.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import SidebarItem from "./components/Sidebar/SidebarItem.vue";
import HomeIcon from "./components/Icons/HomeIcon.vue";
import SidebarItemGroup from "./components/Sidebar/SidebarItemGroup.vue";
import SelectInput from "./components/Inputs/SelectInput.vue";
import { ref } from "vue";
import HH1 from "./components/Headings/HH1.vue";
import HH2 from "./components/Headings/HH2.vue";
import HH3 from "./components/Headings/HH3.vue";
import Dialogs from "./components/Dialogs/Dialogs.vue";
import {
    info as infoDialog,
    confirm as confirmDialog,
} from "./support/Dialogs";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.vue";
import BreadcrumbItem from "./components/Breadcrumbs/BreadcrumbItem.vue";
import CollapseTransition from "./components/Transitions/CollapseTransition.vue";
import vAutoResize from "./support/vAutoResize";
import { useIntervalFn } from "@vueuse/core";

async function testConfirmDialog() {
    const result = await confirmDialog("Info", "Are you sure");
    console.log("confirm dialog result", result);
}

const exampleSelectValue = ref(null);

const collapseOpen = ref(false);
const resizeTest = ref(null);
const resizeInnerVisible = ref(false);

useIntervalFn(() => {
    resizeInnerVisible.value = !resizeInnerVisible.value;
}, 1000);
</script>
<template>
    <SidebarLayout class="min-w-screen min-h-screen dark:bg-zinc-900">
        <template #sidebar>
            <Sidebar>
                <SidebarItemGroup>
                    <SidebarItem :icon="HomeIcon"> Dashboard </SidebarItem>
                </SidebarItemGroup>
            </Sidebar>
        </template>

        <Dialogs />

        <Container class="grid gap-6 pt-6">
            <div ref="resizeTest" class="bg-red-200" v-auto-resize>
                <div v-if="resizeInnerVisible" class="h-48 bg-red"></div>
            </div>

            <PrimaryButton @click="collapseOpen = !collapseOpen">
                {{ collapseOpen ? "Close" : "Open" }}
            </PrimaryButton>
            <div>
                <CollapseTransition>
                    <div v-if="collapseOpen" class="rounded-lg">
                        <Card>
                            <template #header>
                                <CardTitle>Collapse</CardTitle>
                            </template>
                        </Card>
                    </div>
                </CollapseTransition>
            </div>
            <Card>
                <template #header>
                    <CardTitle>Breadcrumbs</CardTitle>
                </template>
                <Breadcrumbs>
                    <BreadcrumbItem>Hello</BreadcrumbItem>
                    <BreadcrumbItem>Hello</BreadcrumbItem>
                    <BreadcrumbItem as="a" href="https://google.com"
                        >Hello</BreadcrumbItem
                    >
                </Breadcrumbs>
            </Card>
            <Card>
                <template #header>
                    <CardTitle>This is a card</CardTitle>
                </template>
                <template #extra>
                    <SecondaryButton>Hello</SecondaryButton>
                </template>
                Card content
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Inputs</CardTitle>
                </template>
                <Input
                    type="text"
                    label="Full Name"
                    id="full_name"
                    name="full_name"
                    help-text="Do you even know your name?"
                ></Input>
                <Input
                    type="email"
                    label="Email Address"
                    id="email"
                    name="email"
                    error="You must enter an email address"
                ></Input>
                <SelectInput
                    v-model="exampleSelectValue"
                    label="Hello"
                    :options="[
                        {
                            id: 'test',
                            name: 'Test',
                        },
                        {
                            id: 'test2',
                            name: 'Test2',
                        },
                    ]"
                />
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Alerts</CardTitle>
                </template>

                <DangerAlert>
                    <template #title>There are errors with your input</template>
                    <ul>
                        <li>Something</li>
                    </ul>
                </DangerAlert>
                <SuccessAlert>Something went wrong</SuccessAlert>
                <InfoAlert
                    >We've noticed something in your config isnt optimal

                    <template #action>
                        <AlertAction href="#" class="">Fix</AlertAction>
                    </template>
                </InfoAlert>
                <WarningAlert>Something went wrong</WarningAlert>
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Typography</CardTitle>
                </template>
                <HH1>Heading 1</HH1>
                <HH2>Heading 2</HH2>
                <HH3>Heading 3</HH3>
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Buttons</CardTitle>
                </template>
                <div>
                    <PrimaryButton size="tiny">xs button</PrimaryButton>
                    <PrimaryButton size="small">xs button</PrimaryButton>
                    <PrimaryButton>base button</PrimaryButton>
                    <PrimaryButton size="large">lg button</PrimaryButton>
                </div>
                <div>
                    <SecondaryButton size="tiny">xs button</SecondaryButton>
                    <SecondaryButton size="small">sm button</SecondaryButton>
                    <SecondaryButton>base button</SecondaryButton>
                    <SecondaryButton size="large">lg button</SecondaryButton>
                </div>
                <div>
                    <DangerButton size="tiny">xs button</DangerButton>
                    <DangerButton size="small">sm button</DangerButton>
                    <DangerButton>base button</DangerButton>
                    <DangerButton size="large">lg button</DangerButton>
                </div>
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Dialogs</CardTitle>
                </template>
                <div>
                    <PrimaryButton
                        @click="infoDialog('Info', 'this is a subtitle')"
                        >Regular Dialog</PrimaryButton
                    >
                    <PrimaryButton @click="testConfirmDialog"
                        >Confirmation Dialog</PrimaryButton
                    >
                </div>
            </Card>
            <Modals />
        </Container>
    </SidebarLayout>
</template>
