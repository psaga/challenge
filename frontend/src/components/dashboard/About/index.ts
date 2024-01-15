import IconEdit from "@/components/icons/IconEdit.vue";
import Card from "@/components/shared/Card/CardComponent.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconEdit,
    Card,
  },
  data() {
    return {
      studentData,
    };
  },
});
