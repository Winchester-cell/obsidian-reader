export interface MangaStatistics{
  result: "ok";
  statistics: {
    [mangaId: string]: {
      rating: {
        average: number;
      };
    };
  };
}
