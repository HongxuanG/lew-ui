<script lang="ts" setup>
const data: any = ref([
    {
        id: 1,
        name: '小明',
        avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
        age: '14',
        fraction: 63,
        mail: 'div@kamtao.com',
        sex: 1,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
        id: 2,
        name: '小卢',
        avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
        age: '24',
        fraction: 82,
        mail: 'div@kamtao.com',
        sex: 1,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
        id: 3,
        name: '小娟',
        avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
        age: '25',
        fraction: 91,
        mail: 'div@kamtao.com',
        sex: 0,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
        id: 4,
        name: '小贝',
        avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
        age: '22',
        mail: 'div@kamtao.com',
        fraction: 31,
        sex: 0,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
    {
        id: 5,
        name: '小飞',
        avatar: 'https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668',
        age: '13',
        fraction: 54,
        mail: 'div@kamtao.com',
        sex: 3,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
    },
]);

const columns = [
    {
        title: 'id',
        width: '100px',
        field: 'id',
        x: 'center',
    },
    {
        title: '信息',
        width: '180px',
        field: 'info',
    },
    {
        title: '年龄',
        width: 'auto',
        field: 'age',
        x: 'center',
    },
    {
        title: '性别',
        width: 'auto',
        field: 'sex',
        x: 'center',
    },
    {
        title: '成绩',
        width: 'auto',
        field: 'fraction',
        x: 'center',
    },
    {
        title: '介绍',
        width: 'auto',
        field: 'intro',
    },
];

const formatSex = (sex: number) => {
    switch (true) {
        case sex === 0:
            return '女';
        case sex === 1:
            return '男';
        default:
            return '未知';
    }
};
</script>

<template>
    <lew-table :data="data" :columns="columns">
        <template #id="{ row }"> {{ row.id }} </template>
        <template #info="{ row }">
            <lew-flex class="info">
                <lew-avatar :src="row.avatar" round />
                <lew-flex class="right" direction="y" x="start" gap="0px">
                    <div class="name">{{ row.name }}</div>
                    <div class="mail">{{ row.mail }}</div>
                </lew-flex>
            </lew-flex>
        </template>
        <template #age="{ row }"> {{ row.age }} </template>
        <template #fraction="{ row }">
            <lew-flex>
                <lew-badge v-if="row.fraction >= 60" round type="success" />
                <lew-badge v-else round type="error" />
                <span>{{ row.fraction >= 60 ? '良好' : '很差' }}</span>
            </lew-flex>
        </template>
        <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
        <template #intro="{ row }"> {{ row.intro }} </template>
    </lew-table>
    <div style="margin-top: 20px">
        <lew-pagination :page-num="1" :total="200" />
    </div>
</template>

<style lang="scss" scoped>
.info {
    line-height: 22px;
    padding: 10px 0px;

    .lew-avatar {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
    }

    .right {
        flex-shrink: 0;
        width: calc(100% - 50px);
    }

    .name {
        font-weight: bold;
    }

    .mail {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        white-space: nowrap;
        color: var(--lew-text-color-9);
    }
}
</style>
