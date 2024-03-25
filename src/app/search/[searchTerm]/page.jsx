import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function searchPage({ params }) {
    const searchTerm = params.searchTerm;
    const res = await fetch (
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=1&include_adult=false`
    );

    const data = await res.json();
    const results = data.results;

    return (
        <div>
            {results && results.length === 0 &&
            <h1 className="text-center pt-6">No results found.</h1>}
            {results && results.length > 0 && (
                <Results results={results}/>
            )}
        </div>
    )
}
