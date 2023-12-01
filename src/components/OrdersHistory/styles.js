import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
  }

  #ellipsis {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
    margin-right: 0.8rem;
  }

  .select-trigger {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 4.8rem;

    padding: 1.3rem 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 0.5rem;
    border: none;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR}
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .SelectContent {
    width: var(--radix-select-trigger-width);
    max-height: var(--radix-select-content-available-height);
  }

  .SelectItem {
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.5rem;

    margin-bottom: 0.1rem;

    cursor: pointer;
  }

  @media (min-width: 1024px) {
    .select-trigger {
      border-radius: unset;
    }

    .SelectItem {
      border-radius: unset;
    }
  }
`
export const OrderSection = styled.section`
  width: 35.8rem;
  height: ${({ $isAdmin }) => ($isAdmin ? "auto" : "11.4rem")};

  display: grid;
  gap: 1.6rem;

  padding: ${({ $isAdmin }) => ($isAdmin ? "2.4rem" : "0.8rem 2rem")};

  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.COLORS.DARK_1000};

  border-radius: 0.8rem;
  ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};

  .skeleton-table-select {
    width: 100%;
    height: 4.8rem;
  }

  @media (max-width: 768px) {
    height: unset;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const OrderHead = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  #order-status {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  #ellipsis {
    background-color: ${({ $orderstatus, theme }) =>
      $orderstatus === "Pendente" && theme.COLORS.TINTS_TOMATO_300};
    background-color: ${({ $orderstatus }) =>
      $orderstatus === "Preparando" && "#FBA94C"};
    background-color: ${({ $orderstatus }) =>
      $orderstatus === "Entregue" && "#04D361"};
    background-color: ${({ $orderstatus, theme }) =>
      $orderstatus === "Cancelado" && theme.COLORS.LIGHT_400};
  }

  .skeleton-code {
    width: 4.8rem;
    height: 2.2rem;
  }

  .skeleton-status {
    width: 7.5rem;
    height: 2.2rem;
  }

  .skeleton-date {
    width: 10rem;
    height: 2.2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`

export const OrderDetails = styled.p`
  @media (min-width: 768px) {
    text-align: center;
  }
`

export const OrderTable = styled.table`
  margin-bottom: 10rem;

  border-collapse: collapse;
  thead {
    border-radius: 0.8rem 0.8rem 0 0;

    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.COLORS.DARK_1000};

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_BOLD};

    > tr {
      > th:nth-child(1),
      th:nth-child(2),
      th:nth-child(4) {
        width: 15.1rem;
      }
      > th {
      }
      > th:first-child {
        width: ${({ $isadmin }) => ($isadmin ? "22.3rem" : " 15.1rem")};
      }
    }
  }

  tbody {
    box-shadow: inset -2px 0 0 0 ${({ theme }) => theme.COLORS.DARK_1000},
      inset 2px 0 0 0 ${({ theme }) => theme.COLORS.DARK_1000},
      inset 0 -2px 0 0 ${({ theme }) => theme.COLORS.DARK_1000};

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
  }

  th {
    box-shadow: inset -2px 0 0 0 ${({ theme }) => theme.COLORS.DARK_1000},
      inset 0 0 0 0 ${({ theme }) => theme.COLORS.DARK_1000};

    padding: 2.1rem 2.4rem;
  }

  th:last-child {
    box-shadow: none;
  }

  td {
    box-shadow: inset -2px 0 0 0 ${({ theme }) => theme.COLORS.DARK_1000},
      inset 0 -2px 0 0 ${({ theme }) => theme.COLORS.DARK_1000};

    padding: 1.6rem 2.4rem;
  }

  td:first-child {
    white-space: nowrap;
    > span {
      padding-left: 0.8rem;
    }
  }

  th,
  td {
    text-align: start;
  }

  #ellipsis {
    background-color: ${({ $orderstatus, theme }) =>
      $orderstatus === "Pendente" && theme.COLORS.TINTS_TOMATO_300};
    background-color: ${({ $orderstatus }) =>
      $orderstatus === "Preparando" && "#FBA94C"};
    background-color: ${({ $orderstatus }) =>
      $orderstatus === "Entregue" && "#04D361"};
    background-color: ${({ $orderstatus, theme }) =>
      $orderstatus === "Cancelado" && theme.COLORS.LIGHT_400};
  }

  .skeleton-table-th-width {
    width: 15.1rem !important;
  }

  .skeleton-table-th {
    width: 7rem !important;
  }

  .skeleton-table-th-details {
    width: 10rem !important;
  }

  .skeleton-table-td {
    padding-left: 0 !important;
    width: 10rem !important;
  }

  .skeleton-table-td-details {
    width: 50rem;
  }

  @media (min-width: 1024px) and (max-width: 1300px) {
    .skeleton-table-td-details {
      width: 26rem;
    }
  }

  @media (min-width: 1024px) {
    .skeleton-table-th-width {
      &:first-child {
        width: 22.3rem !important;
      }
    }

    .skeleton-table-th {
      width: 8rem !important;
    }

    .skeleton-table-th-details {
      width: 10rem !important;
    }

    .skeleton-table-td {
      padding-left: 0 !important;
      width: 10rem !important;
    }

    .skeleton-table-select {
      width: 100%;
      height: 4.8rem;

      border-radius: 0;
    }
  }

  @media (min-width: 1300px) {
    .skeleton-table-td-details {
      width: 50rem;
    }
  }
`

export const Ellipsis = styled.strong`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
  background-color: ${({ $orderstatus, theme }) =>
    $orderstatus === "Pendente" && theme.COLORS.TINTS_TOMATO_300};
  background-color: ${({ $orderstatus }) =>
    $orderstatus === "Preparando" && "#FBA94C"};
  background-color: ${({ $orderstatus }) =>
    $orderstatus === "Entregue" && "#04D361"};
  background-color: ${({ $orderstatus, theme }) =>
    $orderstatus === "Cancelado" && theme.COLORS.LIGHT_400};
`
