<template>
    <div class="col-md-12">
        <h2>{{title}}</h2>
        <table class="row col-md-6 col-md-offset-4" style="margin-left: 200px">
          <div class="col-md-3">
                  <tr>
                      <th>Front Seats</th>
                  </tr>

                  <tr v-for='item in frontSeats["1"]'>
                      <template v-if="item.booked==1">
                          <td style="background-color: purple">{{item.title}}</td> </template >
                      <template  v-else>
                          <td>{{item.title}}</td>
                      </template >

                  </tr>
          </div>

            <div class="col-md-3">
                    <tr>
                        <th>Other Seats</th>
                    </tr>

                    <tr v-for='item in otherSeats["1"]'>
                        <template v-if="item.booked==1">
                            <td style="background-color: purple;margin-top: 5px">{{item.title}}</td> </template >
                        <template  v-else>
                            <td>{{item.title}}</td>
                        </template >

                    </tr>
                    <tr v-for='item in otherSeats["2"]'>
                        <template v-if="item.booked==1">
                            <td style="background-color: purple">{{item.title}}</td> </template >
                        <template  v-else>
                            <td>{{item.title}}</td>
                        </template >


                    </tr>
                    <tr v-for='item in otherSeats["3"]'>
                        <template v-if="item.booked==1">
                            <td style="background-color: purple">{{item.title}}</td> </template >
                        <template  v-else>
                            <td>{{item.title}}</td>
                        </template >

                    </tr>
                    <tr v-for='item in otherSeats["4"]'>
                        <template v-if="item.booked==1">
                            <td style="background-color: purple; margin-top: 5px">{{item.title}}</td> </template >
                        <template  v-else>
                            <td>{{item.title}}</td>
                        </template >

                    </tr>
                    <tr v-for='item in otherSeats["5"]'>
                        <template v-if="item.booked==1">
                            <td style="background-color: purple">{{item.title}}</td> </template >
                        <template  v-else>
                            <td>{{item.title}}</td>
                        </template >

                    </tr>
            </div>
        </table>
    </div>
</template>
<script>
    export default{
      name: 'BusSeat',
      data(){
        return{
          title: 'Bus Seat Layout',
          frontSeats: {},
          otherSeats: {},
          items: {
            'front_seats': {
              'seats': {
                '1': [
                  {
                    'id': 1,
                    'title': 'Driver',
                    'booked': 1,
                    'is_driver': 1
                  },
                  {
                    'id': 2,
                    'title': 'F1',
                    'booked': 1
                  },
                  {
                    'id': 3,
                    'title': 'F1',
                    'booked': 0
                  }
                ]
              }
            },
            'other_seats': {
              'seats': {
                '1': [
                  {
                    'id': 4,
                    'title': '1A',
                    'booked': 1
                  },
                  {
                    'id': 5,
                    'title': '1B',
                    'booked': 1
                  },
                  {
                    'id': 6,
                    'title': '1C',
                    'booked': 0
                  },
                  {
                    'id': 7,
                    'title': '1D',
                    'booked': 0
                  }
                ],
                '2': [
                  {
                    'id': 7,
                    'title': '1A',
                    'booked': 1
                  },
                  {
                    'id': 8,
                    'title': '1B',
                    'booked': 1
                  },
                  {
                    'id': 9,
                    'title': '1C',
                    'booked': 0
                  },
                  {
                    'id': 10,
                    'title': '1D',
                    'booked': 0
                  }
                ],
                '3': [
                  {
                    'id': 11,
                    'title': '2A',
                    'booked': 1
                  },
                  {
                    'id': 12,
                    'title': '2B',
                    'booked': 1
                  },
                  {
                    'id': 13,
                    'title': '2C',
                    'booked': 0
                  },
                  {
                    'id': 14,
                    'title': '2D',
                    'booked': 0
                  }
                ],
                '4': [
                  {
                    'id': 15,
                    'title': '3A',
                    'booked': 1
                  },
                  {
                    'id': 16,
                    'title': '3B',
                    'booked': 1
                  },
                  {
                    'id': 17,
                    'title': '3C',
                    'booked': 1
                  },
                  {
                    'id': 18,
                    'title': '3D',
                    'booked': 1
                  }
                ],
                '5': [
                  {
                    'id': 19,
                    'title': '5A',
                    'booked': 1
                  },
                  {
                    'id': 20,
                    'title': '5B',
                    'booked': 1
                  },
                  {
                    'id': 21,
                    'title': '5C',
                    'booked': 0
                  },
                  {
                    'id': 22,
                    'title': '5D',
                    'booked': 0
                  }
                ],
                '6': [
                  {
                    'id': 23,
                    'title': '6A',
                    'booked': 1
                  },
                  {
                    'id': 24,
                    'title': '6B',
                    'booked': 1
                  },
                  {
                    'id': 25,
                    'title': '6C',
                    'booked': 0
                  },
                  {
                    'id': 26,
                    'title': '6D',
                    'booked': 0
                  }
                ],
                '7': [
                  {
                    'id': 27,
                    'title': '7A',
                    'booked': 1
                  },
                  {
                    'id': 28,
                    'title': '7B',
                    'booked': 1
                  },
                  {
                    'id': 29,
                    'title': '7C',
                    'booked': 0
                  },
                  {
                    'id': 30,
                    'title': '7D',
                    'booked': 0
                  }
                ],
                '8': [
                  {
                    'id': 31,
                    'title': '8A',
                    'booked': 1
                  },
                  {
                    'id': 32,
                    'title': '8B',
                    'booked': 1
                  },
                  {
                    'id': 33,
                    'title': '8C',
                    'booked': 0
                  },
                  {
                    'id': 34,
                    'title': '8D',
                    'booked': 0
                  }
                ]
              }
            }
          }
        }
      },
      mounted(){
        this.getFrontSeats()
      },
      methods: {
        getFrontSeats(){
         this.frontSeats = this.items.front_seats.seats;
         this.otherSeats = this.items.other_seats.seats;
          console.log(this.frontSeats);
        }
      }
    }
</script>
<style>
    table {
        border-collapse: collapse;
    }

    table, th, td {
        border: 1px solid black;
    }
</style>