<script setup lang="ts">
import {
    DemoButton1,
    DemoButton2,
    DemoButton3,
    DemoButton4,
    DemoButton5,
    DemoButton6,
    DemoButton1_code,
    DemoButton2_code,
    DemoButton3_code,
    DemoButton4_code,
    DemoButton5_code,
    DemoButton6_code,
} from './demo';

const columns = [
    {
        title: '参数名',
        width: '200px',
        field: 'param',
    },
    {
        title: '描述',
        width: '320px',
        field: 'description',
    },
    {
        title: '类型',
        width: 'auto',
        field: 'type',
    },
    {
        title: '默认值',
        width: '200px',
        field: 'default',
    },
];
const docsTable = ref([
    {
        param: 'type',
        description: '色彩类型',
        type: 'primary | normal | success | error | warning',
        default: `primary`,
    },
    {
        param: 'size',
        description: '尺寸大小',
        type: 'small ｜ medium ｜ large',
        default: 'medium',
    },
    {
        param: 'loading',
        description: '是否为加载状态',
        type: 'boolean',
        default: 'false',
    },
    {
        param: 'round',
        description: '是否为圆角',
        type: 'boolean',
        default: 'false',
    },
    {
        param: 'disabled',
        description: '禁用',
        type: 'boolean',
        default: 'false',
    },
    {
        param: 'isText',
        description: '文字按钮',
        type: 'boolean',
        default: 'false',
    },
    {
        param: 'isIcon',
        description: '图标按钮',
        type: 'boolean',
        default: 'false',
    },
]);
</script>

<template>
    <div class="demo-wrapper">
        <lew-title>Button</lew-title>
        <p class="sub-title">赏心悦目的异步效果</p>
        <lew-demo-box title="普通" :code="DemoButton1_code">
            <demo-button1 />
        </lew-demo-box>
        <lew-demo-box title="尺寸" :code="DemoButton2_code">
            <demo-button2 />
        </lew-demo-box>
        <lew-demo-box title="圆形" :code="DemoButton3_code">
            <demo-button3 />
        </lew-demo-box>
        <lew-demo-box title="加载" :code="DemoButton4_code"
            ><demo-button4 />
        </lew-demo-box>
        <lew-demo-box title="其他" :code="DemoButton5_code"
            ><demo-button5 />
        </lew-demo-box>
        <lew-demo-box title="图标" :code="DemoButton6_code"
            ><demo-button6 />
        </lew-demo-box>
        <lew-title size="16px">Props</lew-title>
        <lew-table :data="docsTable" :columns="columns" height="auto">
            <template #param="{ row }"> {{ row.param }} </template>
            <template #description="{ row }"> {{ row.description }} </template>
            <template #type="{ row }"> {{ row.type }} </template>
            <template #default="{ row }"> {{ row.default }} </template>
        </lew-table>
    </div>
</template>

<style lang="scss" scoped>
.lew-button {
    margin: 10px;
}
</style>
