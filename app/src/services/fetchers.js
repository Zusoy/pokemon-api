const ENDPOINT = "http://localhost:3000";

/**
 * Fetch All Trainers
 * 
 * @param {String} endpoint 
 * @param {CallableFunction} fetch 
 */
export const fetchAllTrainers = async (endpoint, fetch) => {
    const result = await fetch(endpoint);
    return result;
}
