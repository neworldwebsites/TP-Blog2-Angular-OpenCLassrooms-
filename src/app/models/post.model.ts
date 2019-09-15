export class Post {


	public postcreatedAt: Date;


	constructor(
		public title: string,
		public content: string,
		public loveIt: number) {

		this.postcreatedAt = new Date();

	}

}


