---
title: 'Tag Archive'
layout: 'layouts/feed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'blog', 'post', 'posts', 'tagList', 'tutorial']
permalink: '/tag/{{ tag | slug }}/'
---