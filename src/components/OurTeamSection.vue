<template>
  <v-container>
      <div>
        <h1>Our Team</h1>
      </div>
      <div>
        <p>
          Back in March of 2017, Mr. Yung-Wen Chi, the CEO of AAD was invited
          by Pelestarian Alam Nusantara Foundation to be its First Vice Chairman.
          In May of 2017, Pelestarian Alam Nusantara Foundation signed a contract
          with the Indonesian Chamber of Commerce and Industry (ICCI) (Kadin Indonesia),
          to aid the Indonesian government in a 10 years program for forest protection
          and poverty alleviation, preserving natural forests and assisting villagers
          in rural areas by creating job opportunities and enhancing their living conditions.
        </p>
        <p>
          In August, 2017, Mr. Chi signed a contract for the ownership right of 50 years for 25,000
          hectare of forest land owned by 5 villages (located in Inamosol Town,
          Seram Bagian Barat County, Maluku Province) with the chief of the 5 villages.
        </p>
        <p>
          The forest was originally planned for deforestation but will now be preserved and
          AAD will use it to apply for carbon credit certification. Furthermore,
          AAD will introduce methods of biotechnology farming to the forest protection program,
          employing local villagers to plant agilawood, coffee beans and other economical crops,
          which will create both job opportunities for the villagers and a sustainable
          cycle of agricultural yield that could bring both economical and environmental
          benefits to the locals.
        </p>
      </div>
      <v-layout row>
        <v-flex xs12 sm6>
          <v-card height="400" flat>
            <v-container>
              <v-layout row>
                <v-flex xs3>
                  <img class="avatar"
                    :src="CEOData.avatarPhoto"/>
                </v-flex>
                <v-flex xs9>
                  <div>
                    <h2>{{ CEOData.firstName }} {{ CEOData.LastName }} {{ CEOData.degree }}</h2>
                    <h3>{{ CEOData.title }}</h3>
                    <p class="member-description">{{ CEOData.description }}</p>
                    <ul v-if="CEOData.experienceList">
                      <li v-for="exp in CEOData.experienceList" :key="exp.id">
                        {{ exp.description }}
                      </li>
                    </ul>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-for="member in teamList" :key="member.id">
          <v-card height="400">
            <v-container>
              <v-layout row>
                <v-flex xs3>
                  <img class="avatar"
                    :src="member.avatarPhoto"/>
                </v-flex>
                <v-flex xs9>
                  <div>
                    <h2>{{ member.firstName }} {{member.LastName}} {{ member.degree }}</h2>
                    <h3>{{ member.title }}</h3>
                    <p>{{ member.description }}</p>
                    <ul v-if="member.experienceList">
                      <li v-for="exp in member.experienceList" :key="exp.id">
                        {{ exp.description }}
                      </li>
                    </ul>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import CEO from '@/assets/team/CEO.jpg';
import COO from '@/assets/team/COO.jpg';
import CTO from '@/assets/team/CTO.jpg';
import GM from '@/assets/team/GM.png';
import VGM from '@/assets/team/VGM.png';
import _ from 'lodash';

const memberList = [
  {
    id: 0,
    avatarPhoto: CEO,
    firstName: 'YUNG-WEN',
    LastName: 'CHI',
    title: 'CO-FOUNCER & CEO',
    degree: '',
    description: 'Over a decade of experiece in large scale construction and asset development projects. Managed the construction of a waste water drainage system for a Taiwanese nuclear plant, and great success in his strategical investments in the biotechnology field.',
    experienceList: [
      {
        id: 0,
        description: 'CEO of Jia Hui Biotech Ltd',
      },
      {
        id: 1,
        description: 'First Vice Chairman of Pelestrarian Alam Nusantara Foundation',
      },
    ],
  },
  {
    id: 1,
    avatarPhoto: COO,
    firstName: 'DR. LIN',
    LastName: 'KO-MO',
    title: 'COO',
    degree: 'PH.D.',
    description: 'Responsible for planning, certification and operation of carbon rights. As a renowned environmental Doctor in Taiwan, Lin has served numerous important positions in the Government, including Director-General of the Environmental Protection Bureau, Taichung County and Congressman. Currently, Lin serves as the consultant of New Taipei City Green Industry Association, consultant of Taichung City Government (concurrently as Environmental Assessment Committee member), Executive Director for Taiwan Association of Environmental Protection, Technology Research and Development, as well as Director of the Taiwan Green and Low-carbon Association. Dr. Lin specializes in strategic arrangement, operation management, resource integration, cross-industry integration, crisis handling and governmental negotiation.',
    experienceList: null,
  },
  {
    id: 2,
    avatarPhoto: CTO,
    firstName: 'XIUCHENG',
    LastName: 'LU',
    title: 'CTO',
    degree: null,
    description: 'Responsible for R&D, planning and execution of agarwood formation and fungus-growing. Lu is a renowned fungus-growing expert in Taiwan graduated from Institute under the Department of Plant Medicine, National Pingtung University of Science and Technology. At present, Lu serves as the lecturer at Chunghua University of Medical Technology and National Pingtung University of Science and Technology, as well as Industrial Technology Research Institute (ITRI) teaching techniques and skills of cultivating various mushrooms with expertise in growing Antrodia cinnamomea, truffle and agarwood trees. Lu specializes in technological development and promotion in agarwood creation, formation and essence extraction.',
    experienceList: null,
  },
  {
    id: 3,
    avatarPhoto: GM,
    firstName: 'ERSAN',
    LastName: 'SUGIANTO',
    title: 'GENERAL MANAGER',
    degree: 'S.T.',
    description: 'Pioneered for licensing, financing and supervising of production activities in resource mining. Spearheaded business development activities and stock listings, leaded a successful IPO in 2003.',
    experienceList: [
      {
        id: 0,
        description: 'Master of Business and Management (MBA), Bandung Institute of Technology.',
      },
      {
        id: 1,
        description: 'B.A. Economics, University of Indonesia.',
      },
    ],
  },
  {
    id: 4,
    avatarPhoto: VGM,
    firstName: 'ALEX',
    LastName: 'CHI',
    title: 'VICE GENERAL MANAGER',
    degree: null,
    description: '3 years of project managing experience in Asia Assets Developments. Responsible for management on communications with Europe and North America region.',
    experienceList: [
      {
        id: 0,
        description: 'Bachelor of Arts, Economics and Accounting. University of California, Santa Barbara.',
      },
    ],
  },
];

export default {
  name: 'OurTeamSection',
  data() {
    return {
      memberList,
    };
  },
  computed: {
    CEOData() {
      return _.take(this.memberList)[0];
    },
    teamList() {
      return _.drop(this.memberList);
    },
  },
};
</script>

<style scoped>
.member-description {
  text-align: left;
};
</style>

