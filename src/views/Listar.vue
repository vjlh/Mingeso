<template>
<v-container>
  <v-btn @click="changeView" icon color="primary">
    <v-icon>{{icono}}</v-icon>
  </v-btn> 

  <Cardview v-if="icono ==='mdi-view-list'"/>
  <Listview v-if="icono ==='mdi-view-module'"/>
</v-container>
</template>
<script>
import axios from 'axios'
import Cardview from '@/components/ListarCard';
import Listview from '@/components/ListarList';

export default {
  components:{
    Cardview,
    Listview
  },
    data(){
      return{
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
       ],
        icono : 'mdi-view-module'

      }
    },
    methods:{
      changeView(){
        if (this.icono === 'mdi-view-module')
          this.icono = 'mdi-view-list'

        else  
          this.icono = 'mdi-view-module'
      }
    },
    computed:{
    //
    },
    mounted(){
      //
    },
}
</script>
