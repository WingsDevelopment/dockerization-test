import { ITagRepository } from "../infrastracture/interfaces/ITagRepository";
import { TagRepository } from "../infrastracture/repositories/TagRepository";

interface IDIContext {
  TagRepository: ITagRepository;
}

export const DIContext: IDIContext = {
  TagRepository: TagRepository,
};
