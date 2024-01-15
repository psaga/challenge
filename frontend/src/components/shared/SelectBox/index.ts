import type { PropType } from "vue";
import IconArrowDropDown from "@/components/icons/IconArrowDropDown.vue";
import Vue from "vue";
type Option = {
  value: string;
  label: string;
};

export default Vue.extend({
  name: "SelectBox",
  components: {
    IconArrowDropDown,
  },
  props: {
    options: Array as PropType<Option[]>,
    placeholder: String,
  },
});
