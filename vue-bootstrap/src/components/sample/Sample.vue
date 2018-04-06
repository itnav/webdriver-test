<template lang='pug'>
.vue-sample
    b-container(fluid)
        b-row.my-1
            b-col(sm="4")
                label(for="input-none") No State:
            b-col(sm="6")
                b-form-input#inputNone(:state="null"
                                        type="text"
                                        placeholder="No validation")
        b-row.my-1
            b-col(sm="4")
                label(for="input-valid") Valid State:
            b-col(sm="6")
                b-form-input#inputValid(:state="true"
                                        type="text"
                                        placeholder="Valid input")
        b-row.my-1
            b-col(sm="4")
                label(for="input-invalid") Invalid State:
            b-col(sm="6")
                b-form-input#inputInvalid(:state="false"
                                        type="text"
                                        placeholder="Inalid input")

        div(role="group1")
            h3 group1
            label(for="inputLive") Name1:
            b-form-input#inputState1(v-model.trim="name1"
                                    type="text"
                                    :state="nameState1()"
                                    aria-describedby="inputFeedback1"
                                    placeholder="Enter your name")
            b-form-invalid-feedback#inputFeedback1 Enter at least 3 letters
            p {{ name1 }}
            p {{ name1Length() }}

        div(role="group2")
            h3 group2
            label(for="inputLive") Name2:
            b-form-input#inputState2(v-model.trim="name2"
                                    type="text"
                                    :state="nameState2()"
                                    aria-describedby="inputFeedback2"
                                    placeholder="Enter your name")
            b-form-invalid-feedback#inputFeedback2 Enter at least 3 letters
            p {{ name2 }}
            p {{ name2Length() }}

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import VueUtil from '@/scripts/util/VueUtil';

/**
 * Vue Component
 */
@Component
export default class Sample extends Vue {
    private form: any  = {
        email: '',
        food: null,
        checked: []
    }

    private name1: string = '';
    private nameState1(): boolean {
        return this.name1.length > 2 ? true : false;
    }

    private name1Length(): number {
        return this.name1.length
    }

    private name2: string = '';
    private nameState2(): boolean {
        return this.name2.length > 2 ? true : false;
    }

    private name2Length(): number {
        return this.name2.length
    }

    private name3: string = '';
    private nameState3(): boolean {
        return this.name3.length > 2 ? true: false;
    }

    private name3Length(): number {
        return this.name3.length
    }

    protected beforeCreate(): void {
        VueUtil.registerComponents([]);
    }
}
</script>

<style lang='sass' scoped>
@import 'variable'

.vue-sample
    width: 600px
    margin: 0 auto
    padding: 80px

</style>
