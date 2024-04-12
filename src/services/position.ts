export const getMyPosition = async () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then((position) => {
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  });
};
