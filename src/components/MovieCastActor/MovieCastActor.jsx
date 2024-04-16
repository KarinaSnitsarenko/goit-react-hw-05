// import css from "./MovieCastActor.module.css";

function MovieCastActor({ actor }) {
  return (
    <>
      {actor && actor.profile_path && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
        </div>
      )}
      <div>
        <p>{actor.name}</p>
        <p>
          <b>Character: </b>
          {actor.character}
        </p>
      </div>
    </>
  );
}

export default MovieCastActor;
