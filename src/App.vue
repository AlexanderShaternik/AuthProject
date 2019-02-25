<template>
  <v-app :dark="theme">
    <app-header @themeChange="themeChange"></app-header>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  // import axios from 'axios'
  import AppHeader from '@/components/AppHeader'
  import AppFooter from '@/components/AppFooter'

  export default {
      data(){
          return{
              error: null,
              theme: true
          }
      },
      components: {
          AppHeader,
          AppFooter
      },
      methods:{
          themeChange () {
              this.theme = !this.theme
          }
      },
      computed:{
          // terminals(){
          //     return this.$store.getters.getTerminals
          // }
      }
  }
</script>

<style>

</style>
