export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type User = {
	id: number;
	username: string;
	name: string;
	email: string;
	address: Address;
};

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: {
		lat: string;
		lng: string;
	};
};

export type Comments = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};
