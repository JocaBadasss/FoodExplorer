import { Container, Card, IncludeContainer } from "../styles"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import UseWidthHook from "../../../hooks/useResize"

import { Button } from "../../Button"

export const DishSkeleton = ({ isAdmin }) => {
  const Width = UseWidthHook()

  return (
    <Container $isadmin={isAdmin}>
      <Card $isadmin={isAdmin}>
        <button
          role="button"
          className="favorite"
        >
          <Skeleton
            width={28}
            height={28}
            circle
          />
        </button>

        <Skeleton
          circle
          className="image"
        />

        <button
          role="button"
          className="button-title"
        >
          <h1>
            {" "}
            <Skeleton className="skeleton-title" />{" "}
          </h1>
        </button>

        {Width < 768 ? (
          <></>
        ) : (
          <p>
            {" "}
            <Skeleton
              count={2}
              className="skeleton-description"
            />
          </p>
        )}
        <span>
          <Skeleton className="skeleton-price" />
        </span>
        {!isAdmin && (
          <IncludeContainer>
            {Width < 1024 ? (
              <>
                <div>
                  <Skeleton
                    width={100}
                    height={32}
                  />
                </div>
                <Skeleton
                  width={162}
                  height={48}
                  borderRadius={8}
                />
              </>
            ) : (
              <>
                <div>
                  <Skeleton
                    width={100}
                    height={32}
                  />
                </div>
                <Skeleton
                  width={92}
                  height={48}
                  borderRadius={8}
                />
              </>
            )}
          </IncludeContainer>
        )}
      </Card>
    </Container>
  )
}
