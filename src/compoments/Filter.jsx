import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataContext from "../Contexts/DataContext";

function Filter( {galleryBlock, filterBlock} ){

    //Filter
    const [toggle, setToggle] = useState(true)

    const { sortType, carType, priceGap, yearGap, cbAsc, cbDesc, setGalleryItems, galleryItems,
            setSortType, setCarType, setPriceGap, setYearGap, setCbAsc, setCbDesc 
          } = useContext(DataContext);

    useEffect(()=>{
        if(window.innerWidth < 800 && !toggle)
            filterBlock.current.style.height = '270px';
        else if(window.innerWidth < 1200 && !toggle)
            filterBlock.current.style.height = '170px';
        else if(!toggle)
            filterBlock.current.style.height = '125px';  
    }, [toggle, filterBlock])

    useEffect(()=>{
        if(window.innerWidth < 800 && !toggle)
            galleryBlock.current.style.height = '48.5%';
        else if(window.innerWidth < 1200 && !toggle)
            galleryBlock.current.style.height = '62.0%';
        else if(!toggle)
            galleryBlock.current.style.height = '68.0%';
        else
            galleryBlock.current.style.height = '85.8%';  
    }, [toggle, galleryBlock])

    const expandFilter = () =>{
        if(toggle){  
            filterBlock.current.style.paddingBottom = '10px';
        }
        else{  
            filterBlock.current.style.height = '0';
            filterBlock.current.style.paddingBottom = '0';
        }
        setToggle(t => !t);
    }

    const sortGallery = () =>{
        setGalleryItems(gi => [...gi].sort((a, b) => b.id - a.id));
    }

    return(
        <div className="filter-container">
            <h2 className="filter-title" id="filter_expander" onClick={expandFilter}><ins>Filter</ins> {'>>'} </h2>
            <form id="filter_form" ref={filterBlock}>
                <div className="select-1">
                    <label htmlFor="sort">Sort:</label><br/>     
                    <select id="sort" name="sort" 
                    value={sortType} onChange={(e)=>setSortType(e.target.value)}>
                        <option value="relevant">Relevant</option>
                        <option value="new">New</option>
                    </select>
                </div>
                <div className="select-2">
                    <label htmlFor="c-type">Type:</label><br/>
                    <select id="c-type" name="c-type" 
                    value={carType} onChange={(e)=>setCarType(e.target.value)}>
                        <option value="both">Both</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="nonMechanical">Non-mechanical</option>
                    </select>
                </div>
                <div className="select-3">
                    <label htmlFor="price-gap">Price:</label><br/>
                    <select id="price-gap" name="price-gap" 
                    value={priceGap} onChange={(e) => setPriceGap(e.target.value)}>
                        <option value="any">Any</option>
                        <option value="500 - 1500">500 - 1500 &euro;</option>
                        <option value="1500 - 2500">1500 - 2500 &euro;</option>
                        <option value="2500 - 3500">2500 - 3500 &euro;</option>
                        <option value="3500 - 4500">3500 - 4500 &euro;</option>
                        <option value="4500 - 6000">4500 - 6000 &euro;</option>
                    </select>
                </div>
                <div className="select-4">
                    <label htmlFor="c-age">Vehicle age:</label><br/>
                    <select id="c-age" name="c-type" 
                    value={yearGap} onChange={(e) => setYearGap(e.target.value)}>
                        <option value="any">Any</option>
                        <option value="1 - 3">1 - 3 years</option>
                        <option value="3 - 5">3 - 5 years</option>
                        <option value="5 - 10">5 - 10 years</option>
                    </select>
                </div>
                <div className="sort-option">
                    <input type="radio" id="radio-a-input" name="radio-input" value="ascend" 
                    checked={cbAsc} onChange={() => setCbAsc(c => !c)}/>
                    <label htmlFor="radio-a-input">Ascend</label><br/>
                    <input type="radio" id="radio-d-input" name="radio-input" value="descend"
                    checked={cbDesc} onChange={() => setCbDesc(c => !c)}/>
                    <label htmlFor="radio-d-input">Descend</label><br/>
                </div>
                <input type="button" name="btn-apply" id="btn-apply" value="Apply" onClick={sortGallery}/>
            </form>
        </div>
    );
}

export default Filter;