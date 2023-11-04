import { Modal, ModalProps } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ActionsContainer, ModalContent, Title } from "./styles";

type DialogProps = ModalProps & {
  handleOption: (option: boolean) => void
}

export function Dialog ({ visible, handleOption }: DialogProps) { 
  return (
    <Modal visible={visible} transparent animationType="fade">
      <ModalContent>
          <Title>
            Deseja realmente excluir o registro da refeição?
          </Title>
          <ActionsContainer>
            <ButtonIcon title="Cancelar" type="SECONDARY" onPress={() => handleOption(false)} />
            <ButtonIcon title="Sim, excluir" type="PRIMARY" onPress={() => handleOption(true)} />
          </ActionsContainer>
      </ModalContent>
    </Modal>
  )
}