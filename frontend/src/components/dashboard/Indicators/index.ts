import IconToday from "@/components/icons/IconToday.vue";
import IconSettings from "@/components/icons/IconSettings.vue";
import IconCheckCircle from "@/components/icons/IconCheckCircle.vue";
import IconLocation from "@/components/icons/IconToday.vue";
import IconContactPage from "@/components/icons/IconContactPage.vue";
import IconTimeline from "@/components/icons/IconTimeline.vue";
import { indicators } from "@/mocks/indicators.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconToday,
    IconSettings,
    IconCheckCircle,
    IconLocation,
    IconContactPage,
    IconTimeline,
  },
  data() {
    return {
      indicators,
    };
  },
});
