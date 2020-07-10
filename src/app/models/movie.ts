export class Movie {

    constructor(
        public _id: string,
        public title: string,
        public genre: string,
        public image: string,
        public date: any
    ){}


}

/**   title: String,
    synopsis: String,
    genre: String,
    date: { type: Date, default: Date.now },
    image: String
*/