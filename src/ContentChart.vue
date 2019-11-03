<template>
	<chart :options="line"></chart>
</template>

<script>
	import ECharts from 'vue-echarts/components/ECharts.vue';
	import 'echarts/lib/chart/line';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
	import 'echarts/lib/component/dataZoom';
	import 'echarts/lib/component/toolbox';

	/*var mercDataTfuel = require('./assets/mercData_tfuel-small.json');
	for (var i = 0; i < mercDataTfuel.length; i++) {
		mercDataTfuel[i] = Object.values(mercDataTfuel[i]);
		mercDataTfuel[i][0] *= 1000;
	}*/

	/*var mercDataTdist = require('./assets/mercData_tdist.json');
	for (var i = 0; i < mercDataTdist.length; i++) {
		mercDataTdist[i] = Object.values(mercDataTdist[i]);
		mercDataTdist[i][0] *= 1000;
	}*/

	export default {
		data() {
			return {
				props: {
					manualUpdate: true
				},
				line: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						}
					},
					toolbox: {
						show: true,
				        feature: {
				            dataZoom: {
				            	title: {
				            		zoom: 'zoom',
				            		back: 'restore'
				            	},
				            	icon: {
				            		zoom: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
				            		back: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
				            	}
				            },
				            saveAsImage: {}
				        }
				    },
			        dataZoom: [{
				        type: 'inside'
				    }, {
				        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				        handleSize: '80%',
				        handleStyle: {
				            color: '#fff',
				            shadowBlur: 3,
				            shadowColor: 'rgba(0, 0, 0, 0.6)',
				            shadowOffsetX: 2,
				            shadowOffsetY: 2
				        }
				    }],
					xAxis: {
						type: 'time'
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							data:
								[
									[1533328525000, 820],
									[1533414925000, 932],
									[1533501325000, 901],
									[1533587725000, 934],
									[1533674125000, 1290],
									[1533815325000, 200]
								]
								/*mercDataTfuel*/
							,
							type: 'line',
							smooth: true,
							sampling: 'average',
							areaStyle: {
				                normal: {
				                    color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
				                        offset: 0,
				                        color: 'rgb(255, 158, 68)'
				                    }, {
				                        offset: 1,
				                        color: 'rgb(255, 70, 131)'
				                    }])
				                }
				            },
						}
					]
				}
			}
		},
		components: {
			chart: ECharts
		}
	}

</script>

<style lang="less">
	.echarts, canvas {
	}
</style>
