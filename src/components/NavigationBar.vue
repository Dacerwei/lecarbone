<template>
  <div>
    <desktop-nav-bar v-if="!isMobile"></desktop-nav-bar>
    <mobile-nav-bar v-else></mobile-nav-bar>
  </div>
</template>

<script>
import DesktopNavBar from '@/components/DesktopNavBar';
import MobileNavBar from '@/components/MobileNavBar';

export default {
  name: 'NavigationBar',
  components: {
    DesktopNavBar,
    MobileNavBar,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 90;
    },
  },
};
</script>
