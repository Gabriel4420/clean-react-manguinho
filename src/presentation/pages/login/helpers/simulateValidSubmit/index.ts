import { RenderResult, fireEvent, waitFor } from "@testing-library/react"
import populateEmailField from "../populateEmailField"
import faker from "faker"
import populatePasswordField from "../populatePasswordField"

const simulateValidSubmit = async (
  //

  sut: RenderResult,

  email = faker.internet.email(),

  password = faker.internet.password(),

  //
): Promise<void> => {
  //

  populateEmailField(sut, email)

  populatePasswordField(sut, password)

  const form = sut.getByTestId('form')

  fireEvent.submit(form)

  await waitFor(() => form)
}

export default simulateValidSubmit
