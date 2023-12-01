import React from "react"
import { Container, Plus, X } from "./styles"

export const NewTag = React.forwardRef(
  ({ isNew, value, onClick, ...rest }, ref) => {
    return (
      <Container $isnew={isNew}>
        <input
          type="text"
          value={value}
          readOnly={!isNew}
          ref={ref}
          {...rest}
        />

        <button
          type="button"
          onClick={onClick}
        >
          {isNew ? <Plus size={16} /> : <X size={16} />}
        </button>
      </Container>
    )
  }
)
