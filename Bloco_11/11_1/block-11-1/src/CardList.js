import React from 'react';
import Card from './Card';

function CardList() {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        featureImage="https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg"
        title="Arrival"
        bold="Why are they here? " description="- Best movie of the year!"
        link="https://www.momentumsaga.com/2016/12/resenha-a-chegada-2016.html"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="http://br.web.img2.acsta.net/r_1920_1080/pictures/16/02/03/19/11/303307.jpg"
        title="Me Before You"
        bold='Directed by: ' description="Thea Sharrock"
        bold2="Cast: " description2="Emilia Clarke, Sam Claflin, Janet McTeer"
        link="http://www.adorocinema.com/filmes/filme-230327/"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
        title="Cute Cat Staring"
        description="A beautiful little cat staring in the wood"
        link="https://course.betrybe.com/front-end/react/components"
      />
    </div>
  </div>
);
}

export default CardList;