import axiosClient from "@/services/api.config";
import { useMutation } from "@tanstack/react-query";

const createJobandGenerateVideo = async ({ projectId }) => {
  const res = await axiosClient.post("/job/generateVideo", {
    projectId,
  });
  return res.data;
};

export const useCreateJobandGenerateVideo = () => {
  return useMutation({
    mutationFn: createJobandGenerateVideo,
  });
};
