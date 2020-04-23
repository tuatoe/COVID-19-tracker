import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './image/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data: data })
    }

    handleCountryChange = async (country) => {
        //fetch data
        const fetchedData = await fetchData(country)
        //set state
        this.setState({
            data: fetchedData,
            country,
        })
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;