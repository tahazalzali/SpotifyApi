import {useCallback, useContext, useEffect, useState} from 'react';
import {MyContext} from '../context/context';
import {ArtistItem} from '../types/artistResult';

export default function useGetArtist({artist}) {
  const {state} = useContext(MyContext);
  const [artistResult, setArtistResult] = useState<ArtistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const getSearchResults = useCallback(async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const url = `https://api.spotify.com/v1/artists/${artist?.id}/albums`;
      await fetch(url, {
        method: 'GET',
        signal,
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then(res => {
          const result = res.json();
          return result;
        })

        .then(result => {
          setArtistResult(result.items);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [state.auth.token]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return {artistResult, loading};
}
