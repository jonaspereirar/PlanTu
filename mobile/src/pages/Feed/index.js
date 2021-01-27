import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import LazyImage from '~/components/LazyImage';
import LazyImageUp from '~/components/LazyImageUp';
import LazyImageLow from '~/components/LazyImageLow';

import LikeIcon from '~/assets/TabPost/Like.png';
import CommentIcon from '~/assets/TabPost/Comment.png';
import SaveIcon from '~/assets/TabPost/Save.png';

import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  Loading,
  TabPost,
  TabIcon,
  NumberLike,
  NumberComment,
  TabIconSave,
} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=4&_page=${pageNumber}`
    );

    const totalItems = await response.headers.get('X-Total-Count');
    const data = await response.json();

    setLoading(false);
    setTotal(Math.floor(totalItems / 4));
    setPage(pageNumber + 1);

    setFeed(shouldRefresh ? data : [...feed, ...data]);
  }

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={(item) => String(item.id)}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>

            <LazyImage
              shouldLoad={viewable.includes(item.id)}
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.small[0] }}
              source={{ uri: item.image[0] }}
            />
            <LazyImageUp
              shouldLoad={viewable.includes(item.id)}
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.small[1] }}
              source={{ uri: item.image[1] }}
            />
            <LazyImageLow
              shouldLoad={viewable.includes(item.id)}
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.small[2] }}
              source={{ uri: item.image[2] }}
            />

            <TabPost>
              <TabIconSave>
                <TouchableOpacity style={{ marginLeft: 30 }}>
                  <Image source={SaveIcon} width={64} height={64} />
                </TouchableOpacity>
              </TabIconSave>
              <TabIcon>
                <TouchableOpacity style={{ marginRight: 30 }}>
                  <Image source={LikeIcon} width={64} height={64} />
                </TouchableOpacity>
                <NumberLike>{item.like}</NumberLike>
                <TouchableOpacity style={{ marginRight: 30 }}>
                  <Image source={CommentIcon} width={64} height={64} />
                </TouchableOpacity>
                <NumberComment>{item.comment}</NumberComment>
              </TabIcon>
            </TabPost>
          </Post>
        )}
      />
    </Container>
  );
}
