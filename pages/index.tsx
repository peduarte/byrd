import React from 'react';
import { theme, styled, css } from '../stitches.config';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Container } from '../components/Container';

const Section = (props) => <Container size={{ bp1: '1', bp2: '2', bp3: '3' }} {...props} />;

function Home() {
  return (
    <Box>
      <Section
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',

          bp1: {
            minHeight: '512px',
            height: '50vh',
          },
        }}
      >
        <Text as="h1" size="6" weight="bold">
          byrd.
        </Text>

        <Text
          as="h1"
          size="4"
          weight="medium"
          css={{
            mt: '$5',
            maxWidth: '320px',
          }}
        >
          The personal design system of <Link href="https://ped.ro">ped.ro</Link> and his side
          projects.
        </Text>
      </Section>

      <Grid
        css={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',

          bp1: {
            minHeight: '512px',
            height: '50vh',
          },

          bp2: {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        {[
          '$pink',
          '$pink',
          '$pink',

          '$blue',
          '$blue',
          '$blue',

          '$turq',
          '$turq',
          '$turq',

          '$yellow',
          '$yellow',
          '$yellow',

          '$orange',
          '$orange',
          '$orange',

          '$red',
          '$red',
          '$red',
        ].map((color, i) => (
          <Box
            key={`${color}${i}`}
            css={{
              bc: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover > *': { opacity: '1' },
            }}
          >
            <Text as="div" size="1" css={{ fontFamily: '$mono', opacity: 0 }}>
              token: {color}
            </Text>
          </Box>
        ))}
      </Grid>

      <Section
        css={{
          position: 'relative',
          pt: '$6',
          pb: '$7',
        }}
      >
        <Box
          css={{
            bp2: {
              width: '50vw',
              mx: 'auto',
            },
          }}
        >
          <Space height="$1" />
          <Space height="$2" />
          <Space height="$3" />
          <Space height="$4" />
          <Space height="$5" />
          <Space height="$6" />
          <Space height="$7" />
          <Space height="$8" />
        </Box>
      </Section>

      <Box
        css={{
          bc: '$black',
          p: '$4',
          bp1: {
            p: '$5',
          },
        }}
      >
        <Box
          css={{
            bc: '$pink',
            mt: '-$5',
            bp1: {
              mt: '-$6',
            },
            bp2: {
              mt: '-$6',
            },
          }}
        >
          <Alphabet />
        </Box>
      </Box>

      <Section
        css={{
          bc: '$turq',
          py: '$6',
          overflow: 'hidden',
        }}
      >
        <FontSize size="1" />
        <FontSize size="2" />
        <FontSize size="3" />
        <FontSize size="4" />
        <FontSize size="5" />
        <FontSize size="6" />
      </Section>
    </Box>
  );
}

export default Home;

const FontSize = (props) => (
  <Flex
    css={{
      mb: '$4',
      '&:hover > *': { opacity: '1' },
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <Text size={props.size} weight="regular" css={{ whiteSpace: 'nowrap' }}>
      No need to worry 'bout tomorrow, and yesterday is gone.
    </Text>
  </Flex>
);

const Space = (props) => (
  <Flex
    css={{
      alignItems: 'center',
      height: props.height,
      ...props.css,
      '&:hover > *': { opacity: '1' },
    }}
  >
    <Text
      size="1"
      css={{
        width: '85px',
        ml: '-85px',
        color: '$gray',
        opacity: 0,
        fontFamily: '$mono',
        whiteSpace: 'nowrap',
      }}
    >
      token: {props.height}
    </Text>
    <Box
      css={{
        borderTop: '1px solid $white',
        bc: '$black',
        boxSizing: 'content-box',
        height: props.height,
        flex: '1',
      }}
    ></Box>
  </Flex>
);

const Alphabet = () => {
  const shuffledIndices = Array.from({ length: 30 }, (_, i) => i).sort(function () {
    return 0.5 - Math.random();
  });

  return (
    <Grid
      css={{
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1px',
        backgroundColor: '$black',
        border: '1px solid $black',

        bp2: {
          gridTemplateColumns: 'repeat(10, 1fr)',
        },
      }}
    >
      {shuffledIndices.map((i) => (
        <LetterBox key={`${i}`} index={i} />
      ))}
    </Grid>
  );
};

const LetterBox = (props) => {
  const letters = [
    'abcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    '1234567890',
    '!@#$%^&*(){}<>+:;-=+~/',
  ].join();

  const getRadomLetter = () => letters[Math.floor(Math.random() * letters.length)];
  const weights = ['regular', 'medium', 'semibold', 'bold'];
  const families = ['$sans', '$mono'];

  const [letter, setLetter] = React.useState(getRadomLetter());
  const [weightIndex, setWeightIndex] = React.useState(0);
  const [familyIndex, setFamilyIndex] = React.useState(0);

  React.useEffect(() => {
    let intervalId;
    setTimeout(() => {
      setLetter(getRadomLetter());
      setWeightIndex(Math.floor(Math.random() * weights.length));
      setFamilyIndex((currentIndex) =>
        currentIndex === families.length - 1 ? 0 : currentIndex + 1
      );
      intervalId = setInterval(() => {
        setLetter(getRadomLetter());
        setWeightIndex(Math.floor(Math.random() * weights.length));
        setFamilyIndex((currentIndex) =>
          currentIndex === families.length - 1 ? 0 : currentIndex + 1
        );
      }, 4500);
    }, props.index * 150);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      key={Math.random()}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bc: '$pink',
        overflow: 'hidden',

        '&::before': {
          content: '""',
          paddingTop: '100%',
          float: 'left',
        },
      }}
    >
      <Letter
        weight={weights[weightIndex] as any}
        size={{
          initial: '4',
          bp2: '6',
          bp3: '7',
        }}
        css={{
          fontFamily: families[familyIndex],
        }}
      >
        {letter}
      </Letter>
    </Box>
  );
};

const showLetter = css.keyframes({
  '0%': {
    transform: 'scale(0.5)',
  },

  '100%': {
    transform: 'scale(1)',
  },
});

const Letter = styled(Text, {
  userSelect: 'none',
  animation: `${showLetter} 800ms cubic-bezier(0.16, 1, 0.3, 1) both`,
});
