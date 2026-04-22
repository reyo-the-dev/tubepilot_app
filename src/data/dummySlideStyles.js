const SlideStyles = [
    {
        name: "Classic",

        defaultStyle: {
            text: "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion meaning the iron heats up, the particles plot more kinetic energy and take up more space.",
            highlights: ["Eiffel Tower", "15 cm taller", "thermal expansion"],

            fontColor: "white",
            highlightColor: "#4d0da2",
            // bgImg:
            //     "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/42b5060a-94f3-4f92-81d7-cd4283af84c3/images/scene_1.jpg",
            bgImg:
                "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/s840xwtnzirpmw4p0ss8.jpg",
            logoUrl:
                "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/logo.png",
            isUpperCase: true,

        },

        renderSlide: ({
            text,
            highlights,
            fontColor,
            highlightColor,
            bgImg,
            logoUrl,
            isUpperCase = false,
            ratio = "4:5",
            textSize = "Medium",
            font = "Inter",
            fontWeight = "800"
        }) => {
            const words = text.split(" ");
            const dimensions = ratio === "1:1" ? { w: 1080, h: 1080 } : { w: 1080, h: 1350 };

            const sizeMap = {
                "Small": 60,
                "Medium": 90,
                "Large": 130,
                "Adaptive": 110
            };
            const baseFontSize = sizeMap[textSize] || 90;

            const highlightSet = new Set(
                highlights
                    .flatMap((h) => h.split(" "))
                    .map((w) => w.replace(/[^\w]/g, "").toUpperCase())
                    .filter((w) => w.length > 2)
            );

            const formattedText = words
                .map((word) => {
                    const cleanWord = word.replace(/[^\w]/g, "").toUpperCase();

                    return highlightSet.has(cleanWord)
                        ? `<span class="highlight">${isUpperCase ? word.toUpperCase() : word
                        }</span>`
                        : `<span>${isUpperCase ? word.toUpperCase() : word}</span>`;
                })
                .join(" ");

            const googleFontName = font === "Playfair" ? "Playfair+Display" : font;

            return `
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=${googleFontName}:wght@400;700;800;900&display=swap" rel="stylesheet"/>
</head>

<body style="margin:0">
  <div class="card">
    <div class="logo"></div>
    <div class="text">${formattedText}</div>
  </div>

  <style>
    .card {
      width: ${dimensions.w}px;
      height: ${dimensions.h}px;
      background-image: url("${bgImg}");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-family: "${font}", sans-serif;
      position: relative;
    }

    .logo {
      position: absolute;
      background: url("${logoUrl}") center/cover no-repeat;
      height: 70px;
      width: 70px;
      top: 20px;
      right: 20px;
    }

    .text {
      color: ${fontColor};
      font-size: ${baseFontSize}px;
      line-height: 1.2;
      text-align: center;
      font-family: "${font}", sans-serif;
      font-weight: ${fontWeight};
      max-height: 400px;
      padding: 40px 20px;
      border-top: 1px solid white;
      width: 100%;
      box-sizing: border-box;

      background: linear-gradient(
        to top,
        rgba(0,0,0,1),
        rgba(0,0,0,1)
        
      );
    }

    .highlight {
      color: ${highlightColor};
      letter-spacing: 1px;
    }
  </style>

  <script>
    function autoResizeText() {
      const el = document.querySelector(".text");
      let fontSize = ${baseFontSize};
      const minSize = 14;

      while (fontSize > minSize) {
        el.style.fontSize = fontSize + "px";

        const overflow =
          el.scrollHeight > el.clientHeight ||
          el.scrollWidth > el.clientWidth;

        if (!overflow) break;
        fontSize -= 2;
      }
    }

    document.fonts.ready.then(autoResizeText);
  </script>
</body>
</html>
      `;
        },
    },
    {
        name: "Minimal",

        defaultStyle: {
            text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
            highlights: ["Honey never spoils", "Egyptian tombs", "3,000 years old"],

            fontColor: "white",
            highlightColor: "#10b981",
            bgImg:
                "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/c154cb96-9498-4435-bbfa-406b755fb348/images/scene_2.jpg",
            logoUrl:
                "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/logo.png",
            isUpperCase: true,

        },

        renderSlide: ({
            text,
            highlights,
            fontColor,
            highlightColor,
            bgImg,
            logoUrl,
            isUpperCase = false,
            ratio = "4:5",
            textSize = "Medium",
            font = "Inter",
            fontWeight = "800"
        }) => {
            const words = text.split(" ");
            const dimensions = ratio === "1:1" ? { w: 1080, h: 1080 } : { w: 1080, h: 1350 };

            const sizeMap = {
                "Small": 50,
                "Medium": 80,
                "Large": 110,
                "Adaptive": 90
            };
            const baseFontSize = sizeMap[textSize] || 80;

            const highlightSet = new Set(
                highlights
                    .flatMap((h) => h.split(" "))
                    .map((w) => w.replace(/[^\w]/g, "").toUpperCase())
                    .filter((w) => w.length > 2)
            );

            const formattedText = words
                .map((word) => {
                    const cleanWord = word.replace(/[^\w]/g, "").toUpperCase();

                    return highlightSet.has(cleanWord)
                        ? `<span class="highlight">${isUpperCase ? word.toUpperCase() : word
                        }</span>`
                        : `<span>${isUpperCase ? word.toUpperCase() : word}</span>`;
                })
                .join(" ");

            const googleFontName = font === "Playfair" ? "Playfair+Display" : font;

            return `
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=${googleFontName}:wght@400;700;800;900&display=swap" rel="stylesheet"/>
</head>

<body style="margin:0">
  <div class="card">
    <div class="logo"></div>
    <div class="text">${formattedText}</div>
  </div>

  <style>
    .card {
      width: ${dimensions.w}px;
      height: ${dimensions.h}px;
      background-image: url("${bgImg}");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "${font}", sans-serif;
      position: relative;
    }

    .logo {
      position: absolute;
      background: url("${logoUrl}") center/cover no-repeat;
      height: 70px;
      width: 70px;
      top: 20px;
      right: 20px;
    }

    .text {
      color: ${fontColor};
      font-size: ${baseFontSize}px;
      line-height: 1.2;
      text-align: center;
      font-family: "${font}", sans-serif;
      font-weight: ${fontWeight};
      max-width: 80%;
      background: rgba(0,0,0,0.4);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(5px);
    }

    .highlight {
      color: ${highlightColor};
    }
  </style>

  <script>
    function autoResizeText() {
      const el = document.querySelector(".text");
      let fontSize = ${baseFontSize};
      const minSize = 14;

      while (fontSize > minSize) {
        el.style.fontSize = fontSize + "px";

        const overflow =
          el.scrollHeight > el.clientHeight ||
          el.scrollWidth > el.clientWidth;

        if (!overflow) break;
        fontSize -= 2;
      }
    }

    document.fonts.ready.then(autoResizeText);
  </script>
</body>
</html>
      `;
        },
    },
    {
        name: "Social News",

        defaultStyle: {
            text: "A study found that about one in five corporate executives is a psychopath, roughly the same rate found among prisoners.",
            highlights: ["corporate executives", "psychopath", "prisoners"],

            fontColor: "#000000",
            highlightColor: "#c2410c",
            bgImg:
                "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/42b5060a-94f3-4f92-81d7-cd4283af84c3/images/scene_1.jpg",
            logoUrl:
                "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/logo.png",
            isUpperCase: false,

        },

        renderSlide: ({
            text,
            highlights,
            fontColor,
            highlightColor,
            bgImg,
            logoUrl,
            isUpperCase = false,
            ratio = "4:5",
            textSize = "Medium",
            font = "Inter",
            fontWeight = "400"
        }) => {
            const words = text.split(" ");
            const dimensions = ratio === "1:1" ? { w: 1080, h: 1080 } : { w: 1080, h: 1350 };

            const sizeMap = {
                "Small": 50,
                "Medium": 75,
                "Large": 100,
                "Adaptive": 85
            };
            const baseFontSize = sizeMap[textSize] || 75;

            const highlightSet = new Set(
                highlights
                    .flatMap((h) => h.split(" "))
                    .map((w) => w.replace(/[^\w]/g, "").toUpperCase())
                    .filter((w) => w.length > 2)
            );

            const formattedText = words
                .map((word) => {
                    const cleanWord = word.replace(/[^\w]/g, "").toUpperCase();

                    return highlightSet.has(cleanWord)
                        ? `<span class="highlight">${isUpperCase ? word.toUpperCase() : word
                        }</span>`
                        : `<span>${isUpperCase ? word.toUpperCase() : word}</span>`;
                })
                .join(" ");

            const googleFontName = font === "Playfair" ? "Playfair+Display" : font;

            return `
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=${googleFontName}:wght@400;700;800;900&display=swap" rel="stylesheet"/>
</head>

<body style="margin:0; background: #ffffff;">
  <div class="card">
    <div class="header">
      <div class="logo" style="background-image: url('${logoUrl}')"></div>
      <div class="account-info">
        <div class="handle">FACTS</div>
        <div class="website">instagram.com/facts</div>
      </div>
    </div>
    
    <div class="content">
      <div class="text">${formattedText}</div>
    </div>

    <div class="image-area">
        <div class="content-image" style="background-image: url('${bgImg}')"></div>
    </div>
  </div>

  <style>
    .card {
      width: ${dimensions.w}px;
      height: ${dimensions.h}px;
      display: flex;
      flex-direction: column;
      font-family: "${font}", sans-serif;
      background: white;
      box-sizing: border-box;
    }

    .header {
      padding: 60px 80px 40px 80px;
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .header .logo {
      width: 140px;
      height: 140px;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      background-color: #a86217;
    }

    .header .handle {
      font-weight: 900;
      font-size: 48px;
      color: black;
    }

    .header .website {
      font-size: 32px;
      color: #666;
      font-style: italic;
    }

    .content {
      padding: 0 80px 40px 80px;
      flex: 1;
      display: flex;
      align-items: flex-start;
      overflow: hidden;
    }

    .text {
      color: ${fontColor};
      font-size: ${baseFontSize}px;
      line-height: 1.3;
      text-align: left;
      font-family: "${font}", sans-serif;
      font-weight: ${fontWeight};
      width: 100%;
    }

    .image-area {
      flex: 1.2;
      width: 100%;
      padding: 0 40px 40px 40px;
      box-sizing: border-box;
      display: flex;
    }

    .content-image {
      flex: 1;
      width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 40px;
    }

    .highlight {
      color: ${highlightColor};
      font-weight: 800;
    }
  </style>

  <script>
    function autoResizeText() {
      const el = document.querySelector(".text");
      const container = document.querySelector(".content");
      let fontSize = ${baseFontSize};
      const minSize = 14;

      while (fontSize > minSize) {
        el.style.fontSize = fontSize + "px";

        const overflow =
          container.scrollHeight > container.clientHeight ||
          container.scrollWidth > container.clientWidth;

        if (!overflow) break;
        fontSize -= 2;
      }
    }

    document.fonts.ready.then(autoResizeText);
  </script>
</body>
</html>
      `;
        },
    },
];


export default SlideStyles;