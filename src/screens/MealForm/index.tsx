import { Text, View } from "react-native";
import { MealType } from "../../components/Meal/meal.type";
import { MealsHeader } from "../../components/MealsHeader";
import { MealProps } from "../Meal";
import { Container, Content } from "../Meal/styles";
import { ActionContainer, FormContainer, FormSection, Label } from "./styles";
import { Input } from "../../components/Input";
import { ButtonIcon } from "../../components/ButtonIcon";
import { SelectOption } from "../../components/Select";
import { useState } from "react";
import { formatDate } from "../../utils/date.util";

export function MealForm ({ route, ...rest }: MealProps ) {
  const { meal } = route?.params as { meal?: MealType}

  const [name, setName] = useState<string>(meal?.title || '')
  const [description, setDescription] = useState<string>(meal?.description || '')
  const [date, setDate] = useState<string>(meal?.date || '')
  const [time, setTime] = useState<string>(meal?.date || '')
  const [status, setStatus] = useState<boolean>(meal?.status || true)

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
              filled={false} 
            />
          </FormSection>

          <FormSection>
            <Label>Descrição</Label>
            <Input 
              filled={false}
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
          </FormSection>

          <View style={{ flexDirection: 'row', gap: 8 }}>
            <FormSection style={{ width: '50%' }}>
              <Label>Data</Label>
              <Input
                filled={false}
                value={date}
                onChangeText={setDate}
              />
            </FormSection>
            <FormSection style={{ width: '50%' }}>
              <Label>Hora</Label>
              <Input
                value={time}
                onChangeText={setTime}
                filled={false}
              />
            </FormSection>
          </View>

          <FormSection>
            <Label>Está dentro da dieta?</Label>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <SelectOption
                type="PRIMARY" 
                title="Sim" 
                selected={status}
                onPress={() => setStatus(true)}
              />
              <SelectOption 
                type="SECONDARY" 
                title="Não" 
                selected={!status}
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
          />
        </ActionContainer>
      </Content>
    </Container>
  )
}