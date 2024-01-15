import Indicators from "@/components/dashboard/Indicators/IndicatorsComponent.vue";
import Timeline from "@/components/dashboard/Timeline/TimelineComponent.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Indicators,
    Timeline,
    IconEmail,
    IconPhone,
  },
  data() {
    return {
      tabs: [
        { name: "Activity" },
        { name: "Emails", icon: IconEmail },
        { name: "Calls", icon: IconPhone },
      ],
      activeTab: "Activity",
    };
  },
});
