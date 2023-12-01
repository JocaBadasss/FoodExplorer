import { MaterialDesignContent } from "notistack"
import { styled } from "@mui/material"

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    "&.notistack-MuiContent": {
      fontSize: "1.6rem",
      fontFamily: "Poppins",
      fontWeight: "500",
    },
    "&.notistack-MuiContent-success": {
      backgroundColor: "#04D361",
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: "#92000E",
    },
  })
)
