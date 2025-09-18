import { PageContainer, Subtitle, Title } from "../styled";
import { Wrapper } from "./styled";

export const StartPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Title>Дорогие друзья!</Title>
        <Subtitle>{`В жизни так сложно найти свою половинку ${":)"} у нас получилось!!!`}</Subtitle>
        <Subtitle style={{ marginTop: "8px" }}>
          Приглашаем вас на праздничный ужин, разделить с нами это радостное
          событие с{" "}
          <span style={{ fontSize: "40px", color: "#36827F" }}>20</span>-летним
          стажем!
        </Subtitle>
      </Wrapper>
    </PageContainer>
  );
};
