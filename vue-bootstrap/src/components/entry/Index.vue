<template lang='pug'>
.vue-index#index
    .reactive-title {{ reactiveTitle() }}
    sample
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';
import RootVue from '@/components/base/RootVue';
import Sample from '@/components/sample/Sample.vue';

// import Buefy from 'buefy';

// Vue.use(Buefy);

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

/**
 * Vue Component
 */
@Component
export default class Index extends RootVue {
    public title = 'Sample';
    public subtitle = 'Index';

    protected beforeCreate(): void {
        // Inner Vue 登録
        VueUtil.registerComponents([Sample]);
    }
}
</script>

<style lang='sass'>
@import 'all'

.vue-index
    section.main
        max-width: 800px
        margin-left: auto
        margin-right: auto
</style>
