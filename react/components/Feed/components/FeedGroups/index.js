import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';

import feedGroupFragment from 'react/components/Feed/components/FeedGroups/fragments/group';

import Box from 'react/components/UI/Box';
import Text from 'react/components/UI/Text';
import FeedGroupSentence from 'react/components/Feed/components/FeedGroupSentence';
import FeedGroupItems from 'react/components/Feed/components/FeedGroupItems';

const Container = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Body = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  text-align: center;
`;

const FeedGroups = ({ groups }) => (
  <Container>
    {groups.length === 0 &&
      <Text textAlign="center" f={3}>
        No notifications yet.
      </Text>
    }

    {groups.length > 0 &&
      <Body p={6}>
        {groups.map(group => (
          <div>
            <FeedGroupSentence
              key={group.id}
              group={group}
            />
            <FeedGroupItems items={group.items} />
          </div>
        ))}
      </Body>
    }
  </Container>
);

FeedGroups.propTypes = {
  groups: PropTypes.arrayOf(propType(feedGroupFragment)).isRequired,
};

export default FeedGroups;
