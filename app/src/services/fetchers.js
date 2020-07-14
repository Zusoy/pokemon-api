const ENDPOINT = "http://localhost:3001";

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

/**
 * Fetch given endpoint of the API
 * 
 * @param {String} endpoint 
 * @param {String} method
 * @param {Object} data
 */
const pokeFetch = async (endpoint, method = HTTP_METHODS.GET, data = {}) => {
    const url = ENDPOINT + endpoint;
    let options = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    if (
        method === HTTP_METHODS.POST 
        || method === HTTP_METHODS.PUT 
        || method === HTTP_METHODS.PATCH
    ) {
        options = {
            ...options,
            body: JSON.stringify(data)
        };
    }

    return await fetch(url, options).then(response => response.json());
}

/**
 * Fetch all Trainers
 * 
 * @return {Promise<Array>}
 */
export const fetchAllTrainers = () => 
    pokeFetch(
        "/humans", 
        HTTP_METHODS.GET
    );

/**
 * Create Trainer
 * 
 * @param {Object} trainer
 * @param {String} trainer.name
 * @param {String[]} trainer.boxes
 */
export const createTrainer = trainer => 
    pokeFetch(
        "/humans", 
        HTTP_METHODS.POST, 
        trainer
    );

/**
 * Delete a Trainer
 * 
 * @param {Number} trainerId 
 */
export const deleteTrainer = trainerId => 
    pokeFetch(
        `/humans/${trainerId}`, 
        HTTP_METHODS.DELETE
    );

/**
 * Update a Trainer
 * 
 * @param {Number} trainerId 
 * @param {Object} trainer
 * @param {String} trainer.name 
 * @param {String[]} trainer.boxes
 */
export const updateTrainer = (trainerId, trainer) => 
    pokeFetch(
        `/humans/${trainerId}`, 
        HTTP_METHODS.PUT, 
        trainer
    );

/**
 * Fetch all Pokemons
 * 
 * @return {Promise<Array>}
 */
export const fetchAllPokemons = () => 
    pokeFetch(
        "/pokemons", 
        HTTP_METHODS.GET
    );

/**
 * Create a new Pokemon
 * 
 * @param {Object} pokemon
 * @param {String} pokemon.name
 * @param {String} pokemon.type
 * @param {Number} pokemon.box 
 */
export const createPokemon = pokemon =>
    pokeFetch(
        "/pokemons",
        HTTP_METHODS.POST,
        pokemon
    );

/**
 * Delete a Pokemon
 * 
 * @param {Number} pokemonId 
 */
export const deletePokemon = pokemonId => 
    pokeFetch(
        `/pokemons/${pokemonId}`,
        HTTP_METHODS.DELETE
    );

/**
 * Update a Pokemon
 * 
 * @param {Number} pokemonId 
 * @param {Object} pokemon
 * @param {String} pokemon.name
 * @param {String} pokemon.type
 * @param {Number} pokemon.box 
 */
export const updatePokemon = (pokemonId, pokemon) =>
    pokeFetch(
        `/pokemons/${pokemonId}`,
        HTTP_METHODS.PUT,
        pokemon
    );

/**
 * Fetch all Boxes
 * 
 * @return {Promise<Array>}
 */
export const fetchAllBoxes = () => 
    pokeFetch(
        "/boxes", 
        HTTP_METHODS.GET
    );

/**
 * Create a new Box
 * 
 * @param {Object} box
 * @param {Number} box.owner
 * @param {Number[]} box.pokemons
 */
export const createBox = box => 
    pokeFetch(
        "/boxes",
        HTTP_METHODS.POST,
        box
    );
    
/**
 * Delete a Box
 * 
 * @param {Number} boxId 
 */
export const deleteBox = boxId => 
    pokeFetch(
        `/boxes/${boxId}`,
        HTTP_METHODS.DELETE
    );

/**
 * Update a Box
 * 
 * @param {Number} boxId 
 * @param {Object} box
 * @param {Number} box.owner
 * @param {Number[]} box.pokemons
 */
export const updateBox = (boxId, box) => 
    pokeFetch(
        `/boxes/${boxId}`,
        HTTP_METHODS.PUT,
        box
    );
