type Branded<T, K> = T & { __brand: K };

type DateAsISOString = Branded<string, "dateAsIsoString">;

type UniqId = Branded<number, "uniqId">;
