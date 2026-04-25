import axiosClient from "@/services/api.config";
import { useMutation } from "@tanstack/react-query";

const getNewsData = async () => {
  const url = `https://newsdata.io/api/1/latest? 
                  apikey=pub_41ba9fe4caa344069015b6a84c1adf86
                  &country=us,cn,jp,kr,in
                  &language=en
                  &category=technology,science
                  &prioritydomain=top
                  &image=1
                  &video=1
                  &removeduplicate=1
                  &size=5
  `;

  const res = await axiosClient.get(url);
  return res.data;
};

export const useGetNewsData = () => {
  return useMutation({
    mutationFn: getNewsData,
  });
};

const generateScriptForNews = async (newsData) => {
  const url = "/news/script/generate";

  //   news/script/generate
  const res = await axiosClient.post(url, newsData);
  return res.data;
};

export const useGenerateScriptForNews = () => {
  return useMutation({
    mutationFn: generateScriptForNews,
  });
};
const generateSlideForScript = async (payload) => {
  const url = "/news/slide/generate";
  const res = await axiosClient.post(url, payload);
  return res.data;
};

export const useGenerateSlideForScript = () => {
  return useMutation({
    mutationFn: generateSlideForScript,
  });
};
