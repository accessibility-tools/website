import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { color } from '../shared/style';
import Switcher from '../components/layout-components/Switcher';
import Stack from '../components/layout-components/Stack';
import Center from '../components/layout-components/Center';
import TextInput from '../components/text-input/TextInput';
import { Button } from '../components/button/Button';
import ToolOverview from '../components/tool-overview/ToolOverview';
import { PAGE_LIMIT_OPTIONS_INITIAL, webCheckerAlt } from '../constants/toolData';
import SEO from '../components/SEO/SEO';
import { isUrl } from '../common/utils';
import RadioButton from '../components/radio-button/RadioButton';

const PageContainer = styled(Stack)`
  background-color: ${color.white};
`;

const Section = styled.section`
  padding: 6rem 3rem;

  &:first-child {
    background-color: ${color.extraLightPurple};
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
  }

  h5 {
    letter-spacing: 0.07rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-right: auto;
  }

  @media (min-width: 43rem) {
    padding: 8rem;
  }
`;

const IntroWrapper = styled(Switcher)`
  & > * > * :first-child {
    flex-grow: 2;
  }

  p {
    text-align: center;
    font-weight: 500;
    letter-spacing: 2.25px;
  }

  @media (min-width: 43rem) {
    h1,
    p {
      text-align: left;
      margin-right: auto;
    }
  }
`;

const IntroImg = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  width: 80%;
  transform: scaleX(-1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const RadioButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  & > div:nth-child(n+2) {
    margin-top: 5px;
  }
`;

const WebCheckerPage: React.FC = () => {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [pageLimit, setPageLimit] = useState(PAGE_LIMIT_OPTIONS_INITIAL[0].value);
  const [pageLimitOptions, setPageLimitOptions] = useState(PAGE_LIMIT_OPTIONS_INITIAL);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (router.pathname === '/checker') {
      await router.push(
        {
          pathname: '/report',
          query: { url, pageLimit },
        },
        {
          pathname: '/report'
        },
        { shallow: true }
      );
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;

    if (value && isUrl(value)) {
      setUrl(value);
      setError('');
    } else {
      setError('The requested URL can not be found. Please enter a URL starting with "http://" or "https://".');
    }
  };

  const handlePageLimitChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const currentValue = parseInt(e.currentTarget.value);
    const newPageLimitOptions = [...pageLimitOptions.map((option) => currentValue !== option.value ? {
      ...option,
      isChecked: false
    } : {
      ...option,
      isChecked: true
    })];

    if (newPageLimitOptions.length !== 0) {
      setPageLimit(currentValue);
      setPageLimitOptions(newPageLimitOptions);
    }
  };

  return (
    <>
      <SEO siteTitle="Check your website for accessibility issues"/>
      <PageContainer>
        <Section>
          <IntroWrapper threshold="40rem">
            <div>
              <Center>
                <p>LEAVE NO USERS BEHIND</p>
                <h1>Check your website for accessibility issues</h1>
              </Center>
              <Center>
                <IntroImg
                  src="/illustrations/signup-img.png"
                  alt="web checker illustration"
                />
              </Center>
            </div>
          </IntroWrapper>
          <form onSubmit={handleSubmit}>
            <Stack>
              <InputContainer>
                <TextInput
                  type="text"
                  id="url"
                  label="Enter a Website-URL"
                  placeholder="https://www.example.com"
                  errorText={error}
                  isValid={!(url.length === 0 || error)}
                  onChange={handleInputChange}
                />
              </InputContainer>
              <InputContainer>
                <h5>WHAT TO CHECK</h5>
                <RadioButtonGroupContainer>
                  {
                    pageLimitOptions.map(({ label, value, name, isChecked, hintIcon, hintText, iconColor }) => (
                      <RadioButton
                        name={name}
                        key={value}
                        isChecked={isChecked}
                        value={value}
                        onChange={handlePageLimitChange}
                        label={label}
                        hintText={hintText}
                        hintIcon={hintIcon}
                        iconColor={iconColor}
                      />
                    ))
                  }
                </RadioButtonGroupContainer>
              </InputContainer>
              <Button
                type="submit"
                text="check url"
                data-type="cta-btn"
                disabled={!!(url.length === 0 || error)}
              />
            </Stack>
          </form>
        </Section>

        <Section>
          <ToolOverview
            data={webCheckerAlt}
            type="web"
          />
        </Section>
      </PageContainer>
    </>
  );
};
export default WebCheckerPage;
