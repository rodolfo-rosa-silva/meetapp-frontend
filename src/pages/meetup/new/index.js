import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MeetupNewActions } from '../../../store/ducks/meetupNew';

import {
  Container, Form, ContainerLoad, MessageError,
} from './styles';
import {
  Label,
  Input,
  Button,
  ListPreferences,
  NamePreference,
  Message,
  ImageUpload,
} from '../../../styles/forms';

import Checkbox from '../../../components/Checkbox';
import Loading from '../../../components/Loading';

import Header from '../../../components/Header';

class MeetupNew extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    messageErrorLoading: PropTypes.string.isRequired,
    preferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    meetupNewLoad: PropTypes.func.isRequired,
    meetupNewSaveRequest: PropTypes.func.isRequired,
    loadingSave: PropTypes.bool.isRequired,
    messageSave: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { meetupNewLoad } = this.props;

    meetupNewLoad();
  }

  render() {
    const {
      loading, messageErrorLoading, preferences, loadingSave, messageSave,
    } = this.props;

    return (
      <Fragment>
        <Header />
        <Container>
          <Form>
            {loading && (
              <ContainerLoad>
                <Loading />
              </ContainerLoad>
            )}
            {messageErrorLoading && <MessageError>{messageErrorLoading}</MessageError>}
            {preferences && preferences.length > 0 && (
              <Fragment>
                <Label>Título</Label>
                <Input type="text" placeholder="Digite o título do meetup" />
                <Label>Descrição</Label>
                <Input type="text" placeholder="Descreva seu meetup" />
                <Label>Imagem</Label>
                <ImageUpload
                  onClick={() => {
                    this.fileUploadRef.click();
                  }}
                >
                  <input
                    type="file"
                    ref={(ref) => {
                      this.fileUploadRef = ref;
                    }}
                  />
                </ImageUpload>
                <Label>Localização</Label>
                <Input type="text" placeholder="Onde seu meetup irá acontecer?" />
                <Label>Tema do Meetup</Label>
                <ListPreferences>
                  {preferences.map(preference => (
                    <li key={preference.id}>
                      <Checkbox value={preference.id} onChange={this.handleCheckboxChange} />
                      <NamePreference>{preference.name}</NamePreference>
                    </li>
                  ))}
                </ListPreferences>
                {messageSave && <Message>{messageSave}</Message>}
                <Button type="submit">{loadingSave ? 'Enviando...' : 'Salvar'}</Button>
              </Fragment>
            )}
          </Form>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.meetupNew.loading,
  messageErrorLoading: state.meetupNew.messageErrorLoading,
  preferences: state.meetupNew.preferences,
  loadingSave: state.meetupNew.loadingSave,
  messageSave: state.meetupNew.messageSave,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupNewActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupNew);
