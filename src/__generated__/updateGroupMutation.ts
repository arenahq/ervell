/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateGroupMutation
// ====================================================

export interface updateGroupMutation_update_group_group_invite {
  __typename: "GroupInviteType";
  code: string | null;
  href: string | null;
}

export interface updateGroupMutation_update_group_group_can {
  __typename: "GroupCan";
  manage: boolean | null;
  manage_users: boolean | null;
}

export interface updateGroupMutation_update_group_group_owner {
  __typename: "User";
  id: number;
  name: string;
  href: string | null;
  initials: string;
  avatar: string | null;
}

export interface updateGroupMutation_update_group_group_memberships_member {
  __typename: "User";
  id: number;
  name: string;
  href: string | null;
  initials: string;
  avatar: string | null;
}

export interface updateGroupMutation_update_group_group_memberships_can {
  __typename: "GroupMembershipCan";
  manage: boolean | null;
}

export interface updateGroupMutation_update_group_group_memberships {
  __typename: "GroupMembership";
  id: number;
  member: updateGroupMutation_update_group_group_memberships_member | null;
  can: updateGroupMutation_update_group_group_memberships_can | null;
}

export interface updateGroupMutation_update_group_group {
  __typename: "Group";
  id: number;
  name: string;
  href: string | null;
  description: string | null;
  invite: updateGroupMutation_update_group_group_invite | null;
  can: updateGroupMutation_update_group_group_can | null;
  owner: updateGroupMutation_update_group_group_owner;
  memberships: updateGroupMutation_update_group_group_memberships[] | null;
}

export interface updateGroupMutation_update_group {
  __typename: "UpdateGroupMutationPayload";
  group: updateGroupMutation_update_group_group;
}

export interface updateGroupMutation {
  update_group: updateGroupMutation_update_group | null;
}

export interface updateGroupMutationVariables {
  id: string;
  name?: string | null;
  description?: string | null;
}
