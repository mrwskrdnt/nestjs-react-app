/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Surface, FormDrawer, FieldDrawer, RegularForm } from 'radiant-ui';
import { useAuth } from '../../effects/auth';
import * as S from './login-form.styles'

const LoginForm: React.FC = () => {
  const { state, login } = useAuth();

  const formAction = React.useCallback(values => {
    login(values);
  }, [login]);

  return (
    <Surface css={css(S.surface)}>
      <FormDrawer
        initialValues={{
          username: '',
          password: '',
        }}
      >
        {({ handleSubmit }) => (
          <RegularForm large onSubmit={handleSubmit(formAction)}>
            <RegularForm.FieldSet>
              <FieldDrawer name="username">
                {fieldProps => (
                  <RegularForm.TextField
                    name={fieldProps.name}
                    placeholder="Username"
                    onFocus={fieldProps.onFocus}
                    onBlur={fieldProps.onBlur}
                    onChange={fieldProps.onChange}
                    value={fieldProps.value}
                    focused={fieldProps.isFocused}
                    error={fieldProps.error}
                  />
                )}
              </FieldDrawer>
              <FieldDrawer name="password">
                {fieldProps => (
                  <RegularForm.PasswordField
                    name={fieldProps.name}
                    placeholder="Password"
                    onFocus={fieldProps.onFocus}
                    onBlur={fieldProps.onBlur}
                    onChange={fieldProps.onChange}
                    value={fieldProps.value}
                    focused={fieldProps.isFocused}
                    error={fieldProps.error}
                  />
                )}
              </FieldDrawer>
            </RegularForm.FieldSet>
            <RegularForm.PrimaryButton type="submit">
              Login
            </RegularForm.PrimaryButton>
            {state.error && (
              <RegularForm.Message variant="error">{state.error}</RegularForm.Message>
            )}
          </RegularForm>
        )}
      </FormDrawer>

    </Surface>
  )
};

export default LoginForm;