export interface IMangaCurd {
    _id: string,
    photo: string,
    name: string,
    category: string,
    rating: {
        total: number,
        people: number
    }
}

export interface IMangaDescription {
    _id: string,
    photo: string,
    name: string,
    otherNames: string[],
    status: string,
    rating: {
        total: number,
        people: number
    },
    like: number,
    views: number,
    tabs: number,
    chapters: number,
    tags: [],
    category: "Манга" | "Маньхуа" | "Манхва" | "Западный комикс" | "РуКомикс" | "Индонезийский комикс",
    description: string,
    numberOfChapters: number,
    data: number,
    translator: string[],
    author: string,
    genres: string[],
    comments: { author: string, comment: string, like: number, disLike: number }[],
    chaptersLists: { translator: string, img: string[], like: number, data: string }[] | [];
}

export interface IMangaContent {
    chaptersLists: { translator: string, img: string[], like: number, data: string }[] | [];

}