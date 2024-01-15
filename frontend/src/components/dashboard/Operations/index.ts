import Card from "@/components/shared/Card/CardComponent.vue";
import IconContentCopy from "@/components/icons/IconContentCopy.vue";
import IconEditNote from "@/components/icons/IconEditNote.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconToday from "@/components/icons/IconToday.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMoreHoriz from "@/components/icons/IconMoreHoriz.vue";
import * as studentData from "@/mocks/student-data.json";
import Vue from "vue";

export default Vue.extend({
  components: {
    Card,
    IconContentCopy,
    IconEditNote,
    IconChat,
    IconToday,
    IconEmail,
    IconPhone,
    IconMoreHoriz,
  },
  data() {
    return {
      studentData,
    };
  },
});
