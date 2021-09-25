import { useState, useEffect } from 'react';
import './ShowsList.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ViewAllShows() {

    const history = useHistory();

    const [showsArr, SetShowsArr] = useState([]);

    const GoTOShowDetails = (ShowData) => {
        history.push({
            pathname: '/ShowDetail',
            state: ShowData
        })
    }
    async function loadDataFromAPI() {

        const showsData = await axios.get('https://api.tvmaze.com/search/shows?q=all');

        SetShowsArr(showsData.data);

    }

    useEffect(() => {

        loadDataFromAPI()

    }, []);

    return (
        <div className="Container">

            {
                showsArr.map((show, index) => {
                    return (
                        <div className='Card' onClick={() => GoTOShowDetails(show)}>
                            {
                                show.show.image?
                                < img src={show.show.image.medium} alt="mypic" className="cardImage" />:
                                < img src='' alt="mypic" className="cardImage" />
                            }
                            <h3 className="cardTitle">{show.show.name}</h3>
                            {
                                show.show.rating.average ?
                                    <p><b>Rating: {show.show.rating.average}</b></p> :
                                    <p><b>Rating: N/A</b></p>
                            }
                            <p><b>Runtime: {show.show.runtime} mins</b></p>
                            <p><b>Language: {show.show.language}</b></p>
                            <p><b>Genres: {show.show.genres}</b></p>
                        </div>
                    );
                })

            }

        </div>

    );
}

export default ViewAllShows;