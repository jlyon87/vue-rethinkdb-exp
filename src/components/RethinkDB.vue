<template lang="html">
	<div class="rethinkDB">

		<button v-on:click="fetchAllTVShows">Get all TV Shows</button>
		<button v-on:click="fetchAllAuthors">fetchAllAuthors</button>
		<button v-on:click="fetchAuthorsByName">fetchAuthorsByName</button>
		<button v-on:click="reset">reset</button>

		<p>
			{{ task }}
		</p>

	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "RethinkDB",

	data() {
		return {
			task: ""
		}
	},

	methods: {
		fetchAllTVShows: function() {
			console.log("fetching all tv shows");
			this.task = "fetching all tv shows";

		},
		fetchAllAuthors: function() {
			console.log("fetchAllAuthors");
			this.task = "fetchAllAuthors";
		},
		fetchAuthorsByName: function() {
			console.log("fetchAuthorsByName");
			this.task = "fetchAuthorsByName";
		},

		reset: function() {
			console.log("resetting");
			this.task = "";
		}
	}
};
</script>
