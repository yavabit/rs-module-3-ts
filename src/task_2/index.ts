import { posts } from './data.js';

type Posts = typeof posts
type PostObject = Posts[number]; 

type NormalizeObject = {
	byId: {
		[key: PostObject["id"]]: PostObject
	},
	allIds: PostObject["id"][]
}

const normalizeData = (unnormalizedData: Posts): NormalizeObject => {
	const normalizedData: NormalizeObject = {
		byId: {},
		allIds: []
	};

	unnormalizedData.forEach((item) => {
		normalizedData.byId[item.id] = item
		normalizedData.allIds.push(item.id)
	})

	return normalizedData as NormalizeObject
};

console.log(normalizeData(posts));
