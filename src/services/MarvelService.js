import useHttp from "../hooks/http.hook";
const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=b9346efe5b3c9b6de90ede70286ac4df";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=3&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=4&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComic);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics:
        char.comics.items.length <= 8
          ? char.comics.items
          : char.comics.items.slice(0, 8),
    };
  };

  const _transformComic = (comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description
        ? `${comic.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
      price: comic.prices[0].price
        ? `${comic.prices[0].price}$`
        : "not available",
      language: comic.textObjects[0]?.language || "en-us",
      pageCount: comic.pageCount
        ? `${comic.pageCount} p.`
        : "No information about the number of pages",
    };
  };

  return {
    loading,
    error,
    getAllCharacters,
    getCharacterByName,
    getCharacter,
    clearError,
    getComics,
    getComic,
  };
};

export default useMarvelService;
