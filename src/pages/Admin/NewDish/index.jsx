import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import UseWidthHook from "../../../hooks/useResize"
import { formatCurrencyOnChange } from "../../../utils/convertPrice"
import { dishFormSchema } from "../../../schemas/newDishFormSchema"

import { Container, Main } from "./styles"

import { Header } from "../../../components/Admin/Header"
import { Footer } from "../../../components/Footer"

import * as Select from "@radix-ui/react-select"
import { Button } from "../../../components/Button"
import { ButtonTextSmall } from "../../../components/ButtonTextSmall"
import { NewTag } from "../../../components/NewTag"

import { PiUploadSimple } from "react-icons/pi"
import { FiChevronDown } from "react-icons/fi"
import { api } from "../../../services/api"

export default function NewDish() {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(dishFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price_cents: "",
      tags: [],
      category: "",
      image: null,
      newTag: "",
    },
  })

  const navigate = useNavigate()

  const Width = UseWidthHook()
  const isMobile = Width < 1024

  const options = [
    { value: "Refeições", label: "Refeições" },
    { value: "Sobremesas", label: "Sobremesas" },
    { value: "Bebidas", label: "Bebidas" },
  ]

  const handleAddNewTag = () => {
    const newTag = getValues("newTag")

    if (newTag === "") {
      return alert("You can not add an empty tag")
    }

    if (newTag.length < 3) {
      alert("A tag deve ter pelo menos 3 caracteres")
      setValue("newTag", "")
      document.getElementById("new-tag").focus()
      return
    }

    if (newTag.length > 20) {
      alert("A tag deve ter no máximo 20 caracteres")
      setValue("newTag", "")
      document.getElementById("new-tag").focus()
      return
    }

    const tags = (getValues("tags") || []).concat(newTag)
    setValue("tags", tags)
    setValue("newTag", "")
  }

  const handleRemoveTag = (tag) => {
    const tags = (getValues("tags") || []).filter((t) => t !== tag)
    setValue("tags", tags)
  }

  function handleKeyPressOnTags(event) {
    if (event.key === "Tab" || event.key === "Enter") {
      event.preventDefault()
      handleAddNewTag()
    }
  }

  const handlePriceChange = (price) => {
    const formatted = formatCurrencyOnChange(price)

    setValue("price", formatted)
  }

  const handleImageChange = (e) => {
    const input = e.target
    let fileName = input.files[0] ? input.files[0].name : null

    if (fileName && fileName.length > 25) {
      fileName = fileName.substring(0, 25) + "..."
    }

    setValue("imageSelected", fileName || "Selecione a imagem")
    setValue("image", input.files[0])
  }

  const handleFormSubmit = async (data) => {
    try {
      const { name, description, price_cents, tags, category } = data

      const imageFile = getValues("image")

      const fileUploadForm = new FormData()
      fileUploadForm.append("image", imageFile)

      const newPrice = price_cents.replace("R$", "").trim()

      const response = await api.post("/dishes", {
        name,
        description,
        price_cents: newPrice,
        tags,
        category,
      })

      const dishId = response.data

      if (dishId) {
        await api.patch(`/dishes/image/${dishId}`, fileUploadForm)
      }

      alert("Prato criado com sucesso")

      navigate(`/details/${dishId}`, {
        replace: true,
      })
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao criar o prato")
      }
    }
  }

  return (
    <Container>
      <Header />

      <Main $width={Width}>
        <ButtonTextSmall
          title="Voltar"
          onClick={() => navigate(-1)}
        />
        {isMobile ? <h1>Novo prato</h1> : <h1>Adicionar prato</h1>}
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {isMobile && (
            <>
              <label htmlFor="dish-image">
                Imagem do prato
                <div id="image-input">
                  <PiUploadSimple size={32} />
                  <span>{watch("imageSelected") || "Selecione a imagem"}</span>
                </div>
                <input
                  type="file"
                  id="dish-image"
                  onChange={(e) => {
                    handleImageChange(e)
                  }}
                />
                {errors.image && errors.image.type === "invalid_type" && (
                  <span id="error">Você deve selecionar uma imagem</span>
                )}
                {errors.image && errors.image.type === "custom" && (
                  <span id="error">O tipo de arquivo deve ser uma imagem</span>
                )}
              </label>
              <label htmlFor="dish-name">
                Nome
                <input
                  type="text"
                  id="dish-name"
                  placeholder="Ex.: Salada Ceasar"
                  {...register("name")}
                />
                {errors.name && <span id="error">{errors.name.message}</span>}
              </label>
              <label htmlFor="dish-category">
                Categoria
                <Controller
                  name="category"
                  control={control}
                  defaultValue={options[0].value}
                  render={({ field: { onChange, value } }) => (
                    <Select.Root onValueChange={onChange}>
                      <Select.Trigger
                        id="dish-category"
                        placeholder="Selecione a categoria"
                        className="select-trigger"
                      >
                        <Select.Value placeholder={"Selecione a categoria"} />
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
                            {options.map((option) => (
                              <Select.Item
                                key={option.value}
                                value={option.value}
                                className="SelectItem"
                              >
                                <Select.ItemText>
                                  {option.label}
                                </Select.ItemText>
                                <Select.ItemIndicator className="SelectItemIndicator" />
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton />
                      </Select.Content>
                    </Select.Root>
                  )}
                />
              </label>
            </>
          )}
          {!isMobile && (
            <div className="wrapper-3-inputs">
              <label htmlFor="dish-image">
                Imagem do prato
                <div id="image-input">
                  <PiUploadSimple size={32} />
                  <span>{watch("imageSelected") || "Selecione a imagem"}</span>
                </div>
                <input
                  type="file"
                  id="dish-image"
                  onChange={(e) => {
                    handleImageChange(e)
                  }}
                />
                {errors.image && errors.image.type === "invalid_type" && (
                  <span id="error">Você deve selecionar uma imagem</span>
                )}
                {errors.image && errors.image.type === "custom" && (
                  <span id="error">O tipo de arquivo deve ser uma imagem</span>
                )}
              </label>
              <label
                htmlFor="dish-name"
                className="width-100"
              >
                Nome
                <input
                  type="text"
                  id="dish-name"
                  placeholder="Ex.: Salada Ceasar"
                  {...register("name")}
                />
                {errors.name && <span id="error">{errors.name.message}</span>}
              </label>
              <label htmlFor="dish-category">
                Categoria
                <Controller
                  name="category"
                  control={control}
                  defaultValue={options[0].value}
                  render={({ field: { onChange, value } }) => (
                    <Select.Root onValueChange={onChange}>
                      <Select.Trigger
                        id="dish-category"
                        placeholder="Selecione a categoria"
                        className="select-trigger"
                      >
                        <Select.Value placeholder={"Selecione a categoria"} />
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
                            {options.map((option) => (
                              <Select.Item
                                key={option.value}
                                value={option.value}
                                className="SelectItem"
                              >
                                <Select.ItemText>
                                  {option.label}
                                </Select.ItemText>
                                <Select.ItemIndicator className="SelectItemIndicator" />
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton />
                      </Select.Content>
                    </Select.Root>
                  )}
                />
              </label>
            </div>
          )}
          {isMobile && (
            <>
              <label htmlFor="dish-ingredients">
                Ingredientes
                <div
                  id="dish-ingredients"
                  className="tags"
                >
                  {(watch("tags") || []).map((tag, index) => (
                    <NewTag
                      key={String(index)}
                      value={tag}
                      onClick={() => {
                        handleRemoveTag(tag)
                      }}
                    />
                  ))}
                  <NewTag
                    id="new-tag"
                    isNew={true}
                    placeholder="Adicionar"
                    value={watch("newTag") || ""}
                    onChange={(e) => setValue("newTag", e.target.value)}
                    onClick={() => handleAddNewTag()}
                    onKeyDown={(e) => {
                      handleKeyPressOnTags(e)
                    }}
                  />
                </div>
                {errors.tags && <span id="error">{errors.tags.message}</span>}
              </label>
              <label htmlFor="dish-price">
                Preço
                <input
                  {...register("price_cents")}
                  type="text"
                  id="dish-price"
                  placeholder="R$ 00,00"
                  value={watch("price") || ""}
                  onChange={(e) => {
                    handlePriceChange(e.target.value)
                  }}
                />
                {errors.price_cents && (
                  <span id="error">{errors.price_cents.message}</span>
                )}
              </label>
            </>
          )}
          {!isMobile && (
            <div className="wrapper-2-inputs">
              <label
                htmlFor="dish-ingredients"
                className="width-100"
              >
                Ingredientes
                <div
                  id="dish-ingredients"
                  className="tags"
                >
                  {(watch("tags") || []).map((tag, index) => (
                    <NewTag
                      key={String(index)}
                      value={tag}
                      onClick={() => {
                        handleRemoveTag(tag)
                      }}
                    />
                  ))}
                  <NewTag
                    id="new-tag"
                    isNew={true}
                    placeholder="Adicionar"
                    value={watch("newTag") || ""}
                    onChange={(e) => setValue("newTag", e.target.value)}
                    onClick={() => handleAddNewTag()}
                    onKeyDown={(e) => {
                      handleKeyPressOnTags(e)
                    }}
                  />
                </div>
                {errors.tags && <span id="error">{errors.tags.message}</span>}
              </label>

              <label htmlFor="dish-price">
                Preço
                <input
                  {...register("price_cents")}
                  type="text"
                  id="dish-price"
                  placeholder="R$ 00,00"
                  value={watch("price") || ""}
                  onChange={(e) => {
                    handlePriceChange(e.target.value)
                  }}
                />
                {errors.price_cents && (
                  <span id="error">{errors.price_cents.message}</span>
                )}
              </label>
            </div>
          )}
          <label htmlFor="dish-description">
            Descrição
            <textarea
              id="dish-description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              maxLength={300}
              {...register("description")}
            ></textarea>
            {errors.description && (
              <span id="error">{errors.description.message}</span>
            )}
          </label>
          <Button title="Salvar alterações" />
        </form>
      </Main>

      <Footer />
    </Container>
  )
}
