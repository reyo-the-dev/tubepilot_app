import axiosClient from "@/services/api.config";
import { useMutation } from "@tanstack/react-query";

const generateScriptForSlides = async (payload) => {
  const url = "/slide/script/generate";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateScriptForSlides = () => {
  return useMutation({
    mutationFn: generateScriptForSlides,
  });
};
const generateImageForSlide = async (payload) => {
  const url = "/slide/image/generate";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateImageForSlide = () => {
  return useMutation({
    mutationFn: generateImageForSlide,
  });
};

const generateSlide = async (payload) => {
  const url = "/slide/slide/generate";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateSlide = () => {
  return useMutation({
    mutationFn: generateSlide,
  });
};
