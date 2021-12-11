<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex justify-space-around mt-16">
            <v-btn outlined color="primary" :to="{name:'Login'}">صفحه ورود</v-btn>
            <v-btn color="secondary" :to="{name:'Dashboard'}">پنل ادمین</v-btn>
            <v-btn color="accent" :to="{name:'Circles'}">دوایر</v-btn>
            <v-btn color="error" :to="{name:'Rings'}">رینگ ها</v-btn>
            <v-btn color="info" :to="{name:'Radial'}">رادیال</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Landing",
  created() {

  }
}
</script>

<style scoped>

</style>