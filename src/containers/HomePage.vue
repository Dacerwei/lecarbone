<template>
  <div id="hompage">
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
  </div>
</template>
<script>
import MainSection from '@/components/home/MainSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import MediaSection from '@/components/home/MediaSection';
import OurTeamSection from '@/components/home/OurTeamSection';
import UseOfFoundSection from '@/components/home/UseOfFoundSection';
import TokenDetailSection from '@/components/home/TokenDetailSection';
import WhyLecarboneSection from '@/components/home/WhyLecarboneSection';
import PartnerSection from '@/components/home/PartnerSection';
import AdvisorSection from '@/components/home/AdvisorSection';
import VideoSection from '@/components/common/VideoSection';
import RoadMapSection from '@/components/home/RoadMapSection';

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
