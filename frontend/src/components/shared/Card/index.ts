import IconDragIndicator from "@/components/icons/IconDragIndicator.vue";
import IconExpandMore from "@/components/icons/IconExpandMore.vue";
import IconExpandLess from "@/components/icons/IconExpandLess.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconDragIndicator,
    IconExpandMore,
    IconExpandLess,
  },
  props: {
    title: String,
    closable: Boolean,
  },
  data() {
    return {
      opened: this.closable ? true : undefined,
    };
  },
});
