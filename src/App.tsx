import { useState } from "react";
import { LoadPage } from "./components/LoadPage";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";

import {
  AdditionalPage,
  FinalPage,
  InfoPage,
  MapPage,
  StartPage,
} from "./components/Pages";

import Image from "./images/background-image.png";
import Photo from "./images/родители.jpg";

const pages = [
  { img: Image, content: <StartPage /> },
  { img: Image, content: <InfoPage /> },
  { img: Image, content: <MapPage /> },
  { img: Image, content: <AdditionalPage /> },
  { img: Photo, content: <FinalPage /> },
];

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page setLoading={setLoading} key={index} index={index} page={page} />
      ))}
    </AppStyled>
  );
};
