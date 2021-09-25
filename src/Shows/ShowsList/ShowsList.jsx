import { useState, useEffect } from 'react';
import './ShowsList.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ViewAllShows() {

    // History variable to push another component on view
    const history = useHistory();

    // State variable to store data
    const [showsArr, SetShowsArr] = useState([]);

    // Function to push to details component
    const GoTOShowDetails = (ShowData) => {
        history.push({
            pathname: '/ShowDetail',
            state: ShowData
        })
    }

    // Function to fetch data and assign it to showArr 
    async function loadDataFromAPI() {

        try {
            const showsData = await axios.get('https://api.tvmaze.com/search/shows?q=all');

            SetShowsArr(showsData.data);

        } catch (error) {

        }

    }


    // Using useEffect to load data from api only once
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
                                show.show.image ?
                                    < img src={show.show.image.medium} alt="mypic" className="cardImage" /> :
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