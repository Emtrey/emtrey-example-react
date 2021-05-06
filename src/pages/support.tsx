import * as React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import { dimensions, breakpoints } from '../styles/variables';
import IndexLayout from '../layouts';
import Page from '../components/shared/page';
import Container from '../components/shared/container';
import FormRow from '../components/form/form-row';
import Input from '../components/form/input';
import FormError from '../components/form/form-error';
import CtaButton from '../components/shared/cta-button';
import SupportContacts from '../components/support/support-contacts';
import PageHero from '../components/shared/page-hero';

const SupportContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.lg}) {
    min-width: 100%;
    max-width: inherit;
  }
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
  > .SupportForm {
    padding-right: ${dimensions.spacer};
    flex: 1;
    @media (max-width: ${breakpoints.lg}) {
      padding-right: 0;
    }
  }
`;

enum FormStatus {
  Default,
  Success,
  Error,
  Pending,
}

interface FormControls {
  name?: string;
  email: string;
  message: string;
}

interface SupportPageProps {
  data: {
    site: {
      siteMetadata: {
        api: string;
      };
    };
  };
}

class SupportPage extends React.PureComponent<SupportPageProps, {}> {
  state = {
    controls: {
      // email: 'test@test.com',
      // message: 'hello',
      email: '',
      message: '',
    } as FormControls,
    errors: {} as FormControls,
    valid: false,
    submitted: false,
    status: FormStatus.Default,
  };

  handleInputChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    this.setState((prev: any) => ({
      controls: {
        ...prev.controls,
        [target.id]: target.value,
      },
    }));
    this.runValidation();
  };

  onSubmitClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState({ submitted: true });
    if (this.runValidation()) {
      this.setState({ status: FormStatus.Pending });
      this.xhrSendSupportEmail(this.state.controls)
        .then(res => {
          const status = res === 1 ? FormStatus.Success : FormStatus.Error;
          this.setState({ status });
        })
        .catch(() => {
          this.setState({ status: FormStatus.Error });
        });
    } else {
      console.warn('form is invalid');
    }
  };

  xhrSendSupportEmail(data: FormControls) {
    return fetch(`${this.props.data.site.siteMetadata.api}user/help`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(r => r.json());
  }

  runValidation(): boolean {
    const fields = this.state.controls;
    const errors = {} as FormControls;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

    if (!fields.email || !emailRegex.test(fields.email)) {
      errors.email = 'Invalid email address';
    }

    if (!fields.message) {
      errors.message = 'Please enter a message';
    }

    const valid = Object.keys(errors).length === 0;

    this.setState({ errors, valid });
    return valid;
  }

  getErrorFor = (control: keyof FormControls): string => {
    if (!this.state.submitted) {
      return '';
    }
    return this.state.errors[control] ? 'invalid' : 'valid';
  };

  isControlDisabled(): boolean {
    return (
      this.state.status === FormStatus.Pending ||
      this.state.status === FormStatus.Success
    );
  }

  render() {
    return (
      <IndexLayout title="Support">
        <Page>
          <PageHero>
            {this.state.status === FormStatus.Success ? (
              <>
                <h1>Thanks! We'll be in touch.</h1>
                Message has been sent successfully.
              </>
            ) : (
              <>
                <h1>Support</h1>
                We're here for you, any time.
              </>
            )}
          </PageHero>

          <SupportContainer className="short">
            <form className="SupportForm">
              <FormRow>
                <label htmlFor="name">Name</label>
                <Input
                  inputId="name"
                  value={this.state.controls.name}
                  placeholder="Optional"
                  onChange={this.handleInputChange}
                  disabled={this.isControlDisabled()}
                />
              </FormRow>

              <FormRow className={this.getErrorFor('email')}>
                <label htmlFor="email">Email</label>
                <Input
                  inputId="email"
                  value={this.state.controls.email}
                  onChange={this.handleInputChange}
                  placeholder="hi@storekick.io"
                  disabled={this.isControlDisabled()}
                />
                {this.getErrorFor('email') && (
                  <div className="ControlError">
                    {this.state.errors.email}
                  </div>
                )}
              </FormRow>

              <FormRow className={this.getErrorFor('message')}>
                <label htmlFor="message">Message</label>
                <Input
                  textarea={true}
                  inputId="message"
                  value={this.state.controls.message}
                  onChange={this.handleInputChange}
                  placeholder="How can we help?"
                  disabled={this.isControlDisabled()}
                />
                {this.getErrorFor('message') && (
                  <div className="ControlError">
                    {this.state.errors.message}
                  </div>
                )}
              </FormRow>

              {this.state.status === FormStatus.Error && (
                <FormError>
                  There were issues contacting support. Please email us
                  manually at:
                  <a href="mailto:support@storekick.io">
                    support@storekick.io
                  </a>
                </FormError>
              )}

              <FormRow>
                <CtaButton
                  className="block knockout"
                  disabled={this.isControlDisabled()}
                  label={
                    this.state.status === FormStatus.Success
                      ? 'Message Sent'
                      : 'Send It'
                  }
                  onClick={this.onSubmitClick}
                />
              </FormRow>
            </form>

            <SupportContacts />
          </SupportContainer>
        </Page>
      </IndexLayout>
    );
  }
}

export default SupportPage;

export const pageQuery = graphql`
  query SupportQuery {
    site {
      siteMetadata {
        api
      }
    }
  }
`;
