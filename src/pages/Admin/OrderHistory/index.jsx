import { Container, Main } from "./styles"

import { OrdersHistory } from "../../../components/OrdersHistory"
import { Header } from "../../../components/Admin/Header"
import { Footer } from "../../../components/Footer"

export default function OrderHistory() {
  return (
    <Container>
      <Header />
      <Main>
        <OrdersHistory isAdmin={true} />
      </Main>
      <Footer />
    </Container>
  )
}
