import * as React from 'react';
import { graphql } from 'gatsby';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';

import IndexLayout from '../layouts';
import Page from '../components/shared/page';
import Container from '../components/shared/container';
import FormRow from '../components/form/form-row';
import Input from '../components/form/input';
import FormError from '../components/form/form-error';
import CtaButton from '../components/shared/cta-button';
import PageHero from '../components/shared/page-hero';

interface FormControls {
  name: string;
  email: string;
  website: string;
  password: string;
}

interface SignupPageProps {
  data: {
    site: {
      siteMetadata: {
        api: string;
      };
    };
  };
}

class SignupPage extends React.PureComponent<SignupPageProps, {}> {
  state = {
    controls: {
      // name: 'test',
      // email: 'test@test.com',
      // website: 'www.test.com',
      // password: 'test123456',
      name: '',
      email: '',
      website: '',
      password: '',
    } as FormControls,
    errors: {} as FormControls,
    valid: false,
    submitted: false,
    status: 0,
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
      this.setState({ status: 1 });
      this.xhrRegisterUser(this.state.controls)
        .then(res => {
          res === 1
            ? navigateTo('/account-created')
            : this.setState({ status: -1 });
        })
        .catch(() => {
          this.setState({ status: -1 });
        });
    } else {
      console.warn('form is invalid');
    }
  };

  xhrRegisterUser(data: FormControls) {
    return fetch(`${this.props.data.site.siteMetadata.api}user/register`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }

  runValidation(): boolean {
    const fields = this.state.controls;
    const errors = {} as FormControls;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

    if (!fields.email || !emailRegex.test(fields.email)) {
      errors.email = 'Invalid email address';
    }

    if (!fields.website) {
      errors.website = 'Invalid website';
    }

    if (!fields.password) {
      errors.password = 'Invalid password';
    } else if (fields.password.length < 8) {
      errors.password = 'Password must be longer than 8 characters';
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
    return this.state.status === 1;
  }

  render() {
    return (
      <IndexLayout title="Signup">
        <Helmet
          meta={[
            {
              name: 'robots',
              content: 'noindex',
            },
          ]}
        />
        <Page>
          <PageHero>
            <h1>Start your free 7 day trial</h1>
            Payment information required after trial ends.
          </PageHero>
          <Container className="short">
            <form>
              {/* name */}
              <FormRow>
                <label htmlFor="name">Name</label>
                <Input
                  inputId="name"
                  value={this.state.controls.name}
                  onChange={this.handleInputChange}
                  placeholder="Optional"
                  disabled={this.isControlDisabled()}
                />
              </FormRow>

              {/* email */}
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

              {/* website */}
              <FormRow className={this.getErrorFor('website')}>
                <label htmlFor="website">Website</label>
                <Input
                  inputId="website"
                  value={this.state.controls.website}
                  onChange={this.handleInputChange}
                  placeholder="www.storekick.io"
                  disabled={this.isControlDisabled()}
                />
                {this.getErrorFor('website') && (
                  <div className="ControlError">
                    {this.state.errors.website}
                  </div>
                )}
              </FormRow>

              {/* password */}
              <FormRow className={this.getErrorFor('password')}>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  inputId="password"
                  value={this.state.controls.password}
                  onChange={this.handleInputChange}
                  placeholder="&middot;&middot;&middot;&middot;&middot;&middot;"
                  disabled={this.isControlDisabled()}
                />
                {this.getErrorFor('password') && (
                  <div className="ControlError">
                    {this.state.errors.password}
                  </div>
                )}
              </FormRow>

              {this.state.status === -1 && (
                <FormError>
                  There were issues creating your account. Please try again
                  later.
                </FormError>
              )}

              <FormRow>
                <CtaButton
                  className="block knockout"
                  disabled={this.state.status === 1}
                  label="Start Trial"
                  onClick={this.onSubmitClick}
                />
              </FormRow>
            </form>

            <div style={{ textAlign: 'center', fontSize: '1rem' }}>
              Have an account?
              <a
                href="https://portal.storekick.io"
                style={{ paddingLeft: '6px' }}
              >
                Login
              </a>
            </div>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default SignupPage;

export const pageQuery = graphql`
  query SignupQuery {
    site {
      siteMetadata {
        api
      }
    }
  }
`;
