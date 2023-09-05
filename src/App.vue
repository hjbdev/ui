<script setup>
import Container from "./components/Container.vue";
import Card from "./components/Cards/Card.vue";
import Input from "./components/Inputs/Input.vue";
import DangerAlert from "./components/Alerts/DangerAlert.vue";
import InfoAlert from "./components/Alerts/InfoAlert.vue";
import SuccessAlert from "./components/Alerts/SuccessAlert.vue";
import WarningAlert from "./components/Alerts/WarningAlert.vue";
import AlertAction from "./components/Alerts/AlertAction.vue";
import ModalBase from "./components/Modals/ModalBase.vue";
import CardTitle from "./components/Cards/CardTitle.vue";
import PrimaryButton from "./components/Buttons/PrimaryButton.vue";
import SecondaryButton from "./components/Buttons/SecondaryButton.vue";
import DangerButton from "./components/Buttons/DangerButton.vue";
import SidebarLayout from "./components/Sidebar/SidebarLayout.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import SidebarItem from "./components/Sidebar/SidebarItem.vue";
import HomeIcon from "./components/Icons/HomeIcon.vue";
import SidebarLinkGroup from "./components/Sidebar/SidebarLinkGroup.vue";
import SelectInput from "./components/Inputs/SelectInput.vue";
import { ref } from "vue";

const exampleSelectValue = ref(null);
</script>
<template>
    <SidebarLayout class="min-h-screen min-w-screen dark:bg-zinc-900">
        <template #sidebar>
            <Sidebar>
                <SidebarLinkGroup>
                    <SidebarItem :icon="HomeIcon"> Dashboard </SidebarItem>
                </SidebarLinkGroup>
            </Sidebar>
        </template>

        <Container class="pt-6 grid gap-6">
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
                    help-text="Do you even know your name?"></Input>
                <Input
                    type="email"
                    label="Email Address"
                    id="email"
                    name="email"
                    error="You must enter an email address"></Input>
                <SelectInput
                    v-model="exampleSelectValue"
                    label="Hello"
                    :options="[{
                        id: 'test',
                        name: 'Test'
                    }, {
                        id: 'test2',
                        name: 'Test2'
                    }]"
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
            <ModalBase></ModalBase>
        </Container>
    </SidebarLayout>
</template>
