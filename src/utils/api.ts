import axios from './axios';

export interface Partner {
  url: string;
  image: string;
  name: string;
  id: string;
  description: string;
  visible: boolean;
}

export interface Artist {
  name: string;
  image?: string;
  description?: string;
  Links: { id: string; uri: string; type: string }[];
  id: string;
  index: number;
  visible: boolean;
  eventDate?: string;
  eventPlace: string;
}

interface Place {
  id: string;
  name: string;
  start: string;
  end: string;
  placeType:
    | 'EAT'
    | 'stage'
    | 'food'
    | 'rechargement'
    | 'prevention'
    | 'entry'
    | 'animation'
    | 'aidStation'
    | 'cloakroom'
    | 'other';
  description?: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  start: string;
  end: string;
  image: string;
  name: string;
  Place?: Place;
  PlaceId?: string;
  Partner?: Partner;
  PartnerId?: string;
  description: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
}

export const fetchPartners = () => axios.get<Partner[]>('partners');

export const fetchArtists = () => axios.get<Artist[]>('artists');

export const fetchEvents = () => axios.get<Event[]>('events');
