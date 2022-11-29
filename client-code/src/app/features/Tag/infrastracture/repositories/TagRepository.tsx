import axios, { AxiosResponse } from "axios";
import { CreateTagDTO } from "../DTOs/CreateTagDTO";
import { TagDTO } from "../DTOs/TagDTO";
import { ITagRepository } from "../interfaces/ITagRepository";

//todo
// const baseUrl = process.env.REACT_APP_YOUR_API_URL;
const baseUrl = `${import.meta.env.VITE_APP_BASE_URL}`;

const CreateTagAsync = async (
  requestDTO: CreateTagDTO
): Promise<string | undefined> => {
  const response: AxiosResponse<string> = await axios.post(
    `${baseUrl}/createTag`,
    requestDTO
  );

  return response.data;
};

const UpdateTagAsync = async (
  requestDTO: TagDTO
): Promise<string | undefined> => {
  const response: AxiosResponse<string> = await axios.put(
    `${baseUrl}/updateTag`,
    requestDTO
  );

  return response.data;
};

const DeleteTagAsync = async (id: string): Promise<string | undefined> => {
  const response: AxiosResponse<string> = await axios.delete(
    `${baseUrl}/${id}`
  );

  return response.data;
};

const GetTagByIdAsync = async (id: string): Promise<TagDTO | undefined> => {
  const response: AxiosResponse<TagDTO> = await axios.get(
    `${baseUrl}/tag/${id}`
  );

  return response.data;
};

const GetAllTagAsync = async (): Promise<TagDTO[] | undefined> => {
  const response: AxiosResponse<TagDTO[]> = await axios.get(`${baseUrl}/tags`);

  return response.data;
};

export const TagRepository: ITagRepository = {
  CreateTagAsync,
  UpdateTagAsync,
  DeleteTagAsync,
  GetTagByIdAsync,
  GetAllTagAsync,
};
