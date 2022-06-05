export type Profile = {
  email: string;
  username: Username;
  bio: string | null;
  image: string | null;
};

export type Username = Branded<string, "username">;

export type ProfileDto = { profile: Profile };
