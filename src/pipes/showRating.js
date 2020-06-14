export const showRating = (rating) => {
   let result = [];
   if (rating >= 0) {
      for (let i = 1; i <= rating; i++) {
         result.push(<i className="fas fa-star" key={'i' + i} />);
      }
      if (rating !== parseInt(rating)) {
         result.push(<i className="fas fa-star-half-alt" key={'rating' + rating} />);
      }
      for (let j = 1; j <= 5 - rating; j++) {
         result.push(<i className="far fa-star" key={'j' + j} />);
      }
   }
   return result
}
