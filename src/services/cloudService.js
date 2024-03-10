import http from '@/utils/http';
import { awaitWrap } from '@/utils/utils';

export const getClouds = async (data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: '/pixiu/clusters',
      data,
    }),
  );
  return [err, result];
};

export const deleteCloudById = async (id) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'delete',
      url: `/pixiu/clusters/${id}`,
    }),
  );
  return [err, result];
};

export const changeCluserAliasName = async (id, resource_version, alias_name) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'put',
      url: `/pixiu/clusters/${id}`,
      data: {
        resource_version: resource_version,
        alias_name: alias_name,
      },
    }),
  );

  return [err, result];
};
