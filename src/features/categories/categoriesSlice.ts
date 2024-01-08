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
        "https://s3-alpha-sig.figma.com/img/70ee/62a2/715c6d5b09301972c6935e1bdca70a66?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z99Sozz7jQNOAjXpS97m5JfHRuNnJDl3G1hIgVkeETP0Qtf57FAC7B19yi-w-vODieGyWCqsum5Ai1Mx1yGx0K7lSkuyJjCLRQnZ9cLsQvogUdqHmGGb7F~kf~Y~1aFMwjOlgSTxuSekuzTZqLUXCJDR22WKewpvhFtR5UmNSfSRZvPDnL0UKtx3FP9LFCoXSZduGp~ZQYU~qF2P6GtdR4yxJrvcORiCM7AFdcZWgd5o4G1OpfyE7Z6DYuL5tKOR9kCQyIay5gEQ-1OYpnkQUlqhXIP5gaVrS4qCQFBN4IsfDN1Aq-hs2ACstVmOeqqCE4rMG-CpYuJAzxXagzMaqA__",
      goodsAmount: 3000,
      id: 1,
    },
    {
      name: "Смесители",
      image:
        "https://s3-alpha-sig.figma.com/img/5b0e/c834/439ead342ee7ab86ba3278506004ca5f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQkOvdl4Glu3DuYNsc75lWnRXzert2gYzFIEz7acgwJC~mmUmLHk5QwQ65r8Pekl~cVqp8IiJtBTqpSolFKaU1TFFanT691tLhXq5Hw4o8AzUs6kqdbr5wEPXswXPX~HnZ2z4JuGr4JDOARPVo9rl5Zc1PB0H10AX44RfBk-nQ67Qkx28v8ZtphW5BSSAm~885ZxAI~3x6i5U~EIBSQ-p0yQ0neZtDVkAfNFODS3cvIfbyF~njQhKk8aKE7gPABqz6GC~KZkccvhq-B5Z-jeSjIqrlL~6OS6VJ7E6mKOJY9HRIJCw9adI4yIBzMYe-z8IADzciuHT852Mvh~C3K5dg__",
      goodsAmount: 3000,
      id: 2,
    },
    {
      name: "Вытяжки для кухни",
      image:
        "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrcQH1EKvAIL0JdDrDTd0EE2QstBRYmTrUlqKdGtPSWbCnApLiTNVbGTiJoDeAXrKefIdeq6TJ3yF1RMzS~2z4~i25tXCqj2xEMMV5m6gdhtOTEKLJsCuIrQQtZOPsiL5kniANi6fHttmimr4tzTXwqliF7J34b2UDeXVxHb2sEXL2v3NPBDhe3iJGiN6LbfXM12KpTeFLAVwflg7PnmNUa5PfG7C8qsU0gSn7YYxyY9FgPBznc1-w7T1cNL0jXpBUU607q9-1Xuu~PNOk97kHgcho5OnuhSJTacQPre25~E0N8e14pHkBXqPDWpN-0w171mGuEA-WqOsz0mlw16Ew__",
      goodsAmount: 3000,
      id: 3,
    },
    {
      name: "Кухонные мойки",
      image:
        "https://s3-alpha-sig.figma.com/img/dbc2/1def/bc5805bf1df15d3f5bd30b27e6a3e3f2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0RNZKPV3Ye0109wNws9xm8vfk1YMmBFUnABuzTLAbWbtHSDLPf~LnPnpC-GJnbg7Ttbg5M2b8MiN78mNLjaDVxK1fU69vS9TOrwdWn222G3dBunNpw4MIThiuvUaJkWDXv~Rgz9ZL9--RvLJvRD~jcqigUiashBi1B-WLUV4d1Q-stH5CXndaE~y5ZsDEXmBDwU3m2OGv4QA2CjqsKoNNE6JNLcJu1p1XkkbsTZLSj8OwFwEG7iZZ4s636-D1q08YT-l7~akW9kiQgeyt8u5-48OHZZiyYDebuE9MhZyCfSsn00jS6NQ-nKkHuo-3fM7-uCWYfvs0oeqalvK8qinw__",
      goodsAmount: 3000,
      id: 4,
    },
    {
      name: "Другие",
      image:
        "https://s3-alpha-sig.figma.com/img/1680/ca1b/ab13f25539269dc7f839629befabb751?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A8MaXDETO5DbQo9Df~~iRpFgnez3WdUq4SDtoC0ueIPn~Z3ucK3qp2ldHQdRIe3DzR~mH~JQ50wto1FgDQiwXBy2w3Wjz49X~CSNrufEQxJAJyThVzucmTjL57NWLQC7E7sWNKPUmU9tEExWnLnnwy2OjnDEp93Zg2hITNvMW2rFjSLZVr6ffzrDKzxqeIfGd3foQRUdDJ6oHZIANhU6SQ1lgLYstxpa58Y~qJXZocZr5KWulYKbPh7wL7S8IPewe2HlzFOZ7fv6WEuHTE72qyQhCX3aBjfd5a8I3A2p0I4zMMmhyUUKnP8iO3mQR2E760QvEIGXNV4vGxnw09kBGw__",
      goodsAmount: 3000,
      id: 5,
    },
    {
      name: "Унитазы",
      image:
        "https://s3-alpha-sig.figma.com/img/fc6e/9890/9943499544b61f36d5773243b0f33138?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=af5dOyati~JMmvQp-uDV9JH5ilv74wIxptOeycxncQL9ngI-iPF2pY-PoC5bdMz8nL9yPtQ3g~SLRk5gd91hv~oPDy~3SiB6uJffYzUiXoCCPyGOCqxpmxkVanHEdesREVbv6HsVx4diXpYarKxVCJcIjtrksrFVVwcmztcjdiA2CBF8w037hROKERqvtS5S5I8rlIZEMckUOI-Bd~jVYPspTwmsR-UXmeoYEVxPJfLWEHLPerO-xpTppPbCwrCVZXlRYhZag2WaJTVqmYNTzhFUBLbPFyPmVrML2p1LYs17jYoXrPx3O9tpoeXjwEdDlYEL6HMDEKMjIjE498dkaQ__",
      goodsAmount: 3000,
      id: 6,
    },
    {
      name: "Вытяжки для кухни",
      image:
        "https://s3-alpha-sig.figma.com/img/94ef/08cc/8b28b823adb7a20bc50ff97935dfc449?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrcQH1EKvAIL0JdDrDTd0EE2QstBRYmTrUlqKdGtPSWbCnApLiTNVbGTiJoDeAXrKefIdeq6TJ3yF1RMzS~2z4~i25tXCqj2xEMMV5m6gdhtOTEKLJsCuIrQQtZOPsiL5kniANi6fHttmimr4tzTXwqliF7J34b2UDeXVxHb2sEXL2v3NPBDhe3iJGiN6LbfXM12KpTeFLAVwflg7PnmNUa5PfG7C8qsU0gSn7YYxyY9FgPBznc1-w7T1cNL0jXpBUU607q9-1Xuu~PNOk97kHgcho5OnuhSJTacQPre25~E0N8e14pHkBXqPDWpN-0w171mGuEA-WqOsz0mlw16Ew__",
      goodsAmount: 3000,
      id: 7,
    },
    {
      name: "Умывальники",
      image:
        "https://s3-alpha-sig.figma.com/img/a58f/d4d0/0ac159176cc9f22529ee8e7a425a4d74?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RzhXmXAjoFq74dot~Uje8t4HQ94hV-xx~rqTysx4uMJylwLeeXBajSmKpG7902Q6z2r0xuMixXa7B2NKj-pvyejmV7lAWYl3btxHe1zzUXGf4qWKx-Zlcqs7Ynkdd3t7PtY2-yGJFZeS814tLZimb8L7vdixxVMeufqprWAFfvbQwQexmVajgG0paWrYp3bH6eijDYTVd5Sd-2rFkY4IhbD5~FbPw8VGRXngmcPlcGCXYwsYTM0TLjW0JKAaiA0lWIswPielVCLKb1SJlBCQMlvrF2109-wxPeDTpPTFINhcfSfGTAYJiO~LAWu7pJrWjvbyiqeSIrSvo3xG6usEVA__",
      goodsAmount: 3000,
      id: 8,
    },
    {
      name: "Полотенцесушители",
      image:
        "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLgeglA-UL8SAizpLo-e~XptnB5Zt-D6KP9Pd4RuUSdTj4eyjnHp0pMobo5CgihPUUwY2vAJcQn8mIlm4HNFkkm~rw68-xqIw9ZCSaLP16lsgfDHzyee7Zh2PC6azgsM5DVBvXGn6wWsLNgHie6XGXvUibt9e-xRvHjn67gtddR7jhuw0SznpsgxHU7JpZSWbkfc6L5qON~QSfzGPPQEV7IfrnwBI4Mg62yKrf3m0A8vgwXSSwf7Bk1UWqlLFFMnHSU6DE9UWRjevCOg-EAAip-a~th7s4QJQrWU-rz6OurZ2QFjIsbpA44jwiBrDmO0mqjTu5BA03mh8-nQky-aew__",
      goodsAmount: 3000,
      id: 9,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/de9f/de2f/e9600a0452260fe3de1071dfdd40ded9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xy45ZmEnNiqeLMpQIESDO68zcCcJHD0178KN0v3JV5fB6E2KCXEF1q6Fes3UifSDMkvZ62I4GjQYLLM0Mpf6LmCv5hFmRaobzKC8036nRHv6hWLI63nh2-xAEo6YqHpkvtq6Ds060Gct4N8BoaJS-bQfzjAcXuHCU9x4lpXxeNntg0xtXt51NoBViro9KnxChQ5SRBPAxvn8RHInOnXzamvNpumDVJxU268MQMy3ebS6CgGJZltAc0wYEUCld8f432aCJUq69cMxj6l~58Who~mj8iMJiHmBqozTBxFtR5DKzKfC1qI8qDDVhCbZiaHvLTbsK07lb-Ln34pqOHXjbA__",
      goodsAmount: 3000,
      id: 10,
    },
    {
      name: "Душевые",
      image:
        "https://s3-alpha-sig.figma.com/img/bdbc/620f/6d4e73df2570c16de1b6dbf951dd8335?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jf2EjtPXa7~DAtEVwLjFgD3G0k-Fk4GiYeWBKwaqyAzt38UqInEpMiWuICPjVqz5geq08p86gu3b6GGjp3G5qHyosKLoHQBMM-RPp8F1O~reAhoZ1ua2q6LrgaUO~tQIDKChtzU3TqWAC9asT04jEQa8fQYdRK~n~VFxUoME5K7SFYbZd1N0BmtFTtfrcvPKAeEAmKZPAQL3zOwivPEdjtp1vN20hQk-4z7E34Q1pa7Hvrc6EZAbjFYPU-OJdx3xrhOz6BOgJnHMb~zqdFFeW7v24ZlktTuLJkfHTiD4wZPLouJYwWoHidBFuFukmfu2t7heEjRqBJ0JP7JnsDtAbQ__",
      goodsAmount: 3000,
      id: 11,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJIrPbTiO0Mcvy5O61whnd8jzrqt7XRT~7XTv8yY~~FVoT9tgvPy8I0EcSyeu7x~ZC9UffplJ9CcWfDeLMckFhFJxDEEY1jcE5VBFZ3aTIyGWV7PF0MqGlj7SkxmQk07GIgFm7AaMmmyCo0MuRk7IFRlBR8Ftx4hBTEmH52C53m9kVsxvpKfTlFVDP0UbpGu6pvq6CKGj8rXoNH3aS8lSlQPlmtjgomt6PP4gkROxbnHTnz6lxclY7~LQxdAK6hOtE69re5EgGP~7jYoEIHVUFaq5GNMjA9~9jGMaKPmE~CcZFUj4f6UusOPo~2Wkh-nydHOAXL2YL-2RWJZZWfgCA__",
      goodsAmount: 3000,
      id: 12,
    },
    {
      name: "Водонагреватели",
      image:
        "https://s3-alpha-sig.figma.com/img/ccfb/404e/7ed6020bc5c7ce2b8326ba2c4ea4ebe6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJIrPbTiO0Mcvy5O61whnd8jzrqt7XRT~7XTv8yY~~FVoT9tgvPy8I0EcSyeu7x~ZC9UffplJ9CcWfDeLMckFhFJxDEEY1jcE5VBFZ3aTIyGWV7PF0MqGlj7SkxmQk07GIgFm7AaMmmyCo0MuRk7IFRlBR8Ftx4hBTEmH52C53m9kVsxvpKfTlFVDP0UbpGu6pvq6CKGj8rXoNH3aS8lSlQPlmtjgomt6PP4gkROxbnHTnz6lxclY7~LQxdAK6hOtE69re5EgGP~7jYoEIHVUFaq5GNMjA9~9jGMaKPmE~CcZFUj4f6UusOPo~2Wkh-nydHOAXL2YL-2RWJZZWfgCA__",
      goodsAmount: 3000,
      id: 13,
    },
    {
      name: "Полотенцесушители",
      image:
        "https://s3-alpha-sig.figma.com/img/df96/6dcb/f0fcf971ae51c63218ba6d3e0f9cad2e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLgeglA-UL8SAizpLo-e~XptnB5Zt-D6KP9Pd4RuUSdTj4eyjnHp0pMobo5CgihPUUwY2vAJcQn8mIlm4HNFkkm~rw68-xqIw9ZCSaLP16lsgfDHzyee7Zh2PC6azgsM5DVBvXGn6wWsLNgHie6XGXvUibt9e-xRvHjn67gtddR7jhuw0SznpsgxHU7JpZSWbkfc6L5qON~QSfzGPPQEV7IfrnwBI4Mg62yKrf3m0A8vgwXSSwf7Bk1UWqlLFFMnHSU6DE9UWRjevCOg-EAAip-a~th7s4QJQrWU-rz6OurZ2QFjIsbpA44jwiBrDmO0mqjTu5BA03mh8-nQky-aew__",
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
