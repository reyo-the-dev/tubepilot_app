import axiosClient from "@/services/api.config";
import { useMutation } from "@tanstack/react-query";

const generateImageForSlide = async (payload) => {
  const url = "/history/generateImage";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateImageForSlide = () => {
  return useMutation({
    mutationFn: generateImageForSlide,
  });
};

const generateSlidesForEvents = async (payload) => {
  const url = "/history/generateSlides";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateSlidesForEvents = () => {
  return useMutation({
    mutationFn: generateSlidesForEvents,
  });
};
