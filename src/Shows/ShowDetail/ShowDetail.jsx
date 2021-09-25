import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ShowDetail.css';
import 'font-awesome/css/font-awesome.min.css';

function ShowDetails(props) {

    // History variable to push another component on view
    const history = useHistory();

    // Function to push to List component
    const GoBack = () => {
        history.push('/');
    }

    // Function to redirect to official site of the show
    const GotoOfficialSite = (siteURl) => {
        window.open(`${siteURl}`, '_blank');
    }

    // Function to redirect to tvmaze page of the show
    const GotoTvMaze = (siteURl) => {
        window.open(`${siteURl}`, '_blank');
    }

    // Using use effect to set summary data on page load only.
    useEffect(() => {
        document.querySelector('.Summary').innerHTML =
            "<h2>Summary:</h2>" + props.location.state.show.summary;
    }, [])

    return (
        <>
            <div className="FullPageImage" style={{ backgroundColor: '#04af21ab', height: '100vh' }}>
                <div className="BackButtonContainer">
                    <button onClick={GoBack}><i class="fa fa-arrow-left"></i></button>
                </div>
                <div className="DetailsCardContainer">
                    <div className="DetailsContainer">
                        <div className="ShowImage" onClick={() => GotoOfficialSite(props.location.state.show.officialSite)}>
                            {
                                props.location.state.show.image ?
                                    <img src={props.location.state.show.image.original} alt={props.location.state.show.name} title="Go to Site" /> :
                                    <img src='' alt={props.location.state.show.name} title="Go to Site" />
                            }
                        </div>
                        <div className="ShowDetails">
                            <h1>{props.location.state.show.name} <span className="PremieredDate">| {props.location.state.show.premiered}</span></h1>
                            <h4>Rating: {
                                props.location.state.show.rating.average ?
                                    props.location.state.show.rating.average :
                                    'N/A'
                            }/10</h4>
                            <h4>Status: {props.location.state.show.status}</h4>
                            <h4>Watch On:
                                {
                                    props.location.state.show.network ?
                                        props.location.state.show.network.name :
                                        'N/A'
                                }</h4>
                            <h4>Average Runtime: {props.location.state.show.averageRuntime}</h4>
                            <h4>Genre: {props.location.state.show.genres}</h4>
                            <h4>Language: {props.location.state.show.language}</h4>
                            <br />
                            <div className="Summary"></div>
                            <br />
                            <h4>Data from <span>tvmaze &nbsp;<i onClick={() => GotoTvMaze(props.location.state.show.url)} class="fa fa-link"></i></span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowDetails;