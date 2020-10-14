import React from 'react';
import { theme, styled, css } from '../stitches.config';
import { Badge } from '../components/Badge';
import { Box } from '../components/Box';
import { Card } from '../components/Card';
import { Code } from '../components/Code';
import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Image } from '../components/Image';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
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
          height: '100vh',
          gridAutoFlow: 'column',
        }}
      >
        {['$pink', '$blue', '$turq', '$yellow', '$orange', '$red'].map((color, i) => (
          <Box key={`${color}${i}`} css={{ bc: color }} />
        ))}
      </Grid>

      <Section>
        <Grid
          css={{
            alignItems: 'start',
            justifyContent: 'start',
            gridAutoFlow: 'column',
            gap: '$2',
          }}
        >
          <Badge>Funky</Badge>
          <Badge variant="blue">Funky</Badge>
          <Badge variant="green">Funky</Badge>
          <Badge variant="red">Funky</Badge>
          <Badge variant="yellow">Funky</Badge>
        </Grid>
      </Section>

      <Section
        css={{
          position: 'relative',
          height: '1600px',
        }}
      >
        <Text
          as="h3"
          size="7"
          weight="bold"
          css={{
            position: 'absolute',
            top: '7%',
            left: '75%',
          }}
        >
          Inspired by jazz
        </Text>
        {/* To-do: optimise the images */}
        <Image
          src="/images/moanin.jpg"
          css={{
            position: 'absolute',
            top: '56%',
            left: '37%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/stepping-into-tomorrow.jpg"
          css={{
            position: 'absolute',
            top: '14%',
            left: '32%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/time-out.jpg"
          css={{
            position: 'absolute',
            top: '48%',
            left: '9%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/thrust.jpg"
          css={{
            position: 'absolute',
            top: '28%',
            left: '19%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/the-black-saint.jpg"
          css={{
            position: 'absolute',
            top: '62%',
            left: '21%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/a-new-perspective.jpg"
          css={{
            position: 'absolute',
            top: '33%',
            left: '35%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/mingus-ah-um.jpg"
          css={{
            position: 'absolute',
            top: '24%',
            left: '58%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/true-blue.jpg"
          css={{
            position: 'absolute',
            top: '39%',
            left: '62%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/sketches-of-spain.jpg"
          css={{
            position: 'absolute',
            top: '37%',
            left: '50%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/solo-monk.jpg"
          css={{
            position: 'absolute',
            top: '20%',
            left: '47%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/winter-in-america.jpg"
          css={{
            position: 'absolute',
            top: '62%',
            left: '61%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/bitches-brew.jpg"
          css={{
            position: 'absolute',
            top: '59%',
            left: '53%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/images/head-hunters.jpg"
          css={{
            position: 'absolute',
            top: '51%',
            left: '25%',
            width: '400px',
            height: '400px',
            objectFit: 'contain',
          }}
        />
      </Section>

      <Section>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '$4',
          }}
        >
          <Card>
            <Text size="3">
              Inspired by Chris Biscardi, Joel Hooks, Shawn Wang, and others, I, too, wanted to
              dynamically generate social images for my blog posts. But the thought of creating an
              image generation API was daunting to me. Cloudinary, Lambdas, Chromium are cool, but I
              wanted something more straightforward. It was around this time that Marina introduced
              me to Microlink and its creator Kiko. Microlink was just about to release their new
              product, Microlink Cards. Being one of the alpha testers of Microlink Cards, I decided
              to take it for a spin and rely on it to generate the social images for me.
            </Text>
          </Card>
          <Card>
            <Text size="3">
              New in macOS Big Sur 11 beta, the system ships with a built-in dynamic linker cache of
              all system-provided libraries. As part of this change, copies of dynamic libraries are
              no longer present on the filesystem. Code that attempts to check for dynamic library
              presence by looking for a file at a path or enumerating a directory will fail.
              Instead, check for library presence by attempting to dlopen() the path, which will
              correctly check for the library in the cache. (62986286)
            </Text>
          </Card>
          <Card>
            <Text size="3">
              Inspired by Chris Biscardi, Joel Hooks, Shawn Wang, and others, I, too, wanted to
              dynamically generate social images for my blog posts. But the thought of creating an
              image generation API was daunting to me. Cloudinary, Lambdas, Chromium are cool, but I
              wanted something more straightforward. It was around this time that Marina introduced
              me to Microlink and its creator Kiko. Microlink was just about to release their new
              product, Microlink Cards. Being one of the alpha testers of Microlink Cards, I decided
              to take it for a spin and rely on it to generate the social images for me.
            </Text>
          </Card>
        </Grid>
      </Section>

      <Section>
        <Divider />
      </Section>

      <Section>
        <Input placeholder="yo" />
      </Section>

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
          bc: '$hiContrast',
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
              Usual 400
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
              Usual 500
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
              Usual 700
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
              Usual 800
            </Text>
            <Text
              size={{ initial: '6', bp1: '7', bp2: '8', bp3: '9' }}
              weight="regular"
              css={{
                color: '$black',
                whiteSpace: 'nowrap',
                fontFamily: '$mono',
              }}
            >
              Ballinger Mono
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
  <Box css={{ bc: '$loContrast', mb: '1px' }}>
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
          // Prevent text juddering in Safari
          '& div': {
            willChange: 'transform',
          },
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
        border: '1px solid $hiContrast',
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
        backgroundColor: '$hiContrast',
        border: '1px solid $hiContrast',

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
