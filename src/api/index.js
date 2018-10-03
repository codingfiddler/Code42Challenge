import config from '../config';

const { fetch } = window;

async function getMembers() {
  const endpoint = '/orgs/code42/members';
  const path = `${config.baseUrl}${endpoint}`;
  const fetchConfig = {
    headers: {
      Authorization: `token ${config.key}`,
    },
  };
  const response = await fetch(path, fetchConfig);
  const data = await response.json();
  return data;
}

async function getProfileInfo(login) {
  const endpoint = `/users/${login}`;
  const path = `${config.baseUrl}${endpoint}`;
  const fetchConfig = {
    headers: {
      Authorization: `token ${config.key}`,
    },
  };
  const response = await fetch(path, fetchConfig);
  const data = await response.json();
  return data;
}

async function getMembersWithProfile() {
  const members = await getMembers();
  const profileList = await Promise.all(members.map(m => getProfileInfo(m.login)));
  return profileList;
}


export default {
  getMembers,
  getProfileInfo,
  getMembersWithProfile,
};
