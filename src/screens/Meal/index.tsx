import { ParamListBase, RouteProp } from "@react-navigation/native"
import { Button, View, ViewProps } from "react-native"
import { ActionContainer, Container, Content, Description, InfoContainer, InfoSection, Subtitle, Tag, TagIcon, TagText, Title } from "./styles"
import { MealsHeader } from "../../components/MealsHeader"
import { MealType } from "../../components/Meal/meal.type"
import { ButtonIcon } from "../../components/ButtonIcon"

type MealProps = ViewProps & {
  route?: RouteProp<ParamListBase>
}

function formatDate(date: Date) {
  const currentDate = date || new Date()
  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + date.getMonth() + 1).slice(-2)
  const year = date.getFullYear()

  const hours = ("0" + date.getHours()).slice(-2)
  const minutes = ("0" + date.getMinutes()).slice(-2)

  return `${day}/${month}/${year} às ${hours}:${minutes}`
}

export function Meal ({ route, ...rest }: MealProps) {
  const { type, meal } = route?.params as { type?: 'PRIMARY' | 'SECONDARY', meal?: MealType}

  return (
    <Container type={type} { ...rest }>
      <MealsHeader type={type} />
      <Content>
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
            />
          <ButtonIcon 
            title="Excluir Refeição" 
            type="SECONDARY"
            icon='delete' 
          />
        </ActionContainer>
      </Content>
    </Container>
  )
}