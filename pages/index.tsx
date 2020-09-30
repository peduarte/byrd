import React from 'react';
import { theme, styled, css } from '../stitches.config';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Container } from '../components/Container';
import Marquee from 'react-double-marquee';

const Section = (props) => <Container size={{ bp1: '1', bp2: '2', bp3: '3' }} {...props} />;

function Home() {
  return (
    <Box>
      <Section
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '99vh',

          bp1: {
            minHeight: '512px',
            height: '99vh',
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
          gap: '1px',
          height: '100vh',
          // gridTemplateColumns: 'repeat(6, 1fr)',
        }}
      >
        {['$pink', '$blue', '$turq', '$yellow', '$orange', '$red'].map((color, i) => (
          <Box key={`${color}${i}`} css={{ bc: color }} />
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
          bc: '$loContrast',
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

      <Box
        css={{
          bp3: {
            display: 'flex',
          },
        }}
      >
        <Box
          css={{
            bc: '$turq',
            bp3: {
              width: '50vw',
            },
          }}
        >
          <Flex
            css={{
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '$4',
              overflow: 'hidden',

              bp2: {
                padding: '$5',
              },

              bp3: {
                padding: '$5',
              },
            }}
          >
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                marginBottom: '$4',
                bp2: { marginBottom: '$5' },
                bp3: { marginBottom: 0 },
              }}
            >
              System 400
            </Text>
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              weight="medium"
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                marginBottom: '$4',
                bp2: { marginBottom: '$5' },
                bp3: { marginBottom: 0 },
              }}
            >
              System 500
            </Text>
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              weight="semibold"
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                marginBottom: '$4',
                bp2: { marginBottom: '$5' },
                bp3: { marginBottom: 0 },
              }}
            >
              System 700
            </Text>
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              weight="bold"
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                marginBottom: '$4',
                bp2: { marginBottom: '$5' },
                bp3: { marginBottom: 0 },
              }}
            >
              System 800
            </Text>
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              weight="bold"
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                fontFamily: '$mono',
              }}
            >
              Fira Code 400
            </Text>
          </Flex>
        </Box>
        <Box
          css={{
            pt: '1px',
            overflow: 'hidden',
            bc: '$turq',

            bp3: {
              width: '50vw',
            },
          }}
        >
          <FontSize size="1">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="2" direction="left">
            So come fly with me Cause we're flying high Flying high to the sky Flying high through
            the sky Flying is our game It's like a high Soaring through the Clouds in the sky
          </FontSize>
          <FontSize size="3">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="4" direction="left">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="5">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="6" direction="left">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="7">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
          <FontSize size="8" direction="left">
            Places and spaces I've been. Oh the places and spaces I've been. Down on the west-side.
            Where all the girls hide. All you have to do is east-side. What you gonna buy?
          </FontSize>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

const FontSize = ({ children, direction = 'left', ...props }) => (
  <Box css={{ bc: '$hiContrast', mb: '1px' }}>
    <Box
      css={{
        textAlign: 'center',
      }}
    >
      <Text
        as="div"
        size={props.size}
        weight="regular"
        css={{
          lineHeight: 'clamp(32px, 3em, 150px)',
          // lineHeight: '3em',
          fontFamily: props.family,
          whiteSpace: 'nowrap',
        }}
      >
        <Marquee direction={direction} speed={0.002} childMargin={4}>
          {children}
          {/* {Array.from({ length: 10 }, () => (
            <span aria-hidden> {children} </span>
          ))} */}
        </Marquee>
      </Text>
    </Box>
  </Box>
);

const Space = (props) => (
  <Flex
    css={{
      height: props.height,
      ...props.css,
    }}
  >
    <Box
      css={{
        borderTop: '1px solid $hiContrast',
        bc: '$loContrast',
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
        backgroundColor: '$loContrast',
        border: '1px solid $loContrast',

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
    transform: 'scale(0.4)',
  },

  '100%': {
    transform: 'scale(1)',
  },
});

const Letter = styled(Text, {
  userSelect: 'none',
  animation: `${showLetter} 850ms cubic-bezier(0.16, 1, 0.3, 1) both`,
  color: '$black',
});
