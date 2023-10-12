import { IPatient } from "../interfaces/IPatient";
import api from "./api";

export async function createPatient(patient: IPatient) {
  if (!patient) return null;

  try {
    const result = await api.post("/paciente", patient);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPatient(id: string) {
  try {
    const result = await api.get(`/paciente/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAppointmentsPatient(id: string) {
  try {
    const result = await api.get(`/paciente/${id}/consultas`);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
