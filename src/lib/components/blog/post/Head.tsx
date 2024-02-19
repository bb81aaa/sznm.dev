import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import DetailViewCounts from '~/lib/components/shared/DetailViewCounts';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import type { Post } from '~/lib/types/post';
import { dateFormatLong } from '~/lib/utils/dateFormat';

type BlogPostHeadProps = {
  postData: Post;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Grid gap={12} marginBottom={12}>
      <Grid gap={8}>
        <Heading as="h1" size="3xl">
          <Balancer>{postData.title}</Balancer>
        </Heading>

        <Box>
          <Text fontSize="sm" color="gray">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
            {' | '}
            <DetailViewCounts slug={`/blog/${postData.slug}`} as="span" />
          </Text>
        </Box>
      </Grid>

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />
    </Grid>
  );
};

export default BlogPostHead;
