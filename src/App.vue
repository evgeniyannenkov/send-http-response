<template>
    <div id="app">
        <Response />
    </div>
</template>

<script>
import { onBeforeUnmount } from '@vue/composition-api';
import { useActions } from '@u3u/vue-hooks';
import Response from '@/components/Response';
import sdk from './sdk';

export default {
    components: { Response },
    setup() {
        const actions = {
            ...useActions(['getInitialState'])
        };

        sdk.init();
        actions.getInitialState();

        onBeforeUnmount(sdk.destroy);
        return {};
    }
};
</script>

<style lang="scss">
@import 'styles/_mixins';
@import 'styles/colors';
body {
    @include normal-font;
    * {
        box-sizing: border-box;
    }
}
#app {
    font-size: 14px;
    color: $text-grey;
    @include normal-font;
}
.main {
    width: 100%;
}
</style>
