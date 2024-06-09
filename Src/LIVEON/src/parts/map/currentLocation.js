import currentSpot from '@/assets/icons/currentSpot.svg';

const { kakao } = window;
let currentLocationMarker = null;

export function currentLocation(mapInstance, updateMapCenter, setUserLocation) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const coords = new kakao.maps.LatLng(lat, lon);

        //console.log("Current position:", lat, lon); 

        const imageSrc = currentSpot;
        const imageSize = new kakao.maps.Size(40, 40);
        const imageOption = { offset: new kakao.maps.Point(20, 40) }; 

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        if (currentLocationMarker) {
          currentLocationMarker.setMap(null);
        }

        currentLocationMarker = new kakao.maps.Marker({
          map: mapInstance,
          position: coords,
          image: markerImage,
        });

        // 지도 중심 설정
        updateMapCenter(coords);
        setUserLocation(coords);
      },
      (error) => {
        //console.error('Error occurred. Error code: ' + error.code, error.message); // 에러 로그 
      }
    );
  } else {
    //console.error('Geolocation is not supported by this browser.');
  }
}
