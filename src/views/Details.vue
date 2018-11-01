<template>
  <v-container fluid class="pa-2">
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 class="pa-2">
        <div class="headline">Rules</div>
        <v-divider></v-divider>
        <ol>
          <li>No cheating / griefing allowed.</li>
          <li>Teaming / Co-op with other teams not allowed.</li>
          <li>Keep all maps downloaded at all times to avoid getting kicked off from lobby.</li>
          <li>Distribution of room id and password is not allowed outside registered players. So, if you need to bring someone new, get them to sign up first.</li>
          <li>Emulator and Mobile Players will play in same match but receive points differently. Refer to the point distribution table.</li>
          <li>During the match any offensive language said publicly if found in recording will result in a ban from the league.</li>
          <li>Your in-game id is bound to your account and can not be used to open other accounts.</li>
          <li>Only a single account per person is allowed.</li>
          <li>Do not change your in game name before the match or updating your ign in the website in "My Account" section. This may result in your points not being updated and tournament organizers will not be responsible for that.</li>
          <li>If you are a member of tournament organizer, you are not eligible to win the rewards.</li>
          <li>At any point of time, tournament organizers reserve the right to remove anyone from the league with inappropriate behaviour.</li>
        </ol>
      </v-flex>
      <v-flex xs12 sm12 md6 class="pa-2">
        <div class="headline">Point Distribution</div>
        <v-divider></v-divider>
        <v-tabs v-model="active" slider-color="#CE2B0F">
          <v-tab v-for="n in 3" :key="n" ripple :class="n-1===active? 'elevation-1':''">{{ tabHeader[n-1] }}</v-tab>
          <v-tab-item v-for="n in 3" :key="n">
            <v-card flat>
              <v-data-table
                      :headers="pointDistTableHeaders"
                      :items="pointDistTableItems[n-1]"
                      hide-actions
                      class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">{{ props.item.type }}</td>
                  <td class="text-xs-center">{{ props.item.desc }}</td>
                  <td class="text-xs-right">{{ props.item.point }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabHeader: ['Solo', 'Duo', 'Squad'],
      pointDistTableHeaders: [
        { text: 'Type', value: 'type', sortable: false, align: 'left' },
        { text: 'Description', value: 'desc', sortable: false, align: 'center' },
        { text: 'Points', value: 'point', align: 'right' }
      ],
      pointDistTableItems: [
        [
          {
            type: 'Rank',
            desc: 'Rank 1',
            point: 350
          },
          {
            type: 'Rank',
            desc: 'Rank 2',
            point: 280
          },
          {
            type: 'Rank',
            desc: 'Rank 3',
            point: 220
          },
          {
            type: 'Rank',
            desc: 'Rank 4',
            point: 170
          },
          {
            type: 'Rank',
            desc: 'Rank 5',
            point: 130
          },
          {
            type: 'Rank',
            desc: 'Rank 6~10',
            point: 100
          },
          {
            type: 'Rank',
            desc: 'Rank 11~20',
            point: 70
          },
          {
            type: 'Rank',
            desc: 'Rank 21~100',
            point: 25
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Mobile Players)',
            point: 22
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Emulator Users)',
            point: 14
          }
        ],
        [
          {
            type: 'Rank',
            desc: 'Rank 1 every player',
            point: 245
          },
          {
            type: 'Rank',
            desc: 'Rank 2 every player',
            point: 196
          },
          {
            type: 'Rank',
            desc: 'Rank 3 every player',
            point: 154
          },
          {
            type: 'Rank',
            desc: 'Rank 4 every player',
            point: 119
          },
          {
            type: 'Rank',
            desc: 'Rank 5 every player',
            point: 91
          },
          {
            type: 'Rank',
            desc: 'Rank 6~10 every player',
            point: 70
          },
          {
            type: 'Rank',
            desc: 'Rank 11~20 every player',
            point: 49
          },
          {
            type: 'Rank',
            desc: 'Rank 21~50 every player',
            point: 28
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Mobile Players)',
            point: 22
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Emulator Users)',
            point: 14
          }
        ],
        [
          {
            type: 'Rank',
            desc: 'Rank 1 every player',
            point: 175
          },
          {
            type: 'Rank',
            desc: 'Rank 2 every player',
            point: 140
          },
          {
            type: 'Rank',
            desc: 'Rank 3 every player',
            point: 110
          },
          {
            type: 'Rank',
            desc: 'Rank 4 every player',
            point: 85
          },
          {
            type: 'Rank',
            desc: 'Rank 5 every player',
            point: 65
          },
          {
            type: 'Rank',
            desc: 'Rank 6~10 every player',
            point: 50
          },
          {
            type: 'Rank',
            desc: 'Rank 11~25 every player',
            point: 35
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Mobile Players)',
            point: 22
          },
          {
            type: 'Kill',
            desc: 'For Each Kill (Emulator Users)',
            point: 14
          }
        ]
      ]
    }
  }
}
</script>
