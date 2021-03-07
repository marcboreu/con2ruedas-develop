import { useEffect } from 'react';
import axios from 'axios';



  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://www.motosan.es/wp-json/wp/v2/posts';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

