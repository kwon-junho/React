import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
// import queryString from 'query-string';

const About = () => {
    const { name } = useParams();
    // const { searchParams } = useSearchParams();
    const location = useLocation();
    const queryString = location.search;
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(queryString);
    console.log(searchParams.get('detail'));
    console.log(setSearchParams);
    return (
        <div>
            {/* <h2>About {match.params.name}</h2> */}
            <h2>About {name}</h2>
        </div>
    );
};

export default About;