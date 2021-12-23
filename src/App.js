import React from 'react';
import { Header, Cards, CountryPicker, Footer } from './Components';
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <h3>Confirmed cases of Covid-19</h3>
        <br />
        <i>(Select a country below to see its data)</i>
        <br />
        <br />
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Footer />
      </div>
    );
  }
}

export default App;
