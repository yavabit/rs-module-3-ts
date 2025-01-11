const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

type preparedObject = {
	ID: IComment["id"], 
	Email: IComment["email"]
}

const getData = (url: string): Promise<IComment[]> => {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`response: ${response}`);
			}
			return response.json() as Promise<IComment[]>;;
		});
}

const prepareData = (data: IComment[]): preparedObject[] => {
	return data.map(comment => ({ID: comment.id, Email: comment.email}));
}

getData(COMMENTS_URL)
  .then(data => {
    console.log(prepareData(data));
  });