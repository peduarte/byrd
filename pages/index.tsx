import React from 'react';
import { theme } from '../stitches.config';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Code } from '../components/Code';

function Home() {
  return (
    <Box>
      <Box
        css={{
          px: '16vw',
          py: '16vh',
          height: '50vh',
        }}
      >
        <Text as="h1" size="6" weight="bold">
          Byrd.
        </Text>

        <Text as="h1" size="4" weight="medium" css={{ mt: '$6' }}>
          The personal design system
          <br />
          of <Link href="https://ped.ro">ped.ro</Link> and his projects.
        </Text>
      </Box>

      <Grid
        css={{
          height: '50vh',
          gridTemplateColumns: 'repeat(2, 50vw)',
        }}
      >
        {['$pink', '$blue', '$turq', '$yellow', '$orange', '$red'].map((color) => (
          <Box
            key={color}
            css={{
              bc: color,
              padding: '$4',
              '&:hover > *': { opacity: '1' },
            }}
          >
            <Text as="div" size="1" css={{ fontFamily: '$mono', opacity: 0 }}>
              token: {color}
            </Text>
          </Box>
        ))}
      </Grid>

      <Box
        css={{
          bc: '$black',
          position: 'relative',
          px: '16vw',
          py: '16vh',
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
          <Box css={{ height: '1px', bc: '$white' }} />
        </Box>
      </Box>

      <Box
        css={{
          px: '8vw',
          py: '8vh',
        }}
      >
        <Box
          css={{
            bc: '$pink',
            px: '8vw',
            py: '8vh',
            mt: '-16vh',
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
                <Text>{letter}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

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
        width: '20px',
        ml: '-20px',
        color: '$gray',
        opacity: 0,
      }}
    >
      {props.height}
    </Text>
    <Box
      css={{
        borderTop: '1px solid $white',
        boxSizing: 'content-box',
        height: props.height,
        flex: '1',
      }}
    ></Box>
  </Flex>
);
