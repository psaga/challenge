import IconAppRegistration from "@/components/icons/IconAppRegistration.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconAppRegistration,
  },
  data() {
    return {
      studentData,
      tabs: ["Overview", "Enrollment", "Academic"],
      activeTab: "Overview",
    };
  },
  methods: {
    selectTab(tab: string) {
      this.activeTab = tab;
      this.$emit("tab-selected", tab);
    },
  },
});
