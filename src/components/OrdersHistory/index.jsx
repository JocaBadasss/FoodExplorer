import { useEffect, useState } from "react"
import { format } from "date-fns"
import {
  Container,
  OrderSection,
  OrderHead,
  OrderDetails,
  OrderTable,
  Ellipsis,
} from "./styles"

import * as Select from "@radix-ui/react-select"
import { FiChevronDown } from "react-icons/fi"

import { OrdersHistorySkeleton } from "./Skeleton"

import width from "../../hooks/useResize"
import { api } from "../../services/api"

export const OrdersHistory = ({ isAdmin }) => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const Width = width()
  const isMobile = Width < 1024

  const padIdWithZeros = (id) => {
    const paddedId = String(id).padStart(8, "0")
    return paddedId
  }
  const formatDate = (date) => {
    const formattedDate = format(new Date(date), "dd/MM 'às' HH'h'mm")
    return formattedDate
  }

  const fetchStatusChange = async ({ value, order_id }) => {
    try {
      const response = await api.patch("/orders", {
        status: value,
        order_id,
      })

      if (response.status === 201) {
        getAdminData()
      }
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao alterar o status")
      }
    }
  }

  const getUserData = async () => {
    const response = await api.get("/orders")

    const orders = response.data

    const ordersWithFormattedDate = orders.map((order) => ({
      ...order,
      code: padIdWithZeros(order.id),
      date: formatDate(order.date),
    }))

    setOrders(ordersWithFormattedDate)
  }

  const getAdminData = async () => {
    const response = await api.get("/orders/admin")

    const orders = response.data

    const ordersWithFormattedDate = orders.map((order) => ({
      ...order,
      code: padIdWithZeros(order.id),
      date: formatDate(order.date),
    }))

    setOrders(ordersWithFormattedDate)
  }

  useEffect(() => {
    if (isAdmin) {
      getAdminData()
    }

    if (!isAdmin) {
      getUserData()
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <Container
      $width={Width}
      $isAdmin={isAdmin}
    >
      {isMobile && isAdmin && !isLoading && (
        <>
          <h1>Pedidos</h1>
          {orders.map((order) => (
            <OrderSection
              $isAdmin={isAdmin}
              key={order.id}
            >
              <OrderHead>
                <span id="order-code">{order.code}</span>
                <span id="order-date">{order.date}</span>
              </OrderHead>
              <OrderDetails>
                {order.dishs.map((dish, index) => {
                  return (
                    <span key={index}>
                      {dish.quantity} x {dish.name}
                      {index !== order.dishs.length - 1 ? ", " : ""}
                    </span>
                  )
                })}
              </OrderDetails>
              <Select.Root
                value={order.status}
                onValueChange={(value) =>
                  fetchStatusChange({ value, order_id: order.id })
                }
              >
                <Select.Trigger
                  placeholder="Selecione a categoria"
                  className="select-trigger"
                >
                  <Select.Value
                    placeholder={
                      <div>
                        <Ellipsis />
                        Pendente
                      </div>
                    }
                  ></Select.Value>
                  <Select.Icon>
                    <FiChevronDown size={24} />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Content
                  position="popper"
                  className="SelectContent"
                  avoidCollisions={true}
                  side="bottom"
                >
                  <Select.ScrollUpButton className="SelectScrollButton" />
                  <Select.Viewport className="SelectViewport">
                    <Select.Group className="SelectGroup">
                      <Select.Item
                        key={"Pendente"}
                        value={"Pendente"}
                        className="SelectItem"
                      >
                        <Select.ItemText>
                          <strong
                            id="ellipsis"
                            style={{
                              marginRight: "8px",
                            }}
                          ></strong>
                          {"Pendente"}
                        </Select.ItemText>
                        <Select.ItemIndicator className="SelectItemIndicator" />
                      </Select.Item>
                      <Select.Item
                        key={"Preparando"}
                        value={"Preparando"}
                        className="SelectItem"
                      >
                        <Select.ItemText>
                          <strong
                            id="ellipsis"
                            style={{
                              backgroundColor: "#EBA417",
                              marginRight: "8px",
                            }}
                          ></strong>
                          {"Preparando"}
                        </Select.ItemText>
                        <Select.ItemIndicator className="SelectItemIndicator" />
                      </Select.Item>
                      <Select.Item
                        key={"Entregue"}
                        value={"Entregue"}
                        className="SelectItem"
                      >
                        <Select.ItemText>
                          <strong
                            id="ellipsis"
                            style={{
                              backgroundColor: "#04D361",
                              marginRight: "8px",
                            }}
                          ></strong>
                          {"Entregue"}
                        </Select.ItemText>
                        <Select.ItemIndicator className="SelectItemIndicator" />
                      </Select.Item>
                      <Select.Item
                        key={"Cancelado"}
                        value={"Cancelado"}
                        className="SelectItem"
                      >
                        <Select.ItemText>
                          <strong
                            id="ellipsis"
                            style={{
                              backgroundColor: "#C4C4CC",
                              marginRight: "8px",
                            }}
                          ></strong>
                          {"Cancelado"}
                        </Select.ItemText>
                        <Select.ItemIndicator className="SelectItemIndicator" />
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select.Root>
            </OrderSection>
          ))}
        </>
      )}

      {!isMobile && isAdmin && !isLoading && (
        <>
          <h1>Histórico de pedidos</h1>
          <OrderTable $isadmin={isAdmin}>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <Select.Root
                      value={order.status}
                      onValueChange={(value) =>
                        fetchStatusChange({ value, order_id: order.id })
                      }
                    >
                      <Select.Trigger
                        placeholder="Selecione a categoria"
                        className="select-trigger"
                      >
                        <Select.Value
                          placeholder={
                            <div>
                              <strong
                                style={{ marginRight: "8px" }}
                                id="ellipsis"
                              ></strong>
                              Pendente
                            </div>
                          }
                        ></Select.Value>
                        <Select.Icon>
                          <FiChevronDown size={24} />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Content
                        position="popper"
                        className="SelectContent"
                        avoidCollisions={true}
                        side="bottom"
                      >
                        <Select.ScrollUpButton className="SelectScrollButton" />
                        <Select.Viewport className="SelectViewport">
                          <Select.Group className="SelectGroup">
                            <Select.Item
                              key={"Pendente"}
                              value={"Pendente"}
                              className="SelectItem"
                            >
                              <Select.ItemText>
                                <strong
                                  id="ellipsis"
                                  style={{
                                    marginRight: "8px",
                                  }}
                                ></strong>
                                {"Pendente"}
                              </Select.ItemText>
                              <Select.ItemIndicator className="SelectItemIndicator" />
                            </Select.Item>
                            <Select.Item
                              key={"Preparando"}
                              value={"Preparando"}
                              className="SelectItem"
                            >
                              <Select.ItemText>
                                <strong
                                  id="ellipsis"
                                  style={{
                                    backgroundColor: "#EBA417",
                                    marginRight: "8px",
                                  }}
                                ></strong>
                                {"Preparando"}
                              </Select.ItemText>
                              <Select.ItemIndicator className="SelectItemIndicator" />
                            </Select.Item>
                            <Select.Item
                              key={"Entregue"}
                              value={"Entregue"}
                              className="SelectItem"
                            >
                              <Select.ItemText>
                                <strong
                                  id="ellipsis"
                                  style={{
                                    backgroundColor: "#04D361",
                                    marginRight: "8px",
                                  }}
                                ></strong>
                                {"Entregue"}
                              </Select.ItemText>

                              <Select.ItemIndicator className="SelectItemIndicator" />
                            </Select.Item>
                            <Select.Item
                              key={"Cancelado"}
                              value={"Cancelado"}
                              className="SelectItem"
                            >
                              <Select.ItemText>
                                <strong
                                  id="ellipsis"
                                  style={{
                                    backgroundColor: "#C4C4CC",
                                    marginRight: "8px",
                                  }}
                                ></strong>
                                {"Cancelado"}
                              </Select.ItemText>

                              <Select.ItemIndicator className="SelectItemIndicator" />
                            </Select.Item>
                          </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton />
                      </Select.Content>
                    </Select.Root>
                  </td>
                  <td>{order.code}</td>
                  <td>
                    {order.dishs.map((dish, index) => {
                      return (
                        <span key={index}>
                          {dish.quantity} x {dish.name}
                          {index !== order.dishs.length - 1 ? ", " : ""}
                        </span>
                      )
                    })}
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </>
      )}

      {isMobile && !isAdmin && !isLoading && (
        <>
          <h1>Pedidos</h1>
          {orders.map((order) => (
            <OrderSection key={order.id}>
              <OrderHead $orderstatus={order.status}>
                <span id="order-code">{order.code}</span>
                <span className="order-status">
                  <Ellipsis></Ellipsis> {order.status}
                </span>
                <span id="order-date">{order.date}</span>
              </OrderHead>
              <OrderDetails>
                {order.dishs.map((dish, index) => {
                  return (
                    <span key={index}>
                      {dish.quantity} x {dish.name}
                      {index !== order.dishs.length - 1 ? ", " : ""}
                    </span>
                  )
                })}
              </OrderDetails>
            </OrderSection>
          ))}
        </>
      )}

      {isLoading && (
        <OrdersHistorySkeleton
          isAdmin={isAdmin}
          isMobile={isMobile}
          Width={Width}
          orders={orders}
        />
      )}

      {!isMobile && !isAdmin && !isLoading && (
        <>
          <h1>Histórico de pedidos</h1>
          <OrderTable>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <Ellipsis $orderstatus={order.status}></Ellipsis>
                    <span>{order.status}</span>
                  </td>
                  <td>{order.code}</td>
                  <td>
                    {order.dishs.map((dish, index) => {
                      return (
                        <span key={index}>
                          {dish.quantity} x {dish.name}
                          {index !== order.dishs.length - 1 ? ", " : ""}
                        </span>
                      )
                    })}
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </>
      )}
    </Container>
  )
}
