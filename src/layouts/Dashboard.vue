<template>
  <v-app>
    <v-app-bar color="deep-purple" app dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"/>
      <v-toolbar-title>پنل ادمین</v-toolbar-title>

      <v-spacer/>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
<!--    <v-app-bar app bottom color="grey" class="darken-4">
    </v-app-bar>-->
    <v-navigation-drawer app right v-model="drawer">
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/ahmad.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>احمد کاکایی</v-list-item-title>
            <v-list-item-subtitle>مدیر سایت</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
      <template v-slot:append>
        <div class="mx-2">
          <v-btn class="mb-3" color="grey darken-4" dark block>خروج</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer padless>
      <v-row justify="center">
        <v-btn block dark>تمامی حقوق این سایت محفوظ می باشد.</v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    drawer: true
  })
}
</script>

<style scoped>

</style>