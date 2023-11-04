import { useState } from 'react'
import { MaskInpuContainer } from './styles'
import { MaskInputProps } from 'react-native-mask-input'

export function MaskInput (props: MaskInputProps) {
  const [filled, setFilled] = useState(false)

  return (
    <MaskInpuContainer
      { ...props }
      onFocus={() => setFilled(true)}
      onBlur={() => setFilled(false)}
      filled={filled}
    />
  )
}