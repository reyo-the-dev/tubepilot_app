import axiosClient from "@/services/api.config";
import { useMutation, useQuery } from "@tanstack/react-query";

const generateScript = async (payload) => {
  const res = await axiosClient.post("/script/generate", payload);
  return res.data;
};

export const useGenerateScript = () => {
  return useMutation({
    mutationFn: generateScript,
  });
};

const saveScript = async (payload) => {
  const res = await axiosClient.post("/script/save", payload);
  return res.data;
};

export const useSaveScript = () => {
  return useMutation({
    mutationFn: saveScript,
  });
};
const getScriptById = async (id) => {
  const res = await axiosClient.get(`/script/${id}`);
  return res.data;
};

export const useGetScriptById = (id) => {
  return useQuery({
    queryKey: ["script", id],
    queryFn: () => getScriptById(id),
    enabled: !!id,
  });
};
