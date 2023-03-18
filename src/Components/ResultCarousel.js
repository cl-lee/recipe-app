function ResultCarousel(props) {
  // return (
  //   <div class="card">
  //     <div class="card-content">
  //       <div class="media">
  //         <div class="media-left">
  //           <figure class="image is-96x96">
  //             <img
  //               src={props.recipe.image}
  //               alt={props.recipe.label}
  //             />
  //           </figure>
  //         </div>
  //         <div class="media-content">
  //           <p class="title is-4">{props.recipe.label}</p>
  //           <div class="content">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
  //             nec iaculis mauris.
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default ResultCarousel;

// ---pseudocode---
// LOGIC:
// use props
// card is a clickable link to the actual recipe page (nest card div in <a> tag?)
// to render:
// image: 
// props.recipe.images['THUMBNAIL'].url

// dishname:
// props.recipe.label

// time needed:
// props.recipe.totalTime

// number of ingredients:
// props.recipe.ingredients.length

// servings:
// props.recipe.ingredients.yield

// meal type:
// "Best for: " 
// props.recipe.ingredients.mealType