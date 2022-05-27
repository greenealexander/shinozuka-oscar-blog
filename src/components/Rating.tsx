const Rating = (props: { rating: number; name: string }) => {
  console.log(typeof props.rating);
  return (
    <div class="rating rating-md rating-half">
      {Array.from({ length: 5 }).map((_, i) => {
        const isHalfChecked = props.rating === (i * 2 + 1) * 0.5;
        const isFullChecked = props.rating === (i * 2 + 2) * 0.5;

        if (isHalfChecked) {
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

        if (isFullChecked) {
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
