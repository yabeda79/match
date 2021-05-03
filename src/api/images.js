import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: 'ihnyzbSe2SNeccUWfV4tZWQFbMaapIvg7L-vuf5mUjs',
});

export const getImages = (num) => {
  return unsplash.photos.list({ page: 1, perPage: num })
};
