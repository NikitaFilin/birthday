import { PageContainer, Subtitle, Title } from "../styled";
import { Wrapper } from "./styled";

export const StartPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Title>Дорогие друзья!</Title>
        <Subtitle>
          Мы с огромным удовольствием приглашаем вас на праздник в честь
        </Subtitle>
        <Subtitle>
          <span style={{ fontSize: "40px", color: "#36827F" }}>20</span>
          -летия
        </Subtitle>
        <Subtitle>нашей свадьбы</Subtitle>
      </Wrapper>
    </PageContainer>
  );
};
