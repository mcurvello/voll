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
