<template>
	<v-flex  xs12 css="position: relative; width: 100%">
		<img class="logo" src="./assets/img/fleetport-logo-outlines.svg">
		<div id='particles-js'></div>
	</v-flex>
</template>

<script>
	export default {
		mounted () {
			require('particles.js')
			this.$nextTick(() => {
				this.initParticlesJS()
			})
		},
		methods: {
			initParticlesJS () {
				particlesJS('particles-js',
					{
						"particles": {
							"number": {
								"value": 80,
								"density": {
									"enable": true,
									"value_area": 800
								}
							},
							"color": {
								"value": "#ffffff"
							},
							"shape": {
								"type": "circle",
								"stroke": {
									"width": 0,
									"color": "#000000"
								},
								"polygon": {
									"nb_sides": 5
								}
							},
							"opacity": {
								"value": 0.7,
								"random": false,
								"anim": {
									"enable": true,
									"speed": 0.3,
									"opacity_min": 0.4,
									"sync": false
								}
							},
							"size": {
								"value": 3,
								"random": true,
								"anim": {
									"enable": true,
									"speed": 4,
									"size_min": 0.1,
									"sync": false
								}
							},
							"line_linked": {
								"enable": true,
								"distance": 150,
								"color": "#ffffff",
								"opacity": 0.4,
								"width": 1
							},
							"move": {
								"enable": true,
								"speed": 4,
								"direction": "none",
								"random": false,
								"straight": false,
								"out_mode": "out",
								"bounce": false,
								"attract": {
									"enable": false,
									"rotateX": 600,
									"rotateY": 1200
								}
							}
						},
						"interactivity": {
							"detect_on": "canvas",
							"events": {
								"onhover": {
									"enable": true,
									"mode": "grab"
								},
								"onclick": {
									"enable": false,
									"mode": "push"
								},
								"resize": true
							},
							"modes": {
								"grab": {
									"distance": 256,
									"line_linked": {
										"opacity": 0.5180885769563918
									}
								},
								"bubble": {
									"distance": 400,
									"size": 40,
									"duration": 2,
									"opacity": 8,
									"speed": 3
								},
								"repulse": {
									"distance": 200,
									"duration": 0.4
								},
								"push": {
									"particles_nb": 4
								},
								"remove": {
									"particles_nb": 2
								}
							}
						},
						"retina_detect": true
					}
				);
			}
		}
	}
</script>

<style scoped>
	.logo {
		height: 80px;
	  	position: absolute;
 	 	left: 50%;
		top: 130px;
	  	transform: translate(-50%, -50%);
	}
	#particles-js {
		height: 200px;
		background: linear-gradient(135deg,#4dbce9 0,#4dbce9 34%,#fff 100%);
		padding: 0px 15px;
	}
</style>
