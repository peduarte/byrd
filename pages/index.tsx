import React from 'react';
import { theme, styled } from '../stitches.config';
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
        <Box>
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

      <Container css={{ mb: '$4' }}>
        <Container
          size={{ bp2: '2' }}
          css={{
            bc: '$pink',
            py: '8vh',
            mt: '-$6',
            position: 'relative',
          }}
        >
          <Grid
            css={{
              gridTemplateColumns: 'repeat(9, 1fr)',
              gap: '1px',
              backgroundColor: '$black',
              border: '1px solid $black',
            }}
          >
            {'abcdefghijklmnopqrstuvwxyz '.split('').map((letter) => (
              <Box
                key={letter}
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
                <Text weight="semibold" size={{ bp1: '4', bp2: '7', bp3: '8' }}>
                  {letter}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Container>

      <Box
        css={{
          bc: '$turq',
          px: '16vw',
          py: '16vh',
          height: '100vh',
        }}
      >
        <Box
          css={{
            mb: '$4',
            bp1: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box css={{ mr: '$3', whiteSpace: 'nowrap' }}>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              Inter
            </Text>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              weight: regular
            </Text>
          </Box>
          <Text as="div" size="6" weight="regular">
            No need to worry 'bout tomorrow, and yesterday is gone.
          </Text>
        </Box>
        <Box
          css={{
            mb: '$4',
            bp1: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box css={{ mr: '$3', whiteSpace: 'nowrap' }}>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              Inter
            </Text>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              weight: medium
            </Text>
          </Box>
          <Text as="div" size="6" weight="medium">
            No need to worry 'bout tomorrow, and yesterday is gone.
          </Text>
        </Box>
        <Box
          css={{
            mb: '$4',
            bp1: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box css={{ mr: '$3', whiteSpace: 'nowrap' }}>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              Inter
            </Text>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              weight: semibold
            </Text>
          </Box>
          <Text as="div" size="6" weight="semibold">
            No need to worry 'bout tomorrow, and yesterday is gone.
          </Text>
        </Box>
        <Box
          css={{
            mb: '$4',
            bp1: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box css={{ mr: '$3', whiteSpace: 'nowrap' }}>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              Inter
            </Text>
            <Text size="1" css={{ mr: '$4', bp1: { display: 'block' } }}>
              weight: bold
            </Text>
          </Box>
          <Text as="div" size="6" weight="bold">
            No need to worry 'bout tomorrow, and yesterday is gone.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

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
