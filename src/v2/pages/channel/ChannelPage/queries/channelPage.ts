import gql from 'graphql-tag'

import channelMetadataFragment from 'v2/components/ChannelMetadata/fragments/channelMetadata'
import channelContentsFragment from 'v2/components/ChannelContents/fragments/channelContents'
import { channelContentsFilterFragment } from 'v2/components/ChannelContentsFilter/fragments/channelContentsFilter'
import { channelPageMetaTagsFragment } from 'v2/pages/channel/components/ChannelPageMetaTags/fragments/channelPageMetaTags'

export default gql`
  query ChannelPage($id: ID!) {
    channel(id: $id) {
      ...ChannelMetadata
      ...ChannelContents
      ...ChannelContentsFilter
      ...ChannelPageMetaTags
    }
  }
  ${channelMetadataFragment}
  ${channelContentsFragment}
  ${channelContentsFilterFragment}
  ${channelPageMetaTagsFragment}
`