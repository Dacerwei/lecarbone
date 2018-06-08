<template>
<v-app>
  <main-section></main-section>
  <media-section></media-section>
  <Video-section></Video-section>
  <why-lecarbone-section></why-lecarbone-section>
  <how-it-works-section></how-it-works-section>
  <road-map-section></road-map-section>
  <token-detail-section></token-detail-section>
  <use-of-found-section></use-of-found-section>
  <our-team-section></our-team-section>
  <advisor-section></advisor-section>
  <partner-section></partner-section>
</v-app>
</template>
<script>
import MainSection from '@/components/MainSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MediaSection from '@/components/MediaSection';
import OurTeamSection from '@/components/OurTeamSection';
import UseOfFoundSection from '@/components/UseOfFoundSection';
import TokenDetailSection from '@/components/TokenDetailSection';
import WhyLecarboneSection from '@/components/WhyLecarboneSection';
import PartnerSection from '@/components/PartnerSection';
import AdvisorSection from '@/components/AdvisorSection';
import VideoSection from '@/components/VideoSection';
import RoadMapSection from '@/components/RoadMapSection';

export default {
  components: {
    VideoSection,
    MainSection,
    OurTeamSection,
    MediaSection,
    HowItWorksSection,
    WhyLecarboneSection,
    TokenDetailSection,
    UseOfFoundSection,
    PartnerSection,
    AdvisorSection,
    RoadMapSection,
  },
};
</script>
