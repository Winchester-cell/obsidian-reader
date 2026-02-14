export interface CoverArt {
    id: string;
    type: 'cover_art';
    attributes: {
        description: string;
        volume: string | null;
        fileName: string;
        locale: string;
        createdAt: string;
        updatedAt: string;
        version: number;
    };
    relationships: {
        id: string;
        type: 'manga' | 'user';
    }[];
}

export interface CoverArtResponse {
    result: 'ok';
    response: 'entity' | 'collection';
    data: CoverArt;
}
