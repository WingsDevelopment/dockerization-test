import { CreateTagDTO } from "../DTOs/CreateTagDTO";
import { TagDTO } from "../DTOs/TagDTO";

export interface ITagRepository {
  CreateTagAsync: (dto: CreateTagDTO) => Promise<string | undefined>;
  UpdateTagAsync: (dto: TagDTO) => Promise<string | undefined>;
  DeleteTagAsync: (id: string) => Promise<string | undefined>;
  GetTagByIdAsync: (id: string) => Promise<TagDTO | undefined>;
  GetAllTagAsync: () => Promise<TagDTO[] | undefined>;
}
