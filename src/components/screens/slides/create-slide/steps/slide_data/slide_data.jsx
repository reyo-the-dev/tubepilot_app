import React, { useEffect, useState } from "react";
import parentStyles from "../../create_slide.module.scss";

import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Sliders2, ArrowRight, Magic } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import axios from "axios";
import {
  useGenerateScriptForNews,
  useGetNewsData,
} from "@/api_hooks/news.hooks";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { Image } from "react-bootstrap";

const SlideDataStep = ({
  values,
  onChangeValue,
  handleNext,
  step,
  totalSteps,
  setScriptData,
  scriptData,
  
}) => {
  const categories = [
    { label: "Tech News", value: "Tech" },
    { label: "Daily News", value: "Daily" },
    { label: "Sports News", value: "Sports" },
  ];

  const [newsData, setNewsData] = useState(null);

  const { isPending, mutateAsync } = useGetNewsData();
  const {
    isPending: generateScriptIsLoading,
    mutateAsync: mutateGenerateScript,
  } = useGenerateScriptForNews();

  const handleGetSlideData = async () => {
    try {

      let res = {
        status: "success",
        totalResults: 41,
        results: [
          {
            article_id: "96711a9bde34468e5e28cb999fa7463a",
            link: "https://interestingengineering.com/videos/chinas-j-20-is-becoming-a-serious-threat",
            title: "China’s J-20 Is Becoming A Serious Threat?",
            description:
              "The Chengdu J-20 is China’s fifth-generation stealth fighter, built for long-range missions, advanced sensing, and first-strike capability, making it a key pillar of modern Chinese airpower.",
            content: "ONLY AVAILABLE IN PAID PLANS",
            keywords: ["editor: video"],
            creator: ["berivan kilic"],
            language: "english",
            country: ["united states of america"],
            category: ["top", "technology"],
            datatype: "multimedia",
            pubDate: "2026-04-24 14:46:00",
            pubDateTZ: "UTC",
            fetched_at: "2026-04-24 15:32:26",
            image_url:
              "https://cms.interestingengineering.com/wp-content/uploads/2026/04/Web_8d8d0e.jpg",
            video_url:
              "https://interestingengineering.com/videos/chinas-j-20-is-becoming-a-serious-threat",
            source_id: "interestingengineering",
            source_name: "Interesting Engineering",
            source_priority: 9899,
            source_url: "https://interestingengineering.com",
            source_icon: "https://n.bytvi.com/interestingengineering.png",
            sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            sentiment_stats:
              "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_summary: "ONLY AVAILABLE IN PAID PLANS",
            duplicate: false,
          },
          {
            article_id: "ec26adabdc0273aa4f1851b55f49d9f8",
            link: "https://www.nbcnews.com/video/shorts/vrabel-addresses-growing-scandal-after-new-photos-emerge-262056517779",
            title: "Vrabel addresses growing scandal after new photos emerge",
            description:
              "Vrabel addresses growing scandal after new photos emerge",
            content: "ONLY AVAILABLE IN PAID PLANS",
            keywords: null,
            creator: ["nbc news"],
            language: "english",
            country: ["united states of america"],
            category: ["technology", "top"],
            datatype: "multimedia",
            pubDate: "2026-04-24 14:37:21",
            pubDateTZ: "UTC",
            fetched_at: "2026-04-24 15:32:29",
            image_url:
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/mpx/2704722219/2026_04/vrebaes_v_russi-nygsll.jpg",
            video_url:
              "https://prodamdnewsencoding.akamaized.net/NBC_News_Digital/f_vert_brk_tdy_vrabel_latest_260424/1/abs/index.m3u8?format=redirect",
            source_id: "nbcnews",
            source_name: "Nbc News",
            source_priority: 175,
            source_url: "https://www.nbcnews.com",
            source_icon: "https://n.bytvi.com/nbcnews.png",
            sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            sentiment_stats:
              "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_summary: "ONLY AVAILABLE IN PAID PLANS",
            duplicate: false,
          },
          {
            article_id: "285abb5d0699fb2e619fde87283e7886",
            link: "https://techcrunch.com/video/tim-cook-is-stepping-down-what-happens-to-apple-now/",
            title: "Tim Cook is stepping down. What happens to Apple now?",
            description:
              "Tim Cook plans to step down from his CEO role in September, handing the reins to hardware chief John Ternus. Ternus may be inheriting one of the most durable businesses in tech, but he’s also stepping into a very different ecosystemthan the one Cook spent decades shaping. The App Store’s 30% cut is under pressure, the behind-the-scenes power Apple once [...]",
            content: "ONLY AVAILABLE IN PAID PLANS",
            keywords: [
              "apple",
              "startups",
              "anthropic",
              "ipo",
              "spacex",
              "ai",
              "tim cook",
              "fintech",
              "elon musk",
            ],
            creator: ["theresa loconsolo"],
            language: "english",
            country: ["united states of america"],
            category: ["technology"],
            datatype: "multimedia",
            pubDate: "2026-04-24 14:00:00",
            pubDateTZ: "UTC",
            fetched_at: "2026-04-24 18:01:45",
            image_url:
              "https://techcrunch.com/wp-content/uploads/2026/01/tim-cook-glowing-apple-logo-GettyImages-2234517515.jpg",
            video_url:
              "https://techcrunch.com/video/tim-cook-is-stepping-down-what-happens-to-apple-now/",
            source_id: "techcrunch",
            source_name: "Tech Crunch",
            source_priority: 1756,
            source_url: "http://www.techcrunch.com",
            source_icon: "https://n.bytvi.com/techcrunch.png",
            sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            sentiment_stats:
              "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_summary: "ONLY AVAILABLE IN PAID PLANS",
            duplicate: false,
          },
          {
            article_id: "33fdd27fd17a260fe46ea47b57d5e0fd",
            link: "https://www.detroitnews.com/videos/media/video/2026/04/24/chinas-largest-auto-expo-showcases-classic-evs-byd-and-fullgood/89770401007/",
            title:
              "China's largest auto expo showcases classic EVs, BYD and Geely",
            description:
              "Electric vehicles from Fullgood Motor, BYD, Great Wall Motor and others were on display at the Beijing Auto Show.",
            content: "ONLY AVAILABLE IN PAID PLANS",
            keywords: [
              "sstsn:video",
              "tag:automotive industry",
              "ssts:media:video",
              "type:video",
              "tag:hybrid & alternative vehicles",
              "tag:china",
              "tag:overall positive",
              "tag:vehicle shows",
              "tag:beijing",
              "tag:car shows",
              "access:metered",
            ],
            creator: ["the detroit news"],
            language: "english",
            country: ["united states of america"],
            category: ["technology"],
            datatype: "multimedia",
            pubDate: "2026-04-24 13:58:29",
            pubDateTZ: "UTC",
            fetched_at: "2026-04-24 14:35:23",
            image_url:
              "https://www.detroitnews.com/gcdn/authoring/authoring-images/2026/04/24/PDTN/89770600007-beijingauto-promo.png?crop=1919,1079,x0,y0&width=1600&height=800&format=pjpg&auto=webp",
            video_url:
              "https://www.gannett-cdn.com/authoring/videos/presto/renditions/89770401007/a58b3f9c-9904-430d-89b7-2c7ddf07849a/1080p_30fps.mp4",
            source_id: "detroitnews",
            source_name: "Detroit Local News",
            source_priority: 6361,
            source_url: "http://www.detroitnews.com",
            source_icon: "https://n.bytvi.com/detroitnews.jpeg",
            sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            sentiment_stats:
              "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_summary: "ONLY AVAILABLE IN PAID PLANS",
            duplicate: false,
          },
          {
            article_id: "219cbfa47ce282aa4a3b9ca152245eac",
            link: "https://www.cnn.com/2026/04/24/us/video/berman-cohan-maroney-satoshi-bitcoin-cnc",
            title:
              "New documentary seeks to uncover the identity of Bitcoin’s founder",
            description:
              "Why is the identity of Bitcoin's founder one of the biggest mysteries in finance? The new documentary \"Finding Satoshi\" aims to find out. CNN News Central's John Berman speaks with the two men leading the hunt, Investigative Journalist William Cohan and Quest Research & Investigations private investigator Tyler Maroney.",
            content: "ONLY AVAILABLE IN PAID PLANS",
            keywords: null,
            creator: ["casey chiang"],
            language: "english",
            country: ["united states of america"],
            category: [
              "environment",
              "technology",
              "world",
              "top",
              "health",
              "education",
              "business",
              "entertainment",
              "tourism",
              "science",
              "sports",
              "politics",
            ],
            datatype: "multimedia",
            pubDate: "2026-04-24 13:40:16",
            pubDateTZ: "UTC",
            fetched_at: "2026-04-24 14:01:07",
            image_url:
              "https://media.cnn.com/api/v1/images/stellar/prod/bitcoin-april24.jpg?c=original",
            video_url:
              "https://clips-media-aka.warnermediacdn.com/cnn/clips/2026-04/2238819-680f27af05b94fc1ae0c2d18d887a21d/mp4/cmocxjffx0000356oo2f6oe3p-2238819-1920x1080_8000k.mp4",
            source_id: "cnn",
            source_name: "Cnn",
            source_priority: 165,
            source_url: "https://edition.cnn.com",
            source_icon: "https://n.bytvi.com/cnn.png",
            sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            sentiment_stats:
              "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
            ai_summary: "ONLY AVAILABLE IN PAID PLANS",
            duplicate: false,
          },
        ],
        nextPage: "1777038016185814616",
      };


      res = await mutateAsync();


      setNewsData(res);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  const generateScript = async (news) => {
    try {
      const res = await mutateGenerateScript(news);
      setScriptData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (scriptData) {
      handleNext();
    }
  }, [scriptData]);

  console.log(scriptData);
  

  return (
    <CustomBox
      title="Slide Data"
      icon={<Sliders2 />}
      right={
        <b>
          Step {step} of {totalSteps}
        </b>
      }
    >
      <div className={parentStyles.formGrid}>
        <CustomSelect
          label="CATEGORY"
          options={categories}
          value={values.category}
          onChange={(e, v) => onChangeValue("category", v)}
        />

        {newsData &&
          newsData.results.map((news) => {
            return (
              <div key={news.article_id}>
                <CustomInput label={"TITLE"} value={news.title} />
                <br />
                <CustomTextarea
                  label="DESCRIPTION"
                  placeholder="Briefly describe what this series is about..."
                  rows={5}
                  value={news.description}
                  onChange={(e, v) => onChangeValue("description", v)}
                />
                <br />

                <Image src={news.image_url} height={150} alt="No Image" />
                <br />
                <br />
                <CustomButton
                  onClick={async () => {
                    await generateScript(news);
                  }}
                  isLoading={generateScriptIsLoading}
                >
                  Generate Script <Magic />
                </CustomButton>
                <hr />
              </div>
            );
          })}

        <div className={parentStyles.footerActions}>
          <div /> {/* Spacer */}
          {newsData ? (
            <CustomButton onClick={handleNext}>
              Next Page | total {newsData.totalResults}
            </CustomButton>
          ) : (
            <CustomButton onClick={handleGetSlideData} isLoading={isPending}>
              Get Slide Data
            </CustomButton>
          )}
        </div>
      </div>
    </CustomBox>
  );
};

export default SlideDataStep;
