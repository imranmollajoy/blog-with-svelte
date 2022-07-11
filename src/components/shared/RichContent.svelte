<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	export let document = {};
	const pageContent = documentToHtmlString(document);
</script>

<div>{@html pageContent}</div>
