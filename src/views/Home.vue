<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="2">
        <v-card class="primary">
          <v-card-text class="text--primary d-flex">
            <v-icon class="text--primary text--lighten-5" :large=this.$vuetify.breakpoint.mdAndUp>mdi-account-group
            </v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> کاربران</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="secondary">
          <v-card-text class="text--secondary d-flex">
            <v-icon class="text--secondary text--lighten-5" :large=this.$vuetify.breakpoint.mdAndUp> mdi-post</v-icon>
            <v-spacer></v-spacer>
            <span> پست ها</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="accent">
          <v-card-text class="text--accent-1 d-flex">
            <v-icon class="text--accent-1 text--lighten-5" :large="this.$vuetify.breakpoint.mdAndUp">mdi-basket
            </v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> سفارشات</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="error">
          <v-card-text class="white--text d-flex">
            <v-icon class="white--text text--lighten-5" :large="this.$vuetify.breakpoint.mdAndUp">mdi-basket</v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> خضروات</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="info">
          <v-card-text class="white--text d-flex">
            <v-icon class="orange--text text--lighten-5" :large="this.$vuetify.breakpoint.mdAndUp">mdi-shopping
            </v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> محصولات</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="success">
          <v-card-text class="white--text d-flex">
            <v-icon class="orange--text text--lighten-5" :large="this.$vuetify.breakpoint.mdAndUp">mdi-shopping
            </v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> محصولات</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="warning">
          <v-card-text class="white--text d-flex">
            <v-icon class="orange--text text--lighten-5" :large="this.$vuetify.breakpoint.mdAndUp">mdi-silverware
            </v-icon>
            <v-spacer></v-spacer>
            <span class="text-h6 text-md-h5"> رستوران</span>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
    <v-divider class="mt-5"></v-divider>
    <v-card>
      <v-card-title class="d-flex flex-row">
        <v-col cols="12" sm="6" md="4"><p class="font-weight-medium my-5">لیست کاربران</p></v-col>
        <v-spacer></v-spacer>
        <!--        <v-btn color="deep-purple">
                  کاربر
                  <v-icon class="mr-3">mdi-account-plus</v-icon></v-btn>-->
        <v-dialog
            v-model="dialog"
            width="900px"
            overlay-color="grey"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="deep-purple" v-bind="attrs"
                   v-on="on">
              کاربر
              <v-icon class="mr-3">mdi-account-plus</v-icon>
            </v-btn>
          </template>

          <v-card color="deep-purple">
            <v-card-title class="text-h5 red lighten-2">
              فرم کاربر جدید
            </v-card-title>
            <v-form>
              <div class="d-flex flex-row">
                <v-text-field label="نام" v-model="form.name"></v-text-field>
                <v-text-field label="ایمیل" v-model="form.email"></v-text-field>
                <v-text-field label="نام کاربری" v-model="form.username"></v-text-field>
              </div>
              <div class="d-flex flex-row">
                <v-select
                    :items="genders"
                    label="جنسیت"
                    v-model="form.gender"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn
                    class="ml-5 mt-5"
                    color="success"
                    @click="submitForm"
                >
                  ذخیره
                </v-btn>
              </div>
            </v-form>

          </v-card>
        </v-dialog>
        <v-col cols="12" sm="6" md="2">
          <v-text-field label="جستجو در دیتاتیبل" v-model="searchText"></v-text-field>
        </v-col>
      </v-card-title>
      <v-data-table :headers="headers" :items="users" :search="search"
                    :footer-props="{
        'items-per-page-text':'تعداد آیتم در صفحه',
        'items-per-page-all-text':'همه',
        'items-per-page-options':[4,8,12,-1],
        }"
      >
        <template v-slot:item.name="{item}">
          {{ item.name.toUpperCase() }}
        </template>
        <template v-slot:item.gender="{item}">
          <v-chip :class="item.gender===1?'info':'pink'">
            {{ item.gender === 1 ? 'مرد' : 'زن' }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{item}">
          <v-btn text color="error" @click="removeItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <template v-slot:footer.page-text="{ pageStart,pageStop,itemsLength }">
          آیتم های {{ pageStart }} تا {{ pageStop }} از {{ itemsLength }} آیتم
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },
  data: () => ({
    genders: ['مرد', 'زن'],
    dialog: false,
    search: '',
    searchText: '',
    form: {
      name: '',
      gender: 1,
      username: '',
      email: '',
    },
    headers: [
      {text: 'اسم', value: 'name'},
      {text: 'نام کاربری', value: 'username'},
      {text: 'ایمیل', value: 'email'},
      {text: 'جنسیت', value: 'gender'},
      {text: 'عملیات', value: 'actions'},
    ],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        gender: 1,
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        gender: 2,
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        gender: 1,
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        gender: 2,
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        gender: 1,
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        gender: 2,
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        gender: 1,
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        gender: 2,
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        gender: 1,
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        gender: 2,
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
      }
    ]
  }),
  watch: {
    searchText(newValue, oldValue) {
      if (newValue === 'مرد') {
        this.search = "1"
        return;
      } else if (newValue === 'زن') {
        this.search = "2"
        return;
      }
      this.search = newValue;
    }
  },
  methods: {
    removeItem(item) {
      this.users = this.users.filter(user => user !== item)
    },
    submitForm() {
      if (this.form.gender === 'مزد') {
        this.form.gender = 1;
      } else {
        this.form.gender = 2
      }
      // this.form.id = this.users.length + 1;
      this.users.push(this.form)
      // console.log(this.form)
      this.dialog = false
    }
  },
  created() {
    // this.$vuetify.theme.dark = true
  }
}
</script>