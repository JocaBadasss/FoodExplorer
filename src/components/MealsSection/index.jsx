// import { register } from "swiper/element/bundle"
// import "swiper/css"
// import "swiper/css/navigation"
// import { Swiper, SwiperSlide } from "swiper/react"

// import UseWidth from "../../hooks/useResize"

// import { Container } from "./styles"

// register()

// export const MealsSection = ({ data, ...rest }) => {
//   const [navigation, setNavigation] = useState(true)

//   const Width = UseWidth()

//   return (
//     <Container
//       $width={Width}
//       {...rest}
//     >
//       <h1>{data.category}</h1>

//       <div className="Cards">
//         <Swiper
//           slidesPerView={3.5}
//           navigation={Width < 768 ? false : true}
//           loop={true}
//           spaceBetween={27}
//           breakpoints={{
//             320: {
//               slidesPerView: 1.2,
//               centeredSlides: true,
//               spaceBetween: 8,
//             },
//             360: {
//               slidesPerView: 1.6,
//               centeredSlides: true,
//               spaceBetween: 8,
//             },
//             410: {
//               slidesPerView: 1.78,
//               centeredSlides: true,
//               spaceBetween: 16,
//             },
//             480: {
//               slidesPerView: 2,
//               centeredSlides: true,
//               spaceBetween: 18,
//             },
//             560: {
//               slidesPerView: 2.3,
//               centeredSlides: true,
//               spaceBetween: 18,
//             },
//             640: {
//               slidesPerView: 2.6,
//               centeredSlides: true,
//               spaceBetween: 18,
//             },
//             768: {
//               slidesPerView: 2.78,
//               centeredSlides: true,

//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 2.8,
//               spaceBetween: 27,
//               centeredSlides: false,
//             },
//             1366: {
//               slidesPerView: 3.5,
//               spaceBetween: 27,
//               centeredSlides: false,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <Meals />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </Container>
//   )
// }
