import IconSearch from "@/components/icons/IconSearch.vue";
import Vue from "vue";

export default Vue.extend({
  name: "InputBox",
  components: {
    IconSearch,
  },
  props: {
    placeholder: String,
  },
});
