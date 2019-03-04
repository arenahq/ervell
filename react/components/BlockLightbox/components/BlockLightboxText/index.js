import React, { PureComponent } from 'react';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';

import Box from 'react/components/UI/Box';
import Text from 'react/components/UI/Text';

import blockLightboxTextFragment from 'react/components/BlockLightbox/components/BlockLightboxText/fragments/blockLightboxText';

const Container = styled(Box)`
`;

export default class BlockLightboxText extends PureComponent {
  static propTypes = {
    block: propType(blockLightboxTextFragment).isRequired,
  }

  render() {
    const { block } = this.props;

    return (
      <Container height="100%" width="100%">
        <Box
          height="100%"
          width="100%"
          pt={6}
          px={10}
          pb={10}
          overflowScrolling
        >
          <Text
            font="serif"
            f={5}
            lineHeight={2}
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        </Box>
      </Container>
    );
  }
}