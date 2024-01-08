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
        "https://s3-alpha-sig.figma.com/img/9af1/7286/6bc25f324d518eceb8a1b4f263176e31?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZFWpUg6IKPjLRUAJNOBecC1uevhnyk8PbtAkI598sfYqRYP3ZFWYF3ydCuLx4s2RdMbEPQcoa9lyGEKcALSGhrUvJJe93bMnwKjWpyERUC3xjin7dFyTMIsDKazKjwrii2JhZQTUR2v8wQBL85zwvPxC7eaB6Xs~P1Uo2vwneZcgWWoTUx37V3-bBgScNWjqzyU5wpR~yV17L1Gpbxd9wTf~1kFNt~NVSnb3DLg1zIIj6abNuTe51NqP3RUQiwSfgHE1ilPuETRZxxDJqV0rBaoWwV9ERqzQq5gYlX9sdWGFhL3FEr8Kb6g3o6qsPXogc03NXqteRNMYtC05UdwbQ__",
      id: 1,
    },
    {
      name: "Акции",
      image:
        "https://s3-alpha-sig.figma.com/img/0256/5b24/95f83086e477e613e9d3d35bdb23b545?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otJqSu7VPLmVnk7-S7zeCAkQeOeSpCe31MCo0xUoYdMbIqXdY~Ee1QBB-8xJMgcsij0KlS9RfbVLGvawzcD7MHTFnnqxaFjH6kpkHeFMdSr-taaxeHrWOgLK8WPf-roU9gl~VSJ8X-y3qRa7epQhP1dYQ2~JMOJCN-V0XDZVsOw4qVyXd0WnGRqFf7tWzzWZ7hocMWgnKbBnKuWbHIGRf8Ayi5L6bd-MZ9iKBbSjFOb-RzDuSZSmxEfg41OgrBfk22o06kH2HtttLVJXlEPdWHq3GHg~zTdmfnAymtnm757dCkzH7FPjxUQC2H~8hsKiAU86UP3jD4OOgidXhY3KXw__",
      id: 2,
    },
    {
      name: "Распродажа",
      image:
        "https://s3-alpha-sig.figma.com/img/b0aa/f831/df5aaf65db088843bd8ef2090e9ba23b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxuK9Nl3Ey6L-r7wqk90~Ab3DkvWGcNtt815iHLkGn-k4m-VDLCkAQJL5CYOy~G4JTAP4-b0yVENVev~J56sHa1V-2rQOi9uTn71gyqWJbbuzEMhLBuDq3lAb4AFUv1wNn3cBq0D3YV3~fsWa6FgsaI3uLc04x8~o3l6VlSWSl7Two1FV8VDcmirakWcjYqJ3WXkAa0XOScdHnr5KlQGbW-SXgAZw2FCGNHKkETk2CmrvH1X-ln-imLQs4rR9ZJSiCyc0uJgD0vv-n07-0pg8P17EvpnlD-pj6U55D0~6cO-J4aMPSay5FaAoP-Ldxr-to~6xIDOt7DxL0z3yFY~tw__",
      id: 3,
    },
    {
      name: "Подарки",
      image:
        "https://s3-alpha-sig.figma.com/img/3825/a63f/addbc5ba6c3128af444d8f717b9cbf29?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBIMnnA-s1EzN62w-96Ly9jiD9gHpYKtFMsYs~dYRwSkMDlZL96VGIIQrZ8pWJtVi8m27LfrmZIe15rbts1Z21adSDmMLAN-8Vy7RbUGaWdN1C2ATF2zk5maSOZt4kPR0NrULRfIJ4Ihfqoo5uSL60iU3IPyuEx8OJMJTwWRhEi8Yqot2cNoxReKgYT3-yM4iDj2XG16ATtTPpiOYbvJUCzS~ilWB1CeWIivKK9~l~cWy1QFXoP4dwDT5-2Th26~wjGtEGvzmocu-yq1dIbKzTRdsET0EYTmmBPemDB7wE1400Ysk18WFQeR6DTjbdiCqw2gfS0CZIldRJOFE-xtKg__",
      id: 4,
    },
    {
      name: "Подарки",
      image:
        "https://s3-alpha-sig.figma.com/img/09c0/93f7/369ca53fff2dc8a0d5c596711dc43a4e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIBWNLvx~MHJMA4lL~SQO7Ynb9wixxp8~TDC17thouGbaB6TAY7S1nps06EiI-HK7fY6r58j1A1eleqYi5Oy7vqMO-sEBIgz3ICyjVvEPEwNAPgVsVz3ap5qfYbUPJ28a43o-2JBYTSs94Lcd6KoLiV0ybvAvfdMOUJEGLKuO1xmkvRmTKsfGA5vaC~WUGT7mCVorcZKTBi2O-A8PJL9WqGqABxAVz~AlbRTaNUBCeMUMid4mtB4cBURqxTvgaDaONdrCnth2D3AM7U3wisdvAwgc6a1DoQjCdfJJvIym3qRDcJl6H9UFxM9-VFqTTaD1OckBLkrzGRp0~93gc9meg__",
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
