import { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapContainer = styled.div`
  width: 500px;
  height: 400px;
`;

export default function MabView() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return <MapContainer id="map" />;
}
