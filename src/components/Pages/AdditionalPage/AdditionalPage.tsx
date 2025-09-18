import { PageContainer, Subtitle, Title } from "../styled";

export const AdditionalPage = () => (
  <PageContainer>
    <Title>Просим подтвердить свое присутствие</Title>
    <Subtitle style={{ marginTop: "32px" }}>
      Написав в WhatsApp - <a href="https://wa.me/79036795708">ссылка</a>
    </Subtitle>
    <Subtitle style={{ marginTop: "32px" }}>
      Или любым другим удобным для вас способом
    </Subtitle>
  </PageContainer>
);
