function ResultCarousel(props) {
  return (
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCarousel;

// ---pseudocode---
// LOGIC:
// use props
// card is a clickable link to the actual recipe page (nest card div in <a> tag?)