const Rating = (props: { rating: number; name: string }) => {
  return (
    <div class="rating rating-md rating-half">
      {Array.from({ length: 5 }).map((_, i) => {
        const isMatching = props.rating === (i * 2 + 1) * 0.5;
        const isLess = (i * 2 + 1) * 0.5 <= props.rating; 

        const isMatching1 = props.rating === (i * 2 + 2) * 0.5;
        const isLess1 = (i * 2 + 2) * 0.5 <= props.rating; 

        if (isMatching && isLess) {
          return (
            <>
              <input
                type="radio"
                name={props.name}
                class="bg-orange-400 mask mask-star-2 mask-half-1"
                checked
              />
              <input
                type="radio"
                name={props.name}
                class="bg-orange-400 mask mask-star-2 mask-half-2"
              />
            </>
          );
        }

        if (isMatching1 && isLess1) {
          return (
            <>
              <input
                type="radio"
                name={props.name}
                class="bg-orange-400 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={props.name}
                class="bg-orange-400 mask mask-star-2 mask-half-2"
                checked
              />
            </>
          );
        }

        return (
          <>
            <input
              type="radio"
              name={props.name}
              class="bg-orange-400 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name={props.name}
              class="bg-orange-400 mask mask-star-2 mask-half-2"
            />
          </>
        );
      })}
    </div>
  );
};

export default Rating;
