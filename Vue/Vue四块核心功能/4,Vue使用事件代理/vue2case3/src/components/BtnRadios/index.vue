<template>
  <div class="wrapper"
    @click="radioCheck($event)"
  >
    <radio-btn 
        v-for="(item, index) of subjects"
        :key="index"
        :index="index"
        :curIdx="curIdx"
        :item="item"
    />
  </div>
</template>

<script>

import RadioBtn from'./Button';

export default {
    name: 'BtnRadios',
    props: {
        subjects: Array
    },
    components: {
        RadioBtn
    },
    data(){
        return {
            curIdx: 0
        };
    },
    methods: {
        radioCheck(e){
            const tar = e.target,
                  className = tar.className;

            if(className === 'radio-btn'){
                const index = parseInt(tar.dataset.index);

                this.curIdx = index;
            }
        }
    }
}
</script>

<style>

</style>