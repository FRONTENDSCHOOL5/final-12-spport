import { useMutation, useQueryClient } from 'react-query';
import { POST_API, DELETE_API } from '../api/CommonAPI';
import { useAddProductMutation, useDeleteProductMutation } from './useProduct';

function useLikeMutation(setIsLike, setLikeCount) {
  const queryClient = useQueryClient();
  const useAddProductMutate = useAddProductMutation();
  const likePost = async (data) => {
    const { ids, isTeam, post, isGame = false } = data;
    const promiseArr = ids.map(async (id) => {
      const res = await POST_API(`/post/${id}/heart`);
      return res;
    });
    if (isTeam) {
      await useAddProductMutate.mutate({
        post: post,
        ids: ids,
        isGame: isGame,
      });
    }
    return await Promise.all(promiseArr);
  };

  return useMutation((data) => likePost(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['feed', 'postDetail', 'userPost'],
        refetchType: 'active',
      });
      setIsLike(data[0].post.hearted);
      if (setLikeCount) {
        setLikeCount(data[0].post.heartCount);
      }
    },
  });
}

function useUnlikeMutation(accountname, setIsLike, setLikeCount) {
  const queryClient = useQueryClient();
  const useDeleteProductMutate = useDeleteProductMutation(accountname);
  const unlikePost = async (data) => {
    const { ids, isTeam } = data;
    if (isTeam) {
      useDeleteProductMutate.mutateAsync(ids);
    }
    const promiseArr = ids.map(async (id) => {
      const res = await DELETE_API(`/post/${id}/unheart`);
      return res;
    });
    return Promise.all(promiseArr);
  };

  return useMutation((data) => unlikePost(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['feed', 'postDetail', 'userPost'],
        refetchType: 'active',
      });
      setIsLike(data[0].post.hearted);
      if (setLikeCount) {
        setLikeCount(data[0].post.heartCount);
      }
    },
  });
}

export { useLikeMutation, useUnlikeMutation };
