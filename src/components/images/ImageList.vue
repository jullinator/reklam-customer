<template>
	<div>
		<div v-for="image in images">
			<span>{image.fileName}</span>
			<image src="image.url" />
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				images:App.userImages
			}
		}
	}
</script>
