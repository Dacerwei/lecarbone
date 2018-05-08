<template>
  <v-container>
    <h1>Why LeCarbone?</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="content in contentList" :key="content.title">
        <v-card height="400px">
          <v-card-media :src="content.icon"></v-card-media>
          <v-card-title><h3>{{ content.title }}</h3></v-card-title>
          <v-card-text><p>{{ content.description }}</p></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const whyLeCarboneContent = [
  {
    icon: '',
    title: 'Forest Ecosystem Preservation',
    description: 'By contributing towards LeCarbone, you aid our progress in creating a sustainable cycle of agricultural harvest that could bring both economical and environmental benefits. Environmentally, we will ban all activities of deforestation on the forest land, making sure that we will not damage the forest’s ecosystem. Economically, we will be planting agilawood, coffee beans, and other botanic species and applying for carbon credits.',
  },
  {
    icon: '',
    title: 'Green Income for Local Residents',
    description: 'When you support the LeCarbone program, you will be financially assisting the local residents and schools that will be employed to manage the land. Through our support, the local residents will be provided with a better living environment and understand the importance of preserving the ecosystem.',
  },
  {
    icon: '',
    title: 'Individual & Corporate Social Responsibility',
    description: 'The average individual will produces 3.6 mil lbs CO2(1632 MT) in his or her lifetime. Those carbon footprints may come from commuting, using electricity, buying food thats not grown from local farms, or even just simply eating meat. We encourage both individuals and corporate to take responsibility for the impact we make on Earth that causes global climate change and to offset your own carbon footprint. Together, we can make our planet a better place for future generations.',
  },
];
export default {
  name: 'WhyLecarboneSection',
  data() {
    return {
      contentList: whyLeCarboneContent,
    };
  },
};
</script>

