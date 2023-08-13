import { GET_API } from '../api/CommonAPI';
import { useQuery } from 'react-query';

function useProfileQuery(token, accountname) {
  const getProfile = async () => {
    return await GET_API(token, `/profile/${accountname}`);
  };

  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  });
  return [profileQuery.data, profileQuery.isLoading, profileQuery.isError];
}

function useUserPostQuery(token, accountname) {
  const getPost = async () => {
    return await GET_API(token, `/post/${accountname}/userpost`);
  };
  const postQuery = useQuery({
    queryKey: ['userPost'],
    queryFn: () => getPost(),
  });
  console.log(postQuery);
  return [postQuery.data, postQuery.isLoading, postQuery.isError];
}

export { useProfileQuery, useUserPostQuery };
