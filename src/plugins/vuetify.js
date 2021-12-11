import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    theme: {
        dark: true,
        themes:{
            light:{
                primary:'#123456'
            },
            dark:{

            }
        }
    }
});
