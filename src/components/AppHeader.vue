<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="sidebar" class="hidden-sm-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-list-tile-action>
                        <v-icon >exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Выйти</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar >
            <v-toolbar-side-icon @click.stop="sidebar = !sidebar" class="hidden-sm-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor:pointer">
                <v-toolbar-title v-text ="'Terminal Command'"></v-toolbar-title>
            </router-link>
            <v-btn icon ripple @click="themeChange">
                <v-icon color="grey darken-1"> invert_colors </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn  v-for="(item, i) in menuItems" flat :key="`menuitem${i}`" :to="item.route" >
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
                <v-btn flat @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-icon left >exit_to_app</v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                sidebar: false
            }
        },
        computed:{
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            },
            menuItems(){
                return this.isUserAuthenticated ?
                    [
                         { icon: 'account_box', title: 'profile', route: '/Profile'},
                         // { icon: 'account_circle', title: 'Войти', route: '/signin'},
                         // { icon: 'lock_open', title: 'Зарегистрироваться', route: '/signup'}
                    ] : [
                        { icon: 'input', title: 'Войти', route: '/signin'},
                        { icon: 'lock_open', title: 'Зарегистрироваться', route: '/signup'}
                    ]

            }
        },
        methods:{
            themeChange () {
                this.$emit('themeChange')
            },
            signout(){
                this.$confirm('Do you really want to leave?').then(res => {
                    if(res){
                        this.$store.dispatch('SIGNOUT');
                        this.$router.push('/')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>