import Axios from 'axios';

class Pokeapi {

    constructor() {
        this.base_URL = "https://pokeapi.co/api/v2"
    }

    async listar() {
        let url = `${this.base_URL}/pokemon?offset=1&limit=200`

        return Axios.get(url).then(dados => {
            return dados
        }).catch(err => {
            throw err
        })
    }

}

export default Pokeapi;