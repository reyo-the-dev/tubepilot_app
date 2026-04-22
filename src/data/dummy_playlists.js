// We'll generate static UUIDs so they remain consistent across renders
// while demonstrating UUID integration
const PlaylistsData = [
  {
    id: "f9d3bdf5-d1a1-46f9-b88a-31627063aa68",
    title: "Motivational Shorts",
    description:
      "A collection of 60s motivational quotes featuring calm voices, to help start the day right.",
    videoCount: 15,
    gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    videos: [
      {
        id: "c76a91d2-0fb3-4613-bc75-c548bc625de0",
        title: "The power of self-belief",
        description: "Overcome your doubts and trust in your potential.",
        status: "Ready",
        duration: "01m 00s",
        created: "2 days ago",
        views: "1.2k",
        gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      },
      {
        id: "b45a278d-19df-412f-98c9-0a2569e59275",
        title: "Embrace the struggle",
        description: "Why hard times build the strongest character.",
        status: "Processing",
        duration: "--:--",
        created: "5 hours ago",
        views: "0",
        gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      },
    ],
  },
  // {
  //     id: "df5e54c9-fb7a-42cd-bcde-5df8c5c4e365",
  //     title: "World History Facts",
  //     description: "Educational facts about the Roman Empire, Ancient Egypt, and medieval times.",
  //     videoCount: 8,
  //     gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  //     videos: [
  //         {
  //             id: "42aeb049-74f7-41a4-9e32-b7e32d56ed74",
  //             title: "The fall of Rome explained",
  //             description: "A quick summary of what led to the Roman Empire's decline.",
  //             status: "Uploaded",
  //             duration: "08m 12s",
  //             created: "Oct 20, 2023",
  //             views: "45.8k",
  //             gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  //         }
  //     ]
  // },
  // {
  //     id: "5f8a2ad6-3c58-45b9-a292-690a618c7ea3",
  //     title: "Bedtime Stories",
  //     description: "Calm, relaxing, and sometimes spooky stories for night time.",
  //     videoCount: 24,
  //     gradient: "linear-gradient(135deg, #8b5cf6 0%, #4338ca 100%)",
  //     videos: [
  //         {
  //             id: "15c6d328-98f9-4675-8027-afbcaf9a6176",
  //             title: "The whispering woods",
  //             description: "A spooky tale of a lost traveler.",
  //             status: "Ready",
  //             duration: "12m 45s",
  //             created: "Oct 24, 2023",
  //             views: "12.4k",
  //             gradient: "linear-gradient(135deg, #8b5cf6 0%, #4338ca 100%)",
  //         }
  //     ]
  // },
  // {
  //     id: "a8b7c936-e8a7-4c07-b5b4-93af751d386c",
  //     title: "Tech News Daily",
  //     description: "Daily updates on the latest in technology, AI advancements, and gadgets.",
  //     videoCount: 42,
  //     gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
  //     videos: [
  //         {
  //             id: "d7f8d675-6e46-4c4c-836e-cd160db1d6dc",
  //             title: "The Future of AI Automation in 2024",
  //             description: "Tech Insights",
  //             status: "Ready",
  //             duration: "12m 45s",
  //             created: "Oct 24, 2023",
  //             views: "12.4k",
  //             gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
  //         },
  //         {
  //             id: "9e400c28-94fb-4b55-a010-02bf70de1727",
  //             title: "SpaceX Mission Highlights: Mars 2024",
  //             description: "Asset generation failed",
  //             status: "Failed",
  //             duration: "--:--",
  //             created: "Oct 28, 2023",
  //             views: "0",
  //             gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
  //         }
  //     ]
  // }
];

export default PlaylistsData;
