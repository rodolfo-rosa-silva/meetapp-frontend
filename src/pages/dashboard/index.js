import React, { Fragment } from 'react';

import Header from '../../components/Header';

import search from '../../assets/images/search.svg';

import {
  Container, Grid, BoxFilter, Input, RowMeetups, ContentRow, CardMeetup,
} from './styles';

const Dashboard = () => (
  <Fragment>
    <Header />
    <Container>
      <Grid>
        <BoxFilter>
          <img src={search} alt="search" />
          <Input type="text" placeholder="Buscar meetups" />
        </BoxFilter>
        <RowMeetups>
          <h2>Inscrições</h2>
          <ContentRow>
            <CardMeetup />
            <CardMeetup />
            <CardMeetup />
          </ContentRow>
        </RowMeetups>
        <RowMeetups>
          <h2>Próximos meetups</h2>
          <ContentRow>
            <CardMeetup />
            <CardMeetup />
            <CardMeetup />
          </ContentRow>
        </RowMeetups>
        <RowMeetups>
          <h2>Recomendados</h2>
          <ContentRow>
            <CardMeetup />
            <CardMeetup />
            <CardMeetup />
          </ContentRow>
        </RowMeetups>
      </Grid>
    </Container>
  </Fragment>
);

export default Dashboard;
