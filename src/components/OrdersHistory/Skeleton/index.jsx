import {
  Container,
  OrderSection,
  OrderHead,
  OrderDetails,
  OrderTable,
  Ellipsis,
} from "../styles"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const OrdersHistorySkeleton = ({ Width, isMobile, isAdmin, orders }) => {
  return (
    <Container
      $width={Width}
      $isAdmin={isAdmin}
    >
      {isMobile && !isAdmin && (
        <>
          <h1>Pedidos</h1>
          {orders.map((order) => (
            <OrderSection key={order.id}>
              <OrderHead $orderstatus={order.status}>
                <span id="order-code">
                  <Skeleton className="skeleton-code" />
                </span>
                <span className="order-status">
                  <Skeleton className="skeleton-status" />
                </span>
                <span id="order-date">
                  <Skeleton className="skeleton-date" />
                </span>
              </OrderHead>
              <OrderDetails>
                <Skeleton count={2} />
              </OrderDetails>
            </OrderSection>
          ))}
        </>
      )}

      {isMobile && isAdmin && (
        <>
          <h1>Pedidos</h1>
          {orders.map((order) => (
            <OrderSection
              key={order.id}
              $isAdmin={isAdmin}
            >
              <OrderHead $orderstatus={order.status}>
                <span id="order-code">
                  <Skeleton className="skeleton-code" />
                </span>
                <span id="order-date">
                  <Skeleton className="skeleton-date" />
                </span>
              </OrderHead>
              <OrderDetails>
                <Skeleton count={2} />
              </OrderDetails>
              <Skeleton className="skeleton-table-select" />
            </OrderSection>
          ))}
        </>
      )}

      {!isMobile && !isAdmin && (
        <>
          <h1>Histórico de pedidos</h1>
          <OrderTable>
            <thead>
              <tr>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
                <th>
                  <Skeleton className="skeleton-table-th-details" />
                </th>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>
                      <span>
                        <Skeleton className="skeleton-table-td" />
                      </span>
                    </strong>
                  </td>
                  <td>
                    <Skeleton className="skeleton-table-td" />
                  </td>
                  <td>
                    <span>
                      <Skeleton className="skeleton-table-td-details" />
                    </span>
                  </td>
                  <td>
                    <Skeleton className="skeleton-table-td" />
                  </td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </>
      )}

      {!isMobile && isAdmin && (
        <>
          <h1>Histórico de pedidos</h1>
          <OrderTable>
            <thead>
              <tr>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
                <th>
                  <Skeleton className="skeleton-table-th-details" />
                </th>
                <th className="skeleton-table-th-width">
                  <Skeleton className="skeleton-table-th" />
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>
                      <Skeleton className="skeleton-table-select" />
                    </strong>
                  </td>
                  <td>
                    <Skeleton className="skeleton-table-td" />
                  </td>
                  <td>
                    <span>
                      <Skeleton className="skeleton-table-td-details" />
                    </span>
                  </td>
                  <td>
                    <Skeleton className="skeleton-table-td" />
                  </td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </>
      )}
    </Container>
  )
}
