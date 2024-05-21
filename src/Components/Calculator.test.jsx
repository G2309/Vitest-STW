import { render, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'
import '@testing-library/jest-dom'
import React from 'react'

describe('Calculator', () => {
  test('realiza cálculos correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('10')
  })

  test('maneja la división por cero', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('0'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('Infinity')
  })

  test('realiza la suma correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('5')
  })

  test('realiza la resta correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('2')
  })

  test('realiza la multiplicación correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('6')
  })

  test('maneja los números negativos correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('+/-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('-10')
  })

  test('realiza la división correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('9'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('3')
  })


  test('maneja el botón "C" correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('='))
    fireEvent.click(getByText('C'))

    expect(getByTestId('result')).toHaveValue('')
  })


  test('maneja los números negativos correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('+/-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('-10')
  })


  test('maneja el botón "." correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('7.3')
  })

  test('maneja el error correctamente', () => {
    const { getByText, getByTestId } = render(<Calculator />)

    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('='))

    expect(getByTestId('result')).toHaveValue('Error')
  })
})

