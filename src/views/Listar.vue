<template>
<v-container>
  <div class="text-right">
    <v-btn x-large @click="changeView" icon color="primary">
      <v-icon>{{icono}}</v-icon>
    </v-btn> 
  </div>

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
