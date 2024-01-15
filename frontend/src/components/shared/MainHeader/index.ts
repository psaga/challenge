import IconDarkMode from "@/components/icons/IconDarkMode.vue";
import IconLanguage from "@/components/icons/IconLanguage.vue";
import IconNotifications from "@/components/icons/IconNotifications.vue";
import * as userData from "@/mocks/user-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconDarkMode,
    IconLanguage,
    IconNotifications,
  },
  data() {
    return {
      userData,
    };
  },
});
