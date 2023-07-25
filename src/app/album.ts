export class Album {
        id !: string;
        ref !: string;
        name !: string;
        title!: string;
        description!: string;
        duration!: number;
        status!: string;
        url? : string;
        tags? : string[];
        like? : string;
        note? : number[];
}

export class List {
       id !: string;
       list !: Array<string>;
}

export class Img {
        id !: string;
        src !: string;
}


