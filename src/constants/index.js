import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Evandro Thalles',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'search',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Your library',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'your playlist',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Popular Song',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'library',
    path: '/library'
  },
  {
    title: 'Podcast',
    path: '/library/podcasts'
  },
  {
    title: 'artists',
    path: '/library/artists'
  },
  {
    title: 'Albums',
    path: '/library/albums'
  }
]