import platziMusic from "./platzi_music";

const trackServices = {};

trackServices.search = function(q) {
  const type = "track";
  return platziMusic
    .get("/search", {
      params: { q, type }
    })
    .then(res => {
      return res.data;
    });
};

trackServices.getById = function(id) {
  return platziMusic.get(`/track/${id}`).then(res => res.data)
}

export default trackServices;
