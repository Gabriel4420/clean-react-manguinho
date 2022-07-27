import { render } from '@testing-library/react'
import React from 'react'
import Heading from '.'

describe('Heading Component', () => {
  test('Should render h1 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h1" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    
    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H1')
  })
  test('Should render h2 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h2" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H2')
  })
  test('Should render h3 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h3" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H3')
  })
  test('Should render h4 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h4" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H4')
  })
  test('Should render h5 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h5" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H5')
  })
  test('Should render h6 ', () => {
    const { getByTestId } = render(
      <Heading name="field" type="h6" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H6')
  })

  test('Should default render h1 ', () => {
    const { getByTestId } = render(
      <Heading name="field" title={'Olá'} />,
    )
    const heading = getByTestId('field') as HTMLHeadingElement

    expect(heading.textContent).toEqual('Olá')
    expect(heading.tagName).toBe('H1')
  })
})
