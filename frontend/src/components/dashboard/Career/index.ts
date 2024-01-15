import Card from "@/components/shared/Card/CardComponent.vue";
import SelectBox from "@/components/shared/SelectBox/SelectBoxComponent.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    Card,
    SelectBox,
  },
  data() {
    return {
      studentData,
    };
  },
});
