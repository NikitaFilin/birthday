import { MapStyled, MapWrapper } from "./styled";

export const GoogleMap = () => {
  return (
    <MapWrapper>
      <MapStyled
        title="maps"
        src="https://yandex.ru/map-widget/v1/?ll=37.495569%2C55.855561&mode=poi&poi%5Bpoint%5D=37.492651%2C55.855564&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D197224926360%26yclid%3D177707748454039551&z=16.45"
      />
    </MapWrapper>
  );
};
