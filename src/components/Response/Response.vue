<template>
    <or-collapsible title="Response" open borderless>
        <or-code
            label="JavaScript"
            placeholder="Enter code"
            v-model="state.body"
            error="Invalid JavaScript expression"
            help-text="Specify the body of the response, if needed."
        ></or-code>
        <or-dropdown
            has-search
            label="Status code"
            placeholder="Select Field"
            :options="state.statusCodeOptions"
            v-model="state.code"
        ></or-dropdown>
        <or-dropdown
            has-search
            label="Content type"
            placeholder="Select Field"
            :options="state.contentTypeOptions"
            v-model="state.contentType"
        ></or-dropdown>
    </or-collapsible>
</template>

<script>
import { first, get, find } from 'lodash';
import { reactive, computed } from '@vue/composition-api';
import { useActions, useGetters } from '@u3u/vue-hooks';
import { getStatusCodeOptions, getContentTypeOptions } from './config';

export default {
    setup() {
        const actions = {
            ...useActions(['updateStepData'])
        };
        const getters = {
            ...useGetters(['getStepData'])
        };

        const state = reactive({
            statusCodeOptions: getStatusCodeOptions(),
            contentTypeOptions: getContentTypeOptions(),
            body: computed({
                get: () => get(getters.getStepData.value, 'body', {}),
                set: value => actions.updateStepData({ body: value })
            }),
            code: computed({
                get: () => getInputValue('code', getStatusCodeOptions()),
                set: option =>
                    actions.updateStepData({
                        code: serializeInputValue(option)
                    })
            }),
            contentType: computed({
                get: () =>
                    getInputValue('contentType', getContentTypeOptions()),

                set: option =>
                    actions.updateStepData({
                        contentType: serializeInputValue(option)
                    })
            })
        });

        function serializeInputValue({ value }) {
            return value.toString();
        }

        function getInputValue(field, options) {
            const value = get(getters.getStepData.value, field, '');
            return find(options, { value }) || first(options);
        }

        return { state };
    }
};
</script>

<style scoped></style>
