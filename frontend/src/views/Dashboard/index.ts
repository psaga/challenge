import Operations from "@/components/dashboard/Operations/OperationsComponent.vue";
import Student from "@/components/dashboard/Student/StudentComponent.vue";
import About from "@/components/dashboard/About/AboutComponent.vue";
import Career from "@/components/dashboard/Career/CareerComponent.vue";
import Widgets from "@/components/dashboard/Widgets/WidgetsComponent.vue";
import HeaderSection from "@/components/dashboard/HeaderSection/HeaderSectionComponent.vue";
import Overview from "@/components/dashboard/Overview/OverviewComponent.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Operations,
    Student,
    About,
    Career,
    Widgets,
    HeaderSection,
    Overview,
  },
  data() {
    return {
      activeTab: "Overview",
    };
  },
  methods: {
    onTabSelected(tab: string) {
      this.activeTab = tab;
    },
  },
});
