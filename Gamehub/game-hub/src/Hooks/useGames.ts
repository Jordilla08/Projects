import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}




const useGames = (gameQuery: GameQuery) => {
    console.log('GameQuery:', gameQuery); // Log the gameQuery object

    const data = useData<Game>(
        '/games', { 
        params: {
            genres: gameQuery.genre?.id, 
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder
        } }, 
        [gameQuery]
    );

    console.log('API Response:', data); // Log the API response

    return data;
};

export default useGames;