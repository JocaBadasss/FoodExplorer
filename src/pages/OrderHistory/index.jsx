import { Container, Main } from "./styles"

import { OrdersHistory } from "../../components/OrdersHistory"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export default function OrderHistory() {
  return (
    <Container>
      <Header />
      <Main>
        <OrdersHistory />
      </Main>
      <Footer />
    </Container>
  )
}
