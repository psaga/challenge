import IconMoreHoriz from "@/components/icons/IconMoreHoriz.vue";
import IconExpandMore from "@/components/icons/IconExpandMore.vue";
import IconExpandLess from "@/components/icons/IconExpandLess.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconAddBox from "@/components/icons/IconAddBox.vue";
import IconOutbound from "@/components/icons/IconOutbound.vue";
import IconLoop from "@/components/icons/IconLoop.vue";
import IconAnalytics from "@/components/icons/IconAnalytics.vue";
import IconSchool from "@/components/icons/IconSchool.vue";
import IconLeaderboard from "@/components/icons/IconLeaderboard.vue";
import IconAddchart from "@/components/icons/IconAddchart.vue";
import IconAccountTree from "@/components/icons/IconAccountTree.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    IconMoreHoriz,
    IconExpandMore,
    IconExpandLess,
    IconHome,
    IconAddBox,
    IconOutbound,
    IconLoop,
    IconAnalytics,
    IconSchool,
    IconLeaderboard,
    IconAddchart,
    IconAccountTree,
  },
  data() {
    return {
      openedComponentIndex: undefined as number | undefined,
      reportItems: [
        {
          name: "Smart Enroller",
          component: "IconAddBox",
        },
        {
          name: "Dropout Shield",
          component: "IconOutbound",
        },
        {
          name: "Retention Partner",
          component: "IconLoop",
        },
        {
          name: "Risk Detector",
          component: "IconAnalytics",
          subItems: [
            {
              name: "My Reports",
            },
            {
              name: "My Reports",
            },
            {
              name: "My Reports",
            },
          ],
        },
        {
          name: "Academic Offer",
          component: "IconSchool",
          subItems: [],
        },
        {
          name: "My Reports",
          component: "IconLeaderboard",
        },
        {
          name: "Custom Reports",
          component: "IconAddchart",
        },
        {
          name: "Workflows",
          component: "IconAccountTree",
        },
      ],
    };
  },
  methods: {
    isActive(name: string): boolean {
      const currentRoute = (this as any).$route.name;
      const routeFromName = name.toLowerCase().replace(/\s+/g, "-");
      return currentRoute === routeFromName;
    },
    toogleItem(index: number) {
      if (this.openedComponentIndex === index) {
        this.openedComponentIndex = undefined;
      } else {
        this.openedComponentIndex = index;
      }
    },
  },
});
