<template>
	
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
	data () {
		return {
			product: {}
		}
	},
	methods: {
		...mapActions([
			]),
		...mapMutations([
			]),
		getData (url, fn, err){
			this.axios.get(url).then(fn).catch(err).then()
		},
		load () {
			this.getData(`/products?TenantId=1&page=1`, (res) => {
				this.product = res.data
			}, (err) => {
				console.log(err.status)
			})
		}
	},
	created () {
		this.load()
	}
}



	
</script>