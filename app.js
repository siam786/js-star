const ratingStarts = [...document.getElementsByClassName("rating__star")];

function startExcute(stars) {
    const starClassActive = "rating__star fa fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {

        star.onclick = () => {
            i = stars.indexOf(star);
            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            }
            else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        }

    }

)};

startExcute(ratingStarts);

