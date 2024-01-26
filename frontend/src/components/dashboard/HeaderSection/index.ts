import IconAppRegistration from "@/components/icons/IconAppRegistration.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconAppRegistration,
  },
  props: {
    activeTab: String,
  },
  data() {
    return {
      studentData,
      tabs: ["Overview", "Enrollment", "Academic"],
    };
  },
  methods: {
    selectTab(tab: string) {
      this.$emit("tab-selected", tab);
    },
  },
});
