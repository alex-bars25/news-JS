export interface ArticleSource {
    id: string;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ArticleResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourceResponse {
    status: string;
    sources: Source[];
}