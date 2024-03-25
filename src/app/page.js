import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home( {searchParams}) {
  const genre = searchParams.genre || 'fetchTrending' // if no genre specified, default is Trending
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/day'}?api_key=${API_KEY}awe&language=en-US&page=1`
    )
  if(!res.ok) {
    throw new Error('Failed to fetch dataeg')
  }
  const data = await res.json();
  const results = data.results;
  return(
      <div>
        <Results results={results}/>
      </div>
  )

};
