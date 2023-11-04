import { Alert, View } from "react-native";
import { MealType } from "../../components/Meal/meal.type";
import { MealsHeader } from "../../components/MealsHeader";
import { MealProps } from "../Meal";
import { Container, Content } from "../Meal/styles";
import { ActionContainer, FormContainer, FormSection, Label } from "./styles";
import { Input } from "../../components/Input";
import { ButtonIcon } from "../../components/ButtonIcon";
import { SelectOption } from "../../components/Select";
import { useState } from "react";
import { MaskInput } from "../../components/Input/MaskInput";
import { Masks } from 'react-native-mask-input'
import { AppError } from "../../utils/appError.util";
import { createMeal } from "../../storage/meal/createMeal";
import { MealDTO } from "../../storage/meal/meal.dto";
import { useNavigation } from "@react-navigation/native";
import { updateMeal } from "../../storage/meal/updateMeal";
import { getTime } from "../../utils/date.util";

function formatDate (date: Date) {
  const day = ("0" + date.getDate()).slice(-2)
  const month = ("0" + date.getMonth() + 1).slice(-2)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function MealForm ({ route, ...rest }: MealProps ) {
  const { navigate } = useNavigation()

  const { meal } = route?.params as { meal?: MealType}

  const [name, setName] = useState<string | undefined>(meal?.title)
  const [description, setDescription] = useState<string | undefined>(meal?.description)
  const [date, setDate] = useState<string | undefined>(meal?.date ? formatDate(new Date(meal.date)) : undefined)
  const [time, setTime] = useState<string | undefined>(meal?.date ? getTime(new Date(meal.date)) : undefined)
  const [status, setStatus] = useState<boolean | undefined>(meal?.status)

  async function handleSubmit () {
    const splitedDate = date!.split('/')
    const splitedTime = time!.split(':')
    
    try {
      const mealDTO: MealDTO = {
        title: name!,
        description: description!,
        status: status!,
        date: new Date(`${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}T${splitedTime[0]}:${splitedTime[1]}:00`).toISOString()
      }

      if (meal?.id) {
        await updateMeal(meal.id, mealDTO)
        navigate('home')
      } else {
        await createMeal(mealDTO)
        navigate('feedback', { status: status! })
      }
      
    } catch (error) {
      console.log(error)
      if (error instanceof AppError) {
        Alert.alert('Ops!', error.message)
      } else {
        Alert.alert('Ops!', 'Não foi possível cadastrar refeição')
      }
    }
  }

  return (
    <Container { ...rest }>
      <MealsHeader 
        title={meal ? 'Editar Refeição' : 'Nova Refeição'} 
      />
      <Content>
        <FormContainer>
          <FormSection>
            <Label>Nome</Label>
            <Input
              value={name}
              onChangeText={setName}
            />
          </FormSection>

          <FormSection>
            <Label>Descrição</Label>
            <Input 
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
          </FormSection>

          <View style={{ flexDirection: 'row', gap: 8 }}>
            <FormSection style={{ width: '50%' }}>
              <Label>Data</Label>
              <MaskInput
                value={date}
                onChangeText={setDate}
                mask={Masks.DATE_DDMMYYYY}
                keyboardType="number-pad"
              />
            </FormSection>
            <FormSection style={{ width: '50%' }}>
              <Label>Hora</Label>
              <MaskInput
                value={time}
                onChangeText={setTime}
                mask={[ /\d/, /\d/, ":", /\d/, /\d/ ]}
                keyboardType="number-pad"
              />
            </FormSection>
          </View>

          <FormSection>
            <Label>Está dentro da dieta?</Label>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <SelectOption
                type="PRIMARY" 
                title="Sim" 
                selected={status!}
                onPress={() => setStatus(true)}
              />
              <SelectOption 
                type="SECONDARY" 
                title="Não" 
                selected={!status!}
                onPress={() => setStatus(false)}
              />
            </View>

          </FormSection>
        </FormContainer>
        <ActionContainer>
          <ButtonIcon 
            title={ meal ? 
              'Salvar alterações' : 
              'Cadastrar Refeição' 
            } 
            type={'PRIMARY'}
            onPress={handleSubmit}
            disabled={
              !name || 
              !description || 
              !date || 
              !time || 
              status === undefined
            }
          />
        </ActionContainer>
      </Content>
    </Container>
  )
}