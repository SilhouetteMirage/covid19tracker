import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({
    data: { confirmed, deaths, lastUpdate },
    country,
  }) => {
    if (!confirmed) {
      return "Loading...";
    }

    const proportion = (confirmed["value"] - deaths["value"]) / confirmed["value"] * 100;

    let cardDetails = [
      {
        style: styles.infected,
        text: "Infections",
        value: confirmed.value,
        bottomText: "Total number of reported Covid-19 infections",
      },
      {
        style: styles.deaths,
        text: "Deaths",
        value: deaths.value,
        bottomText: "Number of reported Covid-19 deaths",
      },
      {
        style: styles.proportion,
        text: "Survival Rate",
        value: proportion,
        bottomText: "Percent of people who have survived Covid-19"
      },
    ];

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
          {cardDetails.map((detail, index) => (
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.Card, detail.style)}
              key={index}
              style={{ margin: "0px 30px", padding: "10px" }}
            >
              <CardContent>
                <Typography color="textPrimary" variant="h5" gutterBottom>
                  <b>{detail.text}</b>
                </Typography>
                <br />
                <Typography color="textPrimary" variant="h6"> {country} </Typography>
                <br />
                <Typography variant="h6">
                  <CountUp
                    start={0}
                    end={detail.value}
                    duration={3}
                    separator=","
                  />
                  
                </Typography>
                <br />
                <Typography color="textPrimary">Last Updated at: </Typography>
                <Typography color="textSecondary" variant="body2">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {new Date(lastUpdate).toLocaleTimeString()}
                </Typography>
                <br />
                <Typography variant="body3">{detail.bottomText}</Typography>              
                
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default Cards;