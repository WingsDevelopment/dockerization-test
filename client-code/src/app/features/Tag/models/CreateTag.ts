export interface CreateTag {
  title: string;
  description?: string;
  urlSlug?: string;
  createdAt?: string;
  updatedAt?: string;
  order?: number;
}

export const createEmptyCreateTag = (): CreateTag => ({
  title: "",
  description: undefined,
  urlSlug: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  order: undefined,
});
