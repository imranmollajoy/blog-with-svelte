import contentful from 'contentful';
let clientData = {};
if (process.env.NODE_ENV === 'production') {
	clientData = {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN
	};
} else {
	clientData = {
		space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
		accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API_TOKEN
	};
}
export const client = contentful.createClient(clientData);
