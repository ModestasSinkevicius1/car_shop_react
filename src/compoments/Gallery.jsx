import { useContext } from "react";
import DataContext from "../Contexts/DataContext";

function Gallery({ galleryBlock }){

    const { galleryItems } = useContext(DataContext);
    console.log(galleryItems);
    return(
            <div className="gallery-container" id="gallery_container" ref={galleryBlock}>
                {galleryItems?.map((gd, i) =>
                <div key={i} className="gallery-item">
                    <img src={require('../img/car-1.jpg')} alt='vehicle'/>
                    <div className="flag-container">
                        <p className={gd.flag}></p>
                    </div>  
                    <p><b>{gd.model}</b></p>
                    <p>{gd.horse_power}rpm</p>
                    <p>{gd.initial_price}&euro;</p>
                    <hr></hr>
                    <div className="rating">
                        <div className="comment-container">
                            <i className="fa fa-comment comment"></i>
                            <p className="comment-txt">0</p>
                        </div>
                        <div className="favorite-container">
                            <i className="fa fa-star favorite"></i>
                        </div>
                        <div className="like-container">
                            <i className="fa fa-thumbs-up like"></i>
                            <p className="like-txt">0</p>
                        </div>                  
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;