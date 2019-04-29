import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../../services/api';
import { Creators as MeetupNewActions } from '../../../store/ducks/meetupNew';

import {
  Container, Form, ContainerLoad, MessageError,
} from './styles';

import {
  Label,
  Input,
  Textarea,
  Button,
  ListPreferences,
  NamePreference,
  Message,
} from '../../../styles/forms';

import Checkbox from '../../../components/Checkbox';
import Loading from '../../../components/Loading';

import Header from '../../../components/Header';

import Upload from '../../../components/Upload';
import FileList from '../../../components/FileList';

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
    selectedPreferences: [],
    uploadedFiles: [],
  };

  componentDidMount() {
    const { meetupNewLoad } = this.props;

    meetupNewLoad();
  }

  componentWillUnmount() {
    const { uploadedFiles } = this.state;
    uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      title,
      description,
      location,
      date,
      time,
      uploadedFiles,
      selectedPreferences: preferences,
    } = this.state;

    const data = {
      title,
      description,
      location,
      datetime: `${moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD')} ${time}:00`,
      file_id: uploadedFiles.length ? uploadedFiles[0].id : 0,
      preferences,
    };

    const { meetupNewSaveRequest, loading } = this.props;

    if (!loading) meetupNewSaveRequest(data);
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

  handleUpload = (files) => {
    const fileToUpload = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    const { uploadedFiles } = this.state;

    this.setState({
      uploadedFiles: uploadedFiles.concat(fileToUpload),
    });

    fileToUpload.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    const { uploadedFiles } = this.state;

    this.setState({
      // eslint-disable-next-line max-len
      uploadedFiles: uploadedFiles.map(uploadedFile => (id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile)),
    });
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api
      .post('files', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

          this.updateFile(uploadedFile.id, {
            progress,
          });
        },
      })
      .then((response) => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.id,
          url: response.data.url,
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  handleDelete = async (id) => {
    const { uploadedFiles } = this.state;

    await api.delete(`files/${id}`);

    this.setState({
      uploadedFiles: uploadedFiles.filter(file => file.id !== id),
    });
  };

  render() {
    const {
      loading, messageErrorLoading, preferences, loadingSave, messageSave,
    } = this.props;

    const { selectedPreferences, uploadedFiles } = this.state;

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
                <Textarea
                  rows="5"
                  placeholder="Descreva seu meetup"
                  onChange={e => this.setState({ description: e.target.value })}
                />
                <Label>Imagem</Label>
                {!uploadedFiles.length && <Upload onUpload={this.handleUpload} />}
                {!!uploadedFiles.length && (
                  <FileList files={uploadedFiles} onDelete={this.handleDelete} />
                )}
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
