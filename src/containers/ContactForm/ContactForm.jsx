/* eslint-disable react/destructuring-assignment */
// Ignore all ESLint issues as we have a TODO to rewrite this file
/* eslint-disable react/prop-types, no-unused-vars, @typescript-eslint/no-unused-vars, react/no-unescaped-entities */

import React from 'react';
import axios from 'axios';
import TextBlock from '../TextBlock/TextBlock';
import InputField from '../../components/InputField';
import {
    ContactFormContainer,
    InputTextArea,
    SendButton,
    StyledNotification,
} from './ContactForm.components';

const Notification = ({ type, message }) => (
    <StyledNotification className={type}>{message}</StyledNotification>
);

const sendFormInformation = async sendData =>
    axios
        .post('https://api.bytecode.nl/contact', sendData)
        .then(() => true)
        .catch(false);

const handleSend = formValues => {
    const { contents, contact, email, phone } = formValues;
    const sendData = { contact, email, phone, contents };

    return sendFormInformation(sendData);
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.getNotifications = this.getNotifications.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.state = {
            notifications: [],
            formValues: {
                contact: '',
                email: '',
                phone: '',
                contents: '',
            },
        };
    }

    getNotifications() {
        const { notifications } = this.state;
        return notifications.map(notification => (
            <Notification
                key={notification.type + toString(Math.random() * 100)}
                type={notification.type}
                message={notification.message}
                onTimeout={this.clearNotifications}
                timeout={7000}
            />
        ));
    }

    addNotification(type, message) {
        const { notifications } = this.state;
        notifications.push({
            type,
            message,
        });
        this.setState({ notifications });
    }

    clearNotifications() {
        this.setState({ notifications: [] });
    }

    handleFormChange(key, value) {
        // eslint-disable-next-line react/destructuring-assignment
        const previousFormValues = this.state.formValues;
        this.setState({
            formValues: { ...previousFormValues, [key]: value },
        });
    }

    async handleFormSubmit({ contact, email, phone, contents }) {
        if (await handleSend({ contact, email, phone, contents })) {
            this.addNotification('success', 'Je bericht is verstuurd!');
            setTimeout(() => {
                this.clearNotifications();
            }, 5000);
            this.setState({
                formValues: {
                    contact: '',
                    email: '',
                    phone: '',
                    contents: '',
                },
            });
        } else {
            this.addNotification('error', 'Iets ging fout...');
        }
    }

    renderText() {
        const { hideText } = this.props;
        if (!hideText) {
            return (
                <TextBlock
                    subtitle="We staan voor je klaar"
                    headingType="h2"
                    title="Stuur ons een berichtje"
                />
            );
        }
        return '';
    }

    render() {
        const { contact, phone, email, contents } = this.state.formValues;
        return (
            <ContactFormContainer>
                {this.renderText()}
                {this.getNotifications()}
                <form>
                    <InputField
                        id="contact"
                        placeholder="Naam"
                        type="text"
                        aria-label="contact"
                        value={contact}
                        onChange={event =>
                            this.handleFormChange('contact', event.target.value)
                        }
                        className="text-input"
                    />
                    <InputField
                        id="email"
                        placeholder="Email"
                        type="text"
                        aria-label="email"
                        value={email}
                        onChange={event =>
                            this.handleFormChange('email', event.target.value)
                        }
                        className="text-input"
                    />
                    <InputField
                        id="phone"
                        placeholder="Telefoonnummer"
                        type="text"
                        aria-label="phone"
                        value={phone}
                        onChange={event =>
                            this.handleFormChange('phone', event.target.value)
                        }
                        className="text-input"
                    />
                    <InputTextArea
                        id="contents"
                        placeholder="Bericht"
                        aria-label="message"
                        value={contents}
                        onChange={event =>
                            this.handleFormChange(
                                'contents',
                                event.target.value,
                            )
                        }
                        className="text"
                    />
                    <SendButton
                        type="submit"
                        onClick={() =>
                            this.handleFormSubmit(this.state.formValues)
                        }
                    >
                        Verzenden
                    </SendButton>
                </form>
            </ContactFormContainer>
        );
    }
}

export default ContactForm;
