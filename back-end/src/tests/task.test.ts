import { mocked } from "jest-mock"
import * as taskService from "../services/task-service"

jest.mock("../services/task-service", () => ({
  createTask: jest.fn(),
  getAllTasks: jest.fn(),
  updateTask: jest.fn(),
  updateTaskCompleted: jest.fn(),
  deleteTask: jest.fn(),
}))

const mockedTaskService = mocked(taskService, { shallow: false })

describe("Teste com Jest | Task", () => {
  const mockTask = {
    id: "1",
    title: "Teste de tarefa",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Deve criar uma tarefa com sucesso", async () => {
    mockedTaskService.createTask.mockResolvedValueOnce(mockTask)

    const result = await taskService.createTask({
      title: "Teste de tarefa",
    })

    expect(taskService.createTask).toHaveBeenCalled()
    expect(result).toEqual(mockTask)
  })

  it("Deve retornar todas as tarefas", async () => {
    mockedTaskService.getAllTasks.mockResolvedValueOnce([mockTask])

    const result = await taskService.getAllTasks()

    expect(taskService.getAllTasks).toHaveBeenCalled()
    expect(result).toEqual([mockTask])
  })

  it("Deve atualizar tarefa", async () => {
    mockedTaskService.updateTask.mockResolvedValueOnce(mockTask)

    const result = await taskService.updateTask({
      id: "1",
      title: "Teste Atualizado",
    })

    expect(taskService.updateTask).toHaveBeenCalledWith({
      id: "1",
      title: "Teste Atualizado",
    })
    expect(result).toEqual(mockTask)
  })

  it("Deve completar uma tarefa", async () => {
    const updatedMock = { ...mockTask, completed: true }
    mockedTaskService.updateTaskCompleted.mockResolvedValueOnce(updatedMock)

    const result = await taskService.updateTaskCompleted({ id: "1" })

    expect(taskService.updateTaskCompleted).toHaveBeenCalledWith({ id: "1" })
    expect(result.completed).toBe(true)
  })

  it("Deve deletar uma tarefa", async () => {
    mockedTaskService.deleteTask.mockResolvedValueOnce(mockTask)

    const result = await taskService.deleteTask({ id: "1" })

    expect(taskService.deleteTask).toHaveBeenCalledWith({ id: "1" })
    expect(result).toEqual(mockTask)
  })
})
