<script setup lang="ts">
const options = ref([
    {
        label: '西游记',
        value: '1',
    },
    {
        label: '水浒传',
        value: '2',
    },
    {
        label: '三国演义',
        value: '3',
    },
    {
        label: '红楼梦',
        value: '4',
    },
]);

const change = (e: any, handle: any) => {
    LewMessage.info(e.label);
    handle.hide();
};
</script>
<template>
    <lew-flex gap="30px" x="start">
        <lew-dropdown :options="options" @change="change">
            <lew-button>hover</lew-button>
        </lew-dropdown>
        <lew-dropdown :options="options" trigger="click" @change="change">
            <lew-button>click</lew-button>
        </lew-dropdown>
    </lew-flex>
</template>
