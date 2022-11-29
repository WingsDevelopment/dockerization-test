import { CreateTag } from "../../models/CreateTag";

export interface CreateTagDTO {
  title: string;
  description?: string;
  urlSlug?: string;
  createdAt?: string;
  updatedAt?: string;
  order?: number;
}

export const createTagDTOExtension = (model: CreateTag): CreateTagDTO => ({
  ...model,
});

export const createTagModelExtension = (dto: CreateTagDTO): CreateTag => ({
  ...dto,
});
