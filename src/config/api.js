const HOST = 'http://localhost:5000'

const BASE_URL=`${HOST}/api`


export const CREATE_ROOT_NODE = `${BASE_URL}/nodes/create/root-node`
export const CREATE_SIGNLE_NODE = `${BASE_URL}/nodes/create/single-node`
export const GET_ALL_NODE = `${BASE_URL}/nodes/get/all-nodes`
export const DELETE_NODE_BY_ID = `${BASE_URL}/nodes/delete/by-id`  /* ?id=65353b59673e11307f7fed36 */