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

  state = {
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    file_id: 0,
    selectedPreferences: [],
  };

  componentDidMount() {
    const { meetupNewLoad } = this.props;

    meetupNewLoad();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleCheckboxChange = (event) => {
    const { selectedPreferences } = this.state;
    // Id da preferencia que vem do checkbox clicado
    const currentId = parseInt(event.target.value, 10);

    let currentPreferences = selectedPreferences;

    /**
     * Tenho certeza que existe um maneira fazer isso de uma forma menos verbosa
     * Infelizmente so consegui chegar no resultado desejado assim
     * Gostaria de uma observacao aqui para ver como fazer isso de outra forma
     */
    if (selectedPreferences.length > 0) {
      selectedPreferences.forEach((id) => {
        if (id !== currentId) {
          if (!currentPreferences.includes(currentId)) currentPreferences.push(currentId);
        } else {
          currentPreferences = currentPreferences.filter(idLocal => idLocal !== currentId);
        }
      });
    } else {
      currentPreferences.push(currentId);
    }
    this.setState({ selectedPreferences: currentPreferences });
  };

  render() {
    const {
      loading, messageErrorLoading, preferences, loadingSave, messageSave,
    } = this.props;

    const { selectedPreferences } = this.state;

    return (
      <Fragment>
        <Header />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            {loading && (
              <ContainerLoad>
                <Loading />
              </ContainerLoad>
            )}
            {messageErrorLoading && <MessageError>{messageErrorLoading}</MessageError>}
            {preferences && preferences.length > 0 && (
              <Fragment>
                <Label>Título</Label>
                <Input
                  type="text"
                  placeholder="Digite o título do meetup"
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <Label>Descrição</Label>
                <Input
                  type="text"
                  placeholder="Descreva seu meetup"
                  onChange={e => this.setState({ description: e.target.value })}
                />
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
                <Input
                  type="text"
                  placeholder="Onde seu meetup irá acontecer?"
                  onChange={e => this.setState({ location: e.target.value })}
                />
                <Label>Data</Label>
                <Input
                  type="text"
                  mask="99/99/9999"
                  alwaysShowMask
                  onChange={e => this.setState({ date: e.target.value })}
                />
                <Label>Hora</Label>
                <Input
                  type="text"
                  mask="99:99"
                  alwaysShowMask
                  onChange={e => this.setState({ time: e.target.value })}
                />
                <Label>Tema do Meetup</Label>
                <ListPreferences>
                  {preferences.map(preference => (
                    <li key={preference.id}>
                      <Checkbox
                        value={preference.id}
                        onChange={this.handleCheckboxChange}
                        checked={selectedPreferences.includes(preference.id)}
                      />
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
