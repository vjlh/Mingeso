<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex v-for="(item, index) in alumnos" :key="index" md5>
                <v-card
                class="mx-auto"
                max-width="344"
                outlined
                >
                <v-list-item three-line>
                    <v-list-item-content>
                    <div class="overline mb-4">{{item.name}}</div>
                    <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.rut}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                    ></v-list-item-avatar>
                </v-list-item>

                </v-card>
            </v-flex>
        </v-layout>
        
    </v-container>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data:{
        
    },
    computed:{
        ...mapState(['alumnos'])
    },
    mounted(){
    },
}
</script>
