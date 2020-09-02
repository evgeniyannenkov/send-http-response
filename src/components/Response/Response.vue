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
import { first, get } from 'lodash';
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
                get: () =>
                    get(
                        getters.getStepData.value,
                        'code',
                        first(getStatusCodeOptions())
                    ),
                set: option => actions.updateStepData({ code: option })
            }),
            contentType: computed({
                get: () =>
                    get(
                        getters.getStepData.value,
                        'contentType',
                        first(getContentTypeOptions())
                    ),
                set: option => actions.updateStepData({ contentType: option })
            })
        });

        return { state };
    }
};
</script>

<style scoped></style>
