import { Tag } from "../../models/Tag";

export interface TagDTO {
  id: string;
  title: string;
  description?: string;
  urlSlug?: string;
  createdAt?: string;
  updatedAt?: string;
  order?: number;
}

export const tagDTOExtension = (model: Tag): TagDTO => ({ ...model });

export const tagModelExtension = (dto: TagDTO): Tag => ({ ...dto });
