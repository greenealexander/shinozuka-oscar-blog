interface RatingProps {
  rating: number;
  name: string;
}

const Rating = (props: RatingProps) => {
  return (
    <div class="rating rating-md rating-half">
      {Array.from({ length: 10 }).map((_, i) => {
        const star = i * 0.5 + 0.5;
        const isMatching = props.rating === star;
        const halfClass = star % 1 === 0 ? "mask-half-2" : "mask-half-1";

        if (isMatching) {
          return (
            <input
              type="radio"
              name={props.name}
              class={`bg-orange-400 mask mask-star-2 ${halfClass}`}
              checked
            />
          );
        }

        return (
          <input
            type="radio"
            name={props.name}
            class={`bg-orange-400 mask mask-star-2 ${halfClass}`}
          />
        );
      })}
    </div>
  );
};

export default Rating;
