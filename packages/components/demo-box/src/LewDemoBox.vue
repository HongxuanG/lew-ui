<script setup lang="ts">
import type { CSSProperties } from 'vue';

defineProps({
    title: {
        type: String,
        default() {
            return '';
        },
    },
    tag: {
        type: String,
        default() {
            return '';
        },
    },
    code: {
        type: String,
        default() {
            return '';
        },
    },
});

let isShowCode = ref(false);

const outCodeRef = shallowRef<HTMLElement | null>(null);
const style = computed<CSSProperties>(() => {
    if (isShowCode.value) {
        const height = outCodeRef.value?.firstElementChild?.clientHeight;
        return { height: height ? `${height}px` : 'auto' };
    }
    return { height: 0 };
});
</script>

<template>
    <div class="demo-box">
        <lew-title size="16px"
            >{{ title }}
            <lew-tag v-if="tag" type="info" style="margin: 2px 0px 0px 5px">
                {{ tag }}</lew-tag
            >
        </lew-title>
        <div class="demo-item">
            <div class="demo-cp">
                <slot></slot>
            </div>
            <div
                v-show="code"
                ref="outCodeRef"
                v-highlight
                class="hl-pre"
                :style="style"
            >
                <div class="pre-box">
                    <pre><code>{{ code }}</code></pre>
                </div>
            </div>
            <div class="show-bar" @click="isShowCode = !isShowCode">
                <div class="icon">
                    <lew-icon
                        size="16"
                        v-if="!isShowCode"
                        type="chevron-down"
                    />
                    <lew-icon size="16" v-else type="chevron-up" />
                </div>

                {{ isShowCode ? '关闭' : '显示源码' }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.demo-box {
    margin: 50px 0px 50px 0px;

    .demo-item {
        margin: 10px 0px;
        background-color: var(--lew-bgcolor-0);
        border-radius: var(--lew-border-radius);
        border: var(--lew-border-1);
    }

    .hl-pre {
        position: relative;
        transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;

        .pre-box {
            margin-top: 10px;
            border-radius: var(--lew-border-radius);
        }
    }

    .show-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: var(--lew-border-1);
        width: 100%;
        height: 30px;
        border-radius: 0px 0px var(--lew-border-radius) var(--lew-border-radius);
        font-size: 14px;
        cursor: pointer;
        color: #999;
        background-color: var(--lew-bgcolor-0);

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
        }
    }

    .show-bar:hover {
        background-color: var(--lew-bgcolor-3);
        color: var(--lew-text-color-3);
    }

    .demo-cp {
        padding: 30px;
    }

    @media (max-width: 767px) {
        .demo-cp {
            overflow-x: auto;
        }
    }
}
</style>
