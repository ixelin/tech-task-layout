import { createSlice } from "@reduxjs/toolkit";
import { TCategory } from "types";

interface NavbarState {
  categories: TCategory[];
}

const initialState: NavbarState = {
  categories: [
    {
      name: "Ванны",
      image:
        "https://s3-alpha-sig.figma.com/img/70ee/62a2/715c6d5b09301972c6935e1bdca70a66?Expires=1704067200&Signature=pgvGYF-pjdsz3tyJv6CXwkm3WHyN6mZGpjV0pxhA7DxWiYDicpW7eIWm-b6Ci97OJrYyBIUlMLVKnhdWCo0FCMo-Yj-HOSxvuXwZCsKQ54l3W9OGl3O2w2mXUf-AH5c79EYU4A7W9I2TB2NZi84CcTRMK5ozssqQ2pbSsVo21TnFiJdTd75RrvbAJMxYft~9swbHc1QCoCa-SfUP9FmX4zykCvoNvq9lnhpS6WllfiUcXl7NgcHtcnpzhVl9lGTrzmk1QnmhXKYMG8LSa7Fs5c7UQnbHyXcNWFw2L5lsOmbq2MyC7sJMafnoR~z~b97KZb6v6H~C6iGO01Z6Gs5rPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 1,
    },
    {
      name: "Смесители",
      image:
        "https://s3-alpha-sig.figma.com/img/5b0e/c834/439ead342ee7ab86ba3278506004ca5f?Expires=1704067200&Signature=JVi9~nns93d8Wd8r9qtD6MFe1Ou6A~h464be5I9901p-1NWtTvwez6pAKai2G8vv7HPBEbCxtslnrheq3bQ4V9wJl8ZMF1z8grEfpy~WeejwRheGJg~67wfhaOas-M5Gr1NjQGkTG~AALmQQ4nYwMFJgbzFewqTrx~EOMeGoKpuSC9MW6e2jpyVY6xXRWkNWlsV5WygeqRzDh-p1pgSznjTKyzkLfoqVqNo3tyNfbi0J3-fozJabZta0rtx9y0rxB39TmlSA5b-7-uLnN8debfiPogo2V98khdqCJIY3CgGoJVEVxgVNUuhB5J8Bvm0B5CwIW8IuDnDQA76cIqPCFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 2,
    },
    {
      name: "Вытяжки для кухни",
      image:
        "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1704067200&Signature=gfyjp2cobPRt9RpDeBySuM8VIytGU5BV5rm2T8ubsjXSoFZMuXTdtUbUNjz4ULENt1PyFeG8~YKOXwEhHAs1ZoZNJ9HElCWr3gD2uQfiPwJpZxL5eizn~HDdtOR3KyyhLXM~I9hDE1JPLCeS4ZZW9eYgRwwNAmeH5nALk~C488lzJdPWTIq0974NkVqxb94GBu7fWuVhP30P8e7urS9IfGt9i1rVtEXgKbtc2ztUNIJfGFPZ47ULslhiQZteQqr37nwlFmvkiE4pC3GKQlfCRtCYyHSefk0LSkQu5r~rGaLGeqhNLTabTGviR843ORucTlSSsHEL2diymWOM8UQPlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 3,
    },
    {
      name: "Кухонные мойки",
      image:
        "https://s3-alpha-sig.figma.com/img/dbc2/1def/bc5805bf1df15d3f5bd30b27e6a3e3f2?Expires=1704067200&Signature=KD7cL1Eteg5I477pJSyca8rcjH0LWkYUsAlQGGSPQ~MP6hYaWgQu65MTLl9znghxChXJc0ADkpf72jCwSiC2UY-Czp6JaZ~8AMp8OYVJZktqJrcKfTuGMmzfo5zy13qsjBuDPnrj3BmxbgpTJQGdmzUBPfLNW0uaYIYz67RdZ7WvhJXPOpUYUQ~9eu-MmFgyHwTAtZ48CXa9Ito32agtl3U6dwyRCOBpRR-GkVGH6-hqROd-NkH91x4V7bUEpZRhhycEQlhz~qsORCLuB1IXBlbc3JirTwWJOukKB-7CU0b8BUiwPLAQt5gGZ8EE~Q5okEG5xsOdYxgaxsTINFeJAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 4,
    },
    {
      name: "Другие",
      image:
        "https://s3-alpha-sig.figma.com/img/1680/ca1b/ab13f25539269dc7f839629befabb751?Expires=1704067200&Signature=DfveXSWpYGgGrz~belrGR8ztLyt~iIfNxQSO6DwaTEr7FuPQudRk~Lnb-Q66O4grfrDfLXfPVlX~D96UlOeAVdYXzhL48GyW9fbnY6S1B5lovpd2FiX12~KGLHTTleg85ovZUelNFlCWwZ7dE3f4RY3nCTerGTdmq3IiFWEG0Qn2WDXZtrW9CDemriVv3-KypUPVLbm96PrkHVrJZchzIZDlrphbM-1jRkP5fRWiJBOLbdXlhbTcwY9DqWN1sfjVgZO9zpYKrx-AI8TGAdAGaKr4EAxZ11dB~URDKP8dcmZl12vAYOzTwPz8NEyqA4eAZeqQLhEN-IArMd4WtTqIQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 5,
    },
    {
      name: "Унитазы",
      image:
        "https://s3-alpha-sig.figma.com/img/fc6e/9890/9943499544b61f36d5773243b0f33138?Expires=1704067200&Signature=kiiEuvwl1FV5CYBztk6UbEHfSD-npPaZ-G2Wo~vhPEAHRYEjLznOia62l3yjOJYkpnQ7KM24pzGEE7F54us4daNpb915oCXvSEPtmW8a76EP4DihAKd4uSh~HEebqPZdGN4yTpQPSjEV1Le2ebaKozPzvdxZuFndH5xvzAMEfAUNCfLwftcISPhrV6hI0ktpDkETDM8tM5nVBhUIDj0-fDnDHfTSh-folMNcTvWiN~yzgBvB51G6wAWPv3KeoYDfHTnVJZ23OFxkqJyvhPrfS~ovaYkD34MHZwP6EJ0ArkE2KZE2vOtUr2zRAgpSelkjpVktsMsE~UGYwrNdUIPVNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 6,
    },
    {
      name: "Вытяжки для кухни",
      image:
        "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1704067200&Signature=gfyjp2cobPRt9RpDeBySuM8VIytGU5BV5rm2T8ubsjXSoFZMuXTdtUbUNjz4ULENt1PyFeG8~YKOXwEhHAs1ZoZNJ9HElCWr3gD2uQfiPwJpZxL5eizn~HDdtOR3KyyhLXM~I9hDE1JPLCeS4ZZW9eYgRwwNAmeH5nALk~C488lzJdPWTIq0974NkVqxb94GBu7fWuVhP30P8e7urS9IfGt9i1rVtEXgKbtc2ztUNIJfGFPZ47ULslhiQZteQqr37nwlFmvkiE4pC3GKQlfCRtCYyHSefk0LSkQu5r~rGaLGeqhNLTabTGviR843ORucTlSSsHEL2diymWOM8UQPlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 7,
    },
    {
      name: "Умывальники",
      image:
        "https://s3-alpha-sig.figma.com/img/a58f/d4d0/0ac159176cc9f22529ee8e7a425a4d74?Expires=1704067200&Signature=m7nQFjsjlhYexYjplhv6fVB2JbdCcpDVaVtCqOvECqoO74hxjMN-7LkwvMj7jLZtT9pIqhImuea0ixztgQn9WQkkrdxEllOcNNHZExa3VBHJ~tV-~x1gFguRQMiu4doQfwbCaJL1k8vo~1xvSHxlGgqwrTbAxW9T~4vof4~TLalff32DQZgeg9NnDWOnVpyxPn9seAm-B83YMvXI8~dm8YibJjHoIY9ecSVpq8U6IycuJoH4X34CCzgjNCBCghnm7uGQinVHhCFrMahMhwiN7Iv01otQ~pQTEtOxYpO7dh13~Ooss2~QFJf8Yq8RZs8bXCDnlDsAtiN7SNOWHn3l8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 8,
    },
    {
      name: "Полотенцесушители",
      image:
        "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1704067200&Signature=ZerRwnmj4bvfPnAL2UH3D0jy1TtGYgZHchDYKs80hl51TFiNPN6E~7nDDym8AcvbI5STfIg3ThFwvdb7uNeQ-dY4tEXXsFq1oI01UOWgorvfnmSZzns5K4aEthveZJ~CwZc2txqjVxsHWsZ-lSNP8DWIDr2fy3~d82NFodI8FvnCqcjhTArELnvOExUG51NGGTntOva-YAZsX4URBprT66uckPqsllGxQtw7ktlpYfjxE7lm9riHniV2FM7~VV5P9ihQJwr~9RzsC2ZP0yWrxIcXLaD-gyBfwtdG1S2pt7gI8gkNni8MMWlPqnivyC2ydgIwe~qhFRBIErwO9g23IQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 9,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/de9f/de2f/e9600a0452260fe3de1071dfdd40ded9?Expires=1704067200&Signature=dNPdBot2UXjB0nMgiBMLXEjz2ZzOpH~wvVjcf6jCZZJJxaSYlHc0XWKBg86fF9rr2pFhVz567x3nphOaJuLVC534s~um2n7CDG9yXSYT6PaknuZzRmTQaqaPZNKZHO7nkQD0j~FYXJXateudpCD0H69CjlalAAggF598~8sCMy37M2e2Ptn-MAvfhMTxBPQmhreeV2OpXh0pQz0PX6MjCzF75RBB~dHUTYq6bLfDNstEqCsRSYbIIyG99yfB574TheRz7GCfmhcf2q8tgPXXZX9pprMXAPNcGMn4Bn4VmEhrEH2uNY-QzgYyi7DdsKnb5zAnGYYSBpMYtGpDgoLkQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 10,
    },
    {
      name: "Душевые",
      image:
        "https://s3-alpha-sig.figma.com/img/bdbc/620f/6d4e73df2570c16de1b6dbf951dd8335?Expires=1704067200&Signature=h8WHHDjIgvsqct~VJvw9FDEqoCnJkzVOavno53LZjKLUUlfQIZA7oI0VOZFwxMiN8-6dY3W-r6KTFbtbQ0pdoRJoT-5z-OULY~sJZTWOpuZNmOFlO5k9ZoyHliYosd8~nCtLAEybDHMevHwc3GmEMNihNPeOQfV2gWtCoX7uix8rwgd9uIjZRwUqnQTpcwdHvhWDxBAj4n9hWexrwGDBeGZ-5NR-nx2c5TmfYC5JQpxEM2Q5F-Pzsvpz6GimvM3cCrmqlYPAcYJkkxRqF7v8F-O-ZWf0w4PzVKYw4L5K4SX03N3UPyEZH8sK89h84JF4ubV~Xh1ObYoGt8pTOcApmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 11,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1704067200&Signature=SldXFegO-D2IVTkRbLQz7DGzGakQeriEgeon9sAlbjwouilQht9SgUqOezT6HcitH1grkTtsKMWzVGwMf8G~zCnozHGCMRx8QnTpvDEy63lU49vM5wTdwE-owePTPB~eruerkS85km52bDS4NO~Hs82DqVWcVoA2JytIaYXjmxN9klvqANFfv1QlhovcHuxU2CdNUmG36oG~BBryn65OEmLBV0DPd6FOGCNeawtUs6rSJVCclCVXtdv2T7E0Lsh5zUrIuHR3w4dcNiUEnCWrA9MWi8kkGF-C2KN6fEXX9JqJEJte0~QHnuIIKDoZYKyjZ63GoSb0DKF8i8PbKJsN2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 12,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1704067200&Signature=SldXFegO-D2IVTkRbLQz7DGzGakQeriEgeon9sAlbjwouilQht9SgUqOezT6HcitH1grkTtsKMWzVGwMf8G~zCnozHGCMRx8QnTpvDEy63lU49vM5wTdwE-owePTPB~eruerkS85km52bDS4NO~Hs82DqVWcVoA2JytIaYXjmxN9klvqANFfv1QlhovcHuxU2CdNUmG36oG~BBryn65OEmLBV0DPd6FOGCNeawtUs6rSJVCclCVXtdv2T7E0Lsh5zUrIuHR3w4dcNiUEnCWrA9MWi8kkGF-C2KN6fEXX9JqJEJte0~QHnuIIKDoZYKyjZ63GoSb0DKF8i8PbKJsN2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 13,
    },
    {
      name: "Полотенцесушители",
      image:
        "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1704067200&Signature=ZerRwnmj4bvfPnAL2UH3D0jy1TtGYgZHchDYKs80hl51TFiNPN6E~7nDDym8AcvbI5STfIg3ThFwvdb7uNeQ-dY4tEXXsFq1oI01UOWgorvfnmSZzns5K4aEthveZJ~CwZc2txqjVxsHWsZ-lSNP8DWIDr2fy3~d82NFodI8FvnCqcjhTArELnvOExUG51NGGTntOva-YAZsX4URBprT66uckPqsllGxQtw7ktlpYfjxE7lm9riHniV2FM7~VV5P9ihQJwr~9RzsC2ZP0yWrxIcXLaD-gyBfwtdG1S2pt7gI8gkNni8MMWlPqnivyC2ydgIwe~qhFRBIErwO9g23IQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      goodsAmount: 3000,
      id: 14,
    },
  ],
};

export const navbarSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default navbarSlice.reducer;
