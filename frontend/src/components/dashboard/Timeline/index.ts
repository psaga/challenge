import SelectBox from "@/components/shared/SelectBox/SelectBoxComponent.vue";
import InputBox from "@/components/shared/InputBox/InputBoxComponent.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconSchool from "@/components/icons/IconSchool.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import { timeline } from "@/mocks/timeline.json";

import Vue from "vue";

export default Vue.extend({
  components: {
    SelectBox,
    InputBox,
    IconEmail,
    IconChat,
    IconSchool,
    IconPhone,
  },
  data() {
    return {
      timeline,
    };
  },
  methods: {
    getIcon(type: string) {
      switch (type) {
        case "Email Sent":
          return IconEmail;
        case "Chat Meeting":
          return IconChat;
        case "LMS Assignment Delivered":
          return IconSchool;
        case "Call":
          return IconPhone;
        case "Initial Contact":
          return IconEmail;
      }
    },
    getTitle(type: string, source: string) {
      let connector;
      switch (type) {
        case "Email Sent":
        case "Chat Meeting":
        case "LMS Assignment Delivered":
        case "Tags Added":
        case "Initial Contact":
          connector = "by";
          break;
        case "Call":
          connector = "from";
          break;
        default:
          connector = "by";
      }
      return connector + " " + source;
    },
  },
});
