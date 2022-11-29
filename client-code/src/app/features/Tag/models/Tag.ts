export interface Tag {
  id: string;
  title: string;
  description?: string;
  urlSlug?: string;
  createdAt?: string;
  updatedAt?: string;
  order?: number;
}

export const createEmptyTag = (): Tag => ({
  id: "",
  title: "",
  description: undefined,
  urlSlug: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  order: undefined,
});
