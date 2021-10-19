
class MarvelService {
    _baseUrl = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=0cba52ee04152e9c90617656bc53ec64'
    getResource = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResource(`${this._baseUrl}characters?limit=9&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._baseUrl}characters/${id}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    }
    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}



export default MarvelService;
