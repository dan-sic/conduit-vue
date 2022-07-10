export type ProfileBase = {
  username: Username;
  bio: string | null;
  image: string | null;
};

export type UserProfile = ProfileBase & {
  following: boolean;
};

export type Username = Branded<string, "username">;

export type UserProfileDto = { profile: UserProfile };
