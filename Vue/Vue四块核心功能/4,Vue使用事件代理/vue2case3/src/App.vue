<template>
  <div id="app">
    <btn-radios 
      :subjects="subjects"
    />
  </div>
</template>

<script>

import BtnRadios from '@/components/BtnRadios';

export default {
  name: 'App',
  components: {
    BtnRadios
  },
  data(){
    return {
      subjects: [
        'Vue',
        'React',
        'Angular'
      ]
    };
  }
}
</script>

<style>

</style>

