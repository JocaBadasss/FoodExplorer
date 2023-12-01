import { styled } from "styled-components"

export const Container = styled.div``

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 1.1rem 3.2rem 5.3rem;

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .select-trigger {
      display: flex;
      justify-content: space-between;

      width: 100%;
      height: 4.8rem;

      padding: 1.3rem 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border-radius: 0.8rem;
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
      border-radius: 0.8rem;
      margin-bottom: 0.1rem;
    }

    .tags {
      width: 100%;
      min-height: 4.8rem;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;

      padding: 0.4rem 0.8rem;
    }

    textarea {
      width: 100%;
      height: 17.2rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;
      border: none;
      padding: 1.4rem;
      resize: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    #dish-image {
      display: none;
    }

    #image-input {
      width: 100%;
      height: 4.8rem;
      padding: 1.2rem 3.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      > span {
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        white-space: nowrap;
      }

      cursor: pointer;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}

      >input {
        width: 100%;
        height: 4.8rem;
        padding: 1.6rem 1.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.8rem;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .buttons-wrapper {
      display: flex;
      gap: 3.2rem;

      > button:first-child {
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
      > button:nth-child(2) {
        min-width: fit-content;
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
      }
    }

    @media (min-width: 1024px) {
      .buttons-wrapper {
        width: fit-content;
        align-self: flex-end;
      }
    }
  }

  .wrapper-3-inputs,
  .wrapper-2-inputs {
    display: flex;
    gap: 3.2rem;
  }

  @media (min-width: 1024px) {
    > form {
      .select-trigger {
        width: 36.4rem;
      }

      .width-100 {
        width: 100%;
      }

      > button {
        display: flex;
        align-self: flex-end;
        width: 17.2rem;
      }
    }
  }

  #error {
    color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }
`
