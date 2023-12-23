import { createSlice } from "@reduxjs/toolkit";
import { TStory } from "types";

interface StoriesState {
  stories: Array<TStory>;
}

const initialState: StoriesState = {
  stories: [
    {
      name: "Скидки",
      image:
        "https://s3-alpha-sig.figma.com/img/9af1/7286/6bc25f324d518eceb8a1b4f263176e31?Expires=1704067200&Signature=BJNPiBoYcUrUfBt9cyg46wY-8SK3qUIL2F50vaZHPKPCSQT99VVi7wzvj76QrUJjzP~az60y7S-mGOZ1s16SekrRmmHYszjaojzjWbASSB-dZLrmwlFJVCnFE0bCK~---gSkjOWjRSOYPB~VTG5iYBuAzDCcQauVv2~BiCBqr-~zp9Ls2A~K1VtnSl4OmPCjDk1L5JhIf0WXy9Fstib3P1UCEnZ2MEpP7Wjsk50FTBcNG4YAqNM5abMDoAes84RI~kh1Rx-LNzN~b~ngkPFhWnFJOlmJTLr63-R8Y8mAN6AodviS8gkLHzoF2w69-U4MqJ4iN1ZWyr0xCuR0-YZZ9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 1,
    },
    {
      name: "Акции",
      image:
        "https://s3-alpha-sig.figma.com/img/0256/5b24/95f83086e477e613e9d3d35bdb23b545?Expires=1704067200&Signature=RlKY23uSPArkTGrUWlSgGRV0miSB9cQTsDD0wRwCu4LS052ACGeHckGBg1PXkI9BhoNTUSYT3YTav-cLroHfN9fKp1lbdsAx7IN6SDhc4IPc~UevIGStuXZLstu~9mccJJblAA8gpuDH0DqEr490vdvg5In31TSp14Mu8RpWq6I-ef9VFEHJ9hS91H~nrAN8oUlWTAY3T2CAQMqRNNS34A334L6mmP4ypSvOzOL0eGNa4e64BbblrhzCEvCKjn6vu8P5XO6xIoUy-Nd1sz2ReaoFxWAb9hUA5uKtzZ1jVlwhbB9bnuwXlg5mahQM-xMmjkcEyI8ve8R2LvR2Kl5tYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 2,
    },
    {
      name: "Распродажа",
      image:
        "https://s3-alpha-sig.figma.com/img/b0aa/f831/df5aaf65db088843bd8ef2090e9ba23b?Expires=1704067200&Signature=YIlKKeXjZFRXK36YGE~dFLf7mpymjBWN6DuIq1LLMPVv2XhFzeWxyfrvrfUz25l4Y6fco2cxzSabV~CXmcF4-qifZjHueT3O9u-fuuvqfyVHunMe2ngATL0xo~9jHYtrR1HfJiOelaIPCnDCZqVeK9NL0eygspDZdrX3E7FBMDG32V426bNUsFCdhktyl2Ewkq3Ll6VRBsZnsoIRua6Jw1bMmmI34A~PcFARVdsbmRlbJPoE8SL4b9Hfb56Eh6RwHayedWXb~jEaZdo4cVEPmErMgBFf4t4cCEqsaZXw1YF52AXQJPu8dTAbfY71rSGsAImtsCT9Dsj5jx1Vd5zsgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 3,
    },
    {
      name: "Подарки",
      image:
        "https://s3-alpha-sig.figma.com/img/3825/a63f/addbc5ba6c3128af444d8f717b9cbf29?Expires=1704067200&Signature=g4l5ZARPt10r~WD40gn7j0EDWmL1MiUi5Izv2VuMWwqbUU4nh5fIM8369tSqs8e6Wc8oh5HU8JQW8XNcxINP8gOGW-LxszFpxTxq6CmeTfTnIqLYs5oQXMZ7yp~u~~HdHxRCtq-Bztxdqrv6C0xz1PggKg8tQctu9~EOl3F05ZDLl~BJtdXOZfD1Zc2sq~wCm0dtu0oTh2gQfIFnyfZ7pcast~wTLIZeU6CNfe9ckof77q9kp7AybHxR7UFJKAgHizqD84AQlwDh3LoiGXVCaNUud2rJmDCQJ~HHQrL0JRP70IKeiKNmQlkaLoqivu3d6H127OXHpV~zGFj2HiG3ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 4,
    },
    {
      name: "Подарки",
      image:
        "https://s3-alpha-sig.figma.com/img/09c0/93f7/369ca53fff2dc8a0d5c596711dc43a4e?Expires=1704067200&Signature=jP-o6xQO18Nli8cS58WAB3XaHH7Mkd1Bsdduhw-eYtDhd1SZTX7cK0AKWrFOlyuMrwF1mJOsSiw4Z9JgJgW0Q88hKXuZ1~Reml9-v0fBGt7uLECHlbAFSdbP8uV~5TqqwEh6pi1XBGuXlkrKRMT23azvMGLeG1P80idUxiOuzJnUXTLnppzMcv794PDkuWkZ685LBeqYWK-~AjgPIWDbXLBOopJK9bJKctSvpYr3-0cWhqyJfiSHcBaAY4w~jM4K0GrXXwDMpVsqG9seFWxX8ePbDF~rUGZrx9uOZSXSgln3c0ZPE9oFs4nAJmZMv8pkp4FJZNZZpFlc5iybcgj2RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      id: 5,
    },
    {
      name: "",
      image: "",
      id: 6,
    },
    {
      name: "",
      image: "",
      id: 7,
    },
    {
      name: "",
      image: "",
      id: 8,
    },
    {
      name: "",
      image: "",
      id: 9,
    },
    {
      name: "",
      image: "",
      id: 10,
    },
    {
      name: "",
      image: "",
      id: 11,
    },
    {
      name: "",
      image: "",
      id: 12,
    },
    {
      name: "",
      image: "",
      id: 13,
    },
    {
      name: "",
      image: "",
      id: 14,
    },
  ],
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
});

export default storiesSlice.reducer;
