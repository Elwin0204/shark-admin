<template>
  <el-row :gutter="20" class="sk-cards">
    <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <el-card class="sk-card">
        <div slot="header" class="sk-card-header">
          <span>总销售额</span>
          <el-popover placement="top" trigger="hover" content="总销售额">
            <v-icon
              slot="reference"
              name="info-circle"
              class="card-icon-info"
            ></v-icon>
          </el-popover>
        </div>
        <div class="card-value">￥126,560</div>
        <div class="card-text">
          <span>周同比12%</span>
          <v-icon
            name="caret-up"
            class="card-icon-arrow card-icon-arrow-up"
          ></v-icon>
        </div>
        <div class="card-text">
          <span>日同比11%</span>
          <v-icon
            name="caret-down"
            class="card-icon-arrow card-icon-arrow-down"
          ></v-icon>
        </div>
        <div class="card-footer">日销售额￥12,423</div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <el-card class="sk-card">
        <div slot="header" class="sk-card-header">
          <span>支付笔数</span>
          <el-popover placement="top" trigger="hover" content="支付笔数">
            <v-icon
              slot="reference"
              name="info-circle"
              class="card-icon-info"
            ></v-icon>
          </el-popover>
        </div>
        <div class="card-value">8,686</div>
        <sk-chart style="height: 44px" autoresize :options="payments" />
        <div class="card-footer">转化率60%</div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <el-card class="sk-card">
        <div slot="header" class="sk-card-header">
          <span>运营活动效果</span>
          <el-popover placement="top" trigger="hover" content="运营活动效果">
            <v-icon
              slot="reference"
              name="info-circle"
              class="card-icon-info"
            ></v-icon>
          </el-popover>
        </div>
        <div class="card-value">75%</div>
        <sk-chart style="height: 44px" autoresize :options="percentage" />
        <div class="card-footer">
          <div class="card-text">
            <span>周同比12%</span>
            <v-icon
              name="caret-up"
              class="card-icon-arrow card-icon-arrow-up"
            ></v-icon>
          </div>
          <div class="card-text" style="margin-left: 10px">
            <span>日同比11%</span>
            <v-icon
              name="caret-down"
              class="card-icon-arrow card-icon-arrow-down"
            ></v-icon>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <el-card class="sk-card">
        <div slot="header" class="sk-card-header">
          <span>访问量</span>
          <el-popover placement="top" trigger="hover" content="访问量">
            <v-icon
              slot="reference"
              name="info-circle"
              class="card-icon-info"
            ></v-icon>
          </el-popover>
        </div>
        <div class="card-value">6,868</div>
        <sk-chart style="height: 44px" autoresize :options="visits" />
        <div class="card-footer">日访问量 6,868</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import SkChart from '@/plugins/echarts'
  export default {
    name: 'SkCards',
    components: {
      SkChart,
    },
    data() {
      return {
        //访问量
        visits: {
          color: [
            '#1890FF',
            '#36CBCB',
            '#4ECB73',
            '#FBD437',
            '#F2637B',
            '#975FE5',
          ],
          backgroundColor: 'rgba(252,252,252,0)',
          grid: {
            top: '4%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: false,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              show: false,
              data: [],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              show: false,
            },
          ],
          series: [
            {
              name: '访问量',
              type: 'line',
              data: [],
              smooth: true,
              showSymbol: false,
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(118, 147, 245, 1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(118, 147, 245, 0.1)',
                    },
                  ],
                  false
                ),
              },
              lineStyle: {
                color: '#5E7CE0',
                width: 1,
              },
            },
          ],
        },
        //支付笔数
        payments: {
          color: [
            '#1890FF',
            '#36CBCB',
            '#4ECB73',
            '#FBD437',
            '#F2637B',
            '#975FE5',
          ],
          backgroundColor: 'rgba(252,252,252,0)',
          grid: {
            top: '0%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: false,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              show: false,
              data: [
                '2023-09-01',
                '2023-09-02',
                '2023-09-03',
                '2023-09-04',
                '2023-09-05',
                '2023-09-06',
                '2023-09-07',
                '2023-09-08',
                '2023-09-09',
                '2023-09-10',
                '2023-09-11',
                '2023-09-12',
                '2023-09-13',
                '2023-09-14',
              ],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              show: false,
            },
          ],
          series: [
            {
              name: '支付笔数',
              type: 'bar',
              barWidth: '40%',
              data: [10, 52, 20, 33, 39, 33, 22, 10, 52, 20, 33, 39, 33, 22],
              itemStyle: {
                color: '#5E7CE0',
              },
            },
          ],
        },
        percentage: {},
      }
    },
    mounted() {
      this.initLineChart()
      this.initPercentageChart()
    },
    methods: {
      initLineChart() {
        let base = +new Date(2020, 1, 1)
        let oneDay = 24 * 3600 * 1000
        let date = []

        let data = [Math.random() * 1500]
        let now = new Date(base)

        const addData = (shift) => {
          now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
          date.push(now)
          data.push(this.$baseLodash.random(5000, 20000))

          if (shift) {
            date.shift()
            data.shift()
          }

          now = new Date(+new Date(now) + oneDay)
        }

        for (let i = 1; i < 14; i++) {
          addData()
        }
        addData(true)
        this.visits.xAxis[0].data = date
        this.visits.series[0].data = data
        this.timer = setInterval(() => {
          addData(true)
          this.visits.xAxis[0].data = date
          this.visits.series[0].data = data
        }, 5000)
      },
      initPercentageChart() {
        const data = [75]
        const barWidth = 10
        const maxNum = 100
        this.percentage = {
          grid: {
            top: '0%',
            left: '0%',
            right: '0%',
            bottom: '0%',
          },
          xAxis: {
            show: false,
          },
          yAxis: {
            data: data.map((item, index) => `data ${index}`),
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              type: 'bar',
              barWidth: barWidth,
              zlevel: 2,
              data: data.map(function (item) {
                return {
                  value: item,
                  maxNum: maxNum,
                }
              }),
              itemStyle: {
                borderRadius: 10,
                color: new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
                  { offset: 0, color: '#5E7CE0' },
                  { offset: 1, color: '#BECCFA' },
                ]),
              },
            },
            {
              type: 'bar',
              barWidth: barWidth,
              barGap: '-100%',
              data: data.map(function (item) {
                return {
                  realValue: item,
                  value: maxNum,
                }
              }),
              itemStyle: {
                borderRadius: 10,
                color: '#E9EDFA',
              },
            },
          ],
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .sk-cards {
    ::v-deep .el-card__body {
      padding-top: 10px;
    }
    .sk-card {
      .sk-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba($color: #000000, $alpha: 0.45);
        .card-icon-info {
          fill: rgba($color: #000000, $alpha: 0.45);
        }
      }

      .card-value {
        font-size: 30px;
        color: #252b3a;
      }

      .card-text {
        color: rgba($color: #000000, $alpha: 0.85);
        line-height: 22px;
        display: flex;
        align-items: center;
        .card-icon-arrow {
          margin-left: 5px;
        }
        .card-icon-arrow-up {
          fill: #f66f6a;
        }
        .card-icon-arrow-down {
          fill: #50d4ab;
        }
      }

      .card-footer {
        margin-top: 8px;
        padding-top: 9px;
        border-top: 1px solid #f0f0f0;
        color: rgba($color: #000000, $alpha: 0.85);
        line-height: 22px;
        display: flex;
      }
    }
  }
</style>
