import IconEdit from "@/components/icons/IconEdit.vue";
import IconDone from "@/components/icons/IconDone.vue";
import Card from "@/components/shared/Card/CardComponent.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconEdit,
    IconDone,
    Card,
  },
  data() {
    return {
      studentData,
      editEmailMode: false,
    };
  },
  methods: {
    activeEmailMode() {
      this.editEmailMode = true;
      this.$nextTick(() => {
        if (this.$refs.editEmailInput) {
          (this.$refs.editEmailInput as HTMLInputElement).focus();
        }
      });
    },
    editEmail() {
      this.editEmailMode = false;
      this.studentData = {
        ...this.studentData,
        email: (this.$refs.editEmailInput as HTMLInputElement).value,
      };
      this.$forceUpdate();
    },
    handleBlur() {
      setTimeout(() => {
        if (this.editEmailMode) {
          this.editEmailMode = false;
        }
      }, 100);
    },
  },
});
