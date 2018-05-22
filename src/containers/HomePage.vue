<template>
<v-app>
  <NavBar></NavBar>
  <main-section></main-section>
  <media-section></media-section>
  <Video-section></Video-section>
  <why-lecarbone-section></why-lecarbone-section>
  <road-map-section></road-map-section>
  <how-it-works-section></how-it-works-section>
  <token-detail-section></token-detail-section>
  <use-of-found-section></use-of-found-section>
  <our-team-section></our-team-section>
  <advisor-section></advisor-section>
  <partner-section></partner-section>
  <Footer></Footer>
</v-app>
</template>
<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
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
    NavBar,
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
    Footer,
    RoadMapSection,
  },
};
</script>
