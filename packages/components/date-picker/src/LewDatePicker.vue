<script lang="ts" setup>
import { datePickerProps } from './props';
import moment from 'moment';

const props = defineProps(datePickerProps);

let isShowPicker = ref(false);
let dateValue = ref<string | undefined>(props.modelValue);

let lewPopoverRef = ref();

watch(
    () => props.modelValue,
    () => {
        dateValue.value = props.modelValue;
    }
);

const emit = defineEmits(['change', 'update:modelValue']);

const show = () => {
    lewPopoverRef.value.show();
};

const hide = () => {
    lewPopoverRef.value.hide();
};

const change = (date: string) => {
    emit('update:modelValue', moment(date).format('YYYY-MM-DD'));
    emit('change', { date: date, show, hide });
    if (props.autoClose) {
        hide();
    }
};
const classObject = computed(() => {
    return {
        'lew-date-picker-focus': isShowPicker.value,
        [`lew-date-picker-${props.size}`]: props.size,
    };
});

defineExpose({ show, hide });
</script>
<template>
    <lew-popover
        ref="lewPopoverRef"
        trigger="click"
        placement="bottom-start"
        @on-show="isShowPicker = true"
        @on-hide="isShowPicker = false"
    >
        <template #trigger>
            <div class="lew-date-picker-view" :class="classObject">
                <div class="lew-date-picker-input">
                    <div
                        v-show="!dateValue"
                        class="lew-date-picker-placeholder"
                    >
                        请选择日期
                    </div>
                    <div v-show="dateValue" class="lew-date-picker-dateValue">
                        {{ dateValue }}
                    </div>
                    <lew-icon
                        class="lew-date-picker-icon"
                        size="16px"
                        type="calendar"
                    />
                </div>
            </div>
        </template>
        <template #popover-body>
            <lew-date
                v-model="dateValue"
                :multiple="multiple"
                @change="change"
            />
        </template>
    </lew-popover>
</template>

<style lang="scss" scoped>
.lew-popover {
    width: 273px;
    .lew-date-picker-view {
        display: inline-flex;
        align-items: center;
        position: relative;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border: var(--lew-form-border-width) rgba(0, 0, 0, 0) solid;
        border-radius: var(--lew-border-radius);
        background-color: var(--lew-form-bgcolor);
        box-sizing: border-box;
        transition: all 0.15s ease;
        cursor: pointer;
        user-select: none;
        outline: 0px var(--lew-primary-color-light) solid;
    }
    .lew-date-picker-input {
        width: 100%;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        .lew-date-picker-icon {
            position: absolute;
            top: 50%;
            right: 7px;
            transform: translateY(-50%);
            transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
            color: var(--lew-text-color-7);
        }

        .lew-date-picker-placeholder {
            color: rgb(165, 165, 165);
            margin-left: 7px;
        }
    }

    .lew-date-picker-view:hover {
        border: var(--lew-form-border-width) rgba(0, 0, 0, 0) solid;
        background-color: var(--lew-form-bgcolor-hover);
    }
    .lew-date-picker-view:active {
        background-color: var(--lew-form-bgcolor-active);
    }
    .lew-date-picker-focus {
        background-color: var(--lew-form-bgcolor-focus);
        border: var(--lew-form-border-width) var(--lew-form-border-color-focus)
            solid;
        outline: 3px var(--lew-primary-color-light) solid;
    }
    .lew-date-picker-focus:hover {
        background-color: var(--lew-form-bgcolor-focus);
        border: var(--lew-form-border-width) var(--lew-form-border-color-focus)
            solid;
        outline: 3px var(--lew-primary-color-light) solid;
    }
    .lew-date-picker-small {
        .lew-date-picker-input {
            height: var(--lew-form-item-height-small);
            padding: var(--lew-form-input-padding-small);
            font-size: var(--lew-form-font-size-small);
            line-height: var(--lew-form-input-line-height-small);
        }
    }
    .lew-date-picker-medium {
        .lew-date-picker-input {
            height: var(--lew-form-item-height-medium);
            padding: var(--lew-form-input-padding-medium);
            font-size: var(--lew-form-font-size-medium);
            line-height: var(--lew-form-input-line-height-medium);
        }
    }
    .lew-date-picker-large {
        .lew-date-picker-input {
            height: var(--lew-form-item-height-large);
            padding: var(--lew-form-input-padding-large);
            font-size: var(--lew-form-font-size-large);
            line-height: var(--lew-form-input-line-height-large);
        }
    }
}
</style>
