export type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Auth = 'AUTH',
  UpdateUser = 'UPDATE_USER',
  InputCreatePlaylist = 'INPUT_CREATE_PLAYLIST',
  UpdatePlaylists = 'UPDATE_PLAYLISTS',
  DetailPlaylists = 'DETAIL_PLAYLISTS',

  SnapshotUpdate = 'SNAPSHOT_UPDATE',
}

export type AuthPayload = {
  [Types.Auth]: {
    token: string;
  };
};

export type UpdateUserPayload = {
  [Types.UpdateUser]: {
    images: [
      {
        url: string;
      },
    ];
    display_name: string;
    id: string;
    followers: {
      total: number;
    };
  };
};

export type InputCreatePlaylistPayload = {
  [Types.InputCreatePlaylist]: {
    value: string;
  };
};

export type UpdatePlaylistsPayload = {
  [Types.UpdatePlaylists]: {
    id: string;
    name: string;
    description?: string;
    images: [
      {
        url?: string;
      },
    ];
  };
};

export type DetailPlaylistsPayload = {
  [Types.DetailPlaylists]: {
    id: string;
    description: string;
    images: [
      {
        url: string;
      },
    ];
    name: string;
    owner: {
      display_name: string;
    };
  };
};

export type SnapshotUpdatePayload = {
  [Types.SnapshotUpdate]: {
    snapshot_id: string;
  };
};
