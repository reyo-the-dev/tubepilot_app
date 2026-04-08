import axiosClient from "@/services/api.config";
import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";

const saveAudioVideoPreferences = async (payload) => {
  const res = await axiosClient.post("/project/saveAV", payload);
  return res.data;
};

export const useSaveAudioVideoPreferences = () => {
  return useMutation({
    mutationFn: saveAudioVideoPreferences,
  });
};

const getUserProjects = async () => {
  const res = await axiosClient.get(`/project`);
  return res.data;
};

export const useGetUserProjects = () => {
  return useQuery({
    queryKey: ["PROJECTS"],
    queryFn: getUserProjects,
    gcTime: 0,
  });
};
