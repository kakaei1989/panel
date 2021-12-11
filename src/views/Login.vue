<template>
  <v-card
      class="mx-auto"
      max-width="500"
      outlined
  >
    <v-card-title>فرم ورود</v-card-title>
    <v-form v-model="validForm">
      <v-text-field outlined label="ایمیل"
                    prepend-icon="mdi-email"
                    class="mx-2"
                    v-model="form.email"
                    :rules="[
                        required(form.email,'ایمیل'),checkEmail
                    ]"
      >
      </v-text-field>
      <v-text-field outlined label="رمز عبور" :prepend-icon="showPassword?'mdi-eye':'mdi-eye-off'"
                    :type="showPassword?'text':'password'" class="mx-2"
                    @click:prepend="showPassword=!showPassword" v-model="form.password"
                    :rules="[
                        required(form.password,'رمز عبور'),checkPass
                    ]">
      </v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            depressed
            color="primary"
            :loading="loading"
            :disabled="disabledBtn"
            @click="submitForm"
        >
          ارسال فرم
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
const required = (value, name) => !!value || 'لطفا ' + name + ' را وارد کنید';
const checkEmail = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'uncorrect';
const checkPass = value => /^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value) || 'رمز ضعیف است';
export default {
  name: "Login",
  data: () => ({
    showPassword: false,
    form: {
      email: '',
      password: ''
    },
    loading: false,
    validForm: true
  }),
  computed: {
    disabledBtn() {
      return this.loading || !this.validForm
    }
  },
  methods: {
    /* submitForm:()=>{
    }*/
    submitForm() {
      this.loading = true;
      localStorage.setItem('user', JSON.stringify(this.form));
      setTimeout(() => {
        this.loading = false;
        this.$router.push({name:"Dashboard"})
      }, 2000)
    },
    required,
    checkEmail,
    checkPass
    /*,
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
        return true
      }
      return "You have entered an invalid email address!"
    }*/
  }
}
</script>

<style scoped>

</style>