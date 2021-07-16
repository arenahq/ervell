/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCreditCard
// ====================================================

export interface AddCreditCard_add_credit_card_customer_default_credit_card {
  __typename: "CreditCard";
  id: string | null;
  brand: string | null;
  last4: string | null;
  exp_year: string | null;
  exp_month: string | null;
}

export interface AddCreditCard_add_credit_card_customer_credit_cards {
  __typename: "CreditCard";
  id: string | null;
  brand: string | null;
  last4: string | null;
  exp_year: string | null;
  exp_month: string | null;
}

export interface AddCreditCard_add_credit_card_customer {
  __typename: "Customer";
  id: number;
  default_credit_card: AddCreditCard_add_credit_card_customer_default_credit_card | null;
  credit_cards: AddCreditCard_add_credit_card_customer_credit_cards[] | null;
}

export interface AddCreditCard_add_credit_card {
  __typename: "AddCreditCardMutationPayload";
  customer: AddCreditCard_add_credit_card_customer;
}

export interface AddCreditCard {
  add_credit_card: AddCreditCard_add_credit_card | null;
}

export interface AddCreditCardVariables {
  token: string;
}
