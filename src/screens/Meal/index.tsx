import { ParamListBase, RouteProp, useNavigation } from "@react-navigation/native"
import { Alert, Button, Modal, Pressable, Text, View, ViewProps } from "react-native"
import { ActionContainer, Container, Content, Description, InfoContainer, InfoSection, Subtitle, Tag, TagIcon, TagText, Title } from "./styles"
import { MealsHeader } from "../../components/MealsHeader"
import { MealType } from "../../components/Meal/meal.type"
import { ButtonIcon } from "../../components/ButtonIcon"
import { useEffect, useState } from "react"
import { deleteMeal } from "../../storage/meal/deleteMeal"
import { Dialog } from "../../components/Dialog"

export type MealProps = ViewProps & {
  route?: RouteProp<ParamListBase>
}

function formatDate(date: Date) {
  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + date.getMonth() + 1).slice(-2)
  const year = date.getFullYear()

  const hours = ("0" + date.getHours()).slice(-2)
  const minutes = ("0" + date.getMinutes()).slice(-2)

  return `${day}/${month}/${year} às ${hours}:${minutes}`
}

export function Meal ({ route, ...rest }: MealProps) {
  const { navigate } = useNavigation()
  const { type, meal } = route?.params as { type?: 'PRIMARY' | 'SECONDARY', meal?: MealType}

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleEditMeal () {
    navigate('mealForm', { meal })
  }

  async function handleDeleteMeal (wantToDeleteMeal: boolean) { 
    if (meal?.id && wantToDeleteMeal) {
      await deleteMeal(meal.id)
      setModalIsOpen(false)
      navigate('home')
      return Alert.alert('Refeição deletada!', 'A refeição foi deletada com sucesso!')
    }

    setModalIsOpen(false)
  }

  return (
    <>
      <Container type={type} { ...rest }>
        <MealsHeader title={'Refeição'} type={type} />
        <Content borred={modalIsOpen}>
          <InfoContainer>
            <InfoSection>
              <Title>{meal?.title}</Title>
              <Description>{meal?.description}</Description>
            </InfoSection>

            <InfoSection>
              <Subtitle>Data e Hora</Subtitle>
              <Description>
                {formatDate(new Date(meal?.date || new Date()))}
              </Description>
            </InfoSection>
            
            <InfoSection>
              <Tag>
                <TagIcon type={meal?.status ? 'PRIMARY' : 'SECONDARY'} />
                <TagText>
                  {meal?.status ? 'dentro da dieta' : 'fora da dieta'}
                </TagText>
              </Tag>
            </InfoSection>
          </InfoContainer>

          <ActionContainer>
            <ButtonIcon 
              title="Editar Refeição" 
              type="PRIMARY" 
              icon='edit' 
              onPress={handleEditMeal}
            />
            <ButtonIcon 
              title="Excluir Refeição" 
              type="SECONDARY"
              icon='delete' 
              onPress={() => setModalIsOpen(true)}
            />
          </ActionContainer>
        </Content>
      </Container>
      <Dialog visible={modalIsOpen} transparent handleOption={handleDeleteMeal} />
    </>
  )
}