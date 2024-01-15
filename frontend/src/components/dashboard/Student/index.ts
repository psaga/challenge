import Card from "@/components/shared/Card/CardComponent.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    Card,
  },
  data() {
    return {
      studentData,
    };
  },
});
