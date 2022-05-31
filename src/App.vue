<script setup>
import Container from "./components/Container.vue";
import Card from "./components/Cards/Card.vue";
import CardGrid from "./components/Cards/CardGrid.vue";
import List from "./components/Lists/List.vue";
import ListItem from "./components/Lists/ListItem.vue";
import Input from "./components/Inputs/Input.vue";
import DangerAlert from "./components/Alerts/DangerAlert.vue";
import InfoAlert from "./components/Alerts/InfoAlert.vue";
import SuccessAlert from "./components/Alerts/SuccessAlert.vue";
import WarningAlert from "./components/Alerts/WarningAlert.vue";
import AlertAction from "./components/Alerts/AlertAction.vue";
import ModalBase from "./components/Modals/ModalBase.vue";
import CardTitle from "./components/Cards/CardTitle.vue";
import PrimaryButton from "./components/Buttons/PrimaryButton.vue";
import ButtonGroup from "./components/Buttons/ButtonGroup.vue";
import SecondaryButton from "./components/Buttons/SecondaryButton.vue";
import FaintButton from "./components/Buttons/FaintButton.vue";
</script>
<template>
    <Container class="pt-6">
        <CardGrid>
            <Card>
                <template #header>
                    <CardTitle>This is a card</CardTitle>
                </template>
                Card content
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Lists</CardTitle>
                </template>
                <List>
                    <ListItem>Hello</ListItem>
                    <ListItem>Hello</ListItem>
                    <ListItem>Hello</ListItem>
                </List>
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
                        <AlertAction href="#" class="text-blue-600 hover:text-blue-700">Fix</AlertAction>
                    </template>
                </InfoAlert>
                <WarningAlert>Something went wrong</WarningAlert>
            </Card>
            <Card>
                <template #header>
                    <CardTitle>Buttons</CardTitle>
                </template>

                <ButtonGroup>
                    <PrimaryButton size="xs">xs button</PrimaryButton>
                    <PrimaryButton size="sm">sm button</PrimaryButton>
                    <PrimaryButton>base button</PrimaryButton>
                    <PrimaryButton size="lg">lg button</PrimaryButton>
                    <PrimaryButton size="xl">xl button</PrimaryButton>
                </ButtonGroup>
                <ButtonGroup>
                    <SecondaryButton size="xs">xs button</SecondaryButton>
                    <SecondaryButton size="sm">sm button</SecondaryButton>
                    <SecondaryButton>base button</SecondaryButton>
                    <SecondaryButton size="lg">lg button</SecondaryButton>
                    <SecondaryButton size="xl">xl button</SecondaryButton>
                </ButtonGroup>
                <ButtonGroup>
                    <FaintButton size="xs">xs button</FaintButton>
                    <FaintButton size="sm">sm button</FaintButton>
                    <FaintButton>base button</FaintButton>
                    <FaintButton size="lg">lg button</FaintButton>
                    <FaintButton size="xl">xl button</FaintButton>
                </ButtonGroup>
            </Card>
        </CardGrid>
        <ModalBase></ModalBase>
    </Container>
</template>
<style></style>
