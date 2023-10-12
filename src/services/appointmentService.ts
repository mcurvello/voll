import api from "./api";

export async function scheduleAppointment(
  data: Date,
  especialistaId: string,
  pacienteId: string
) {
  try {
    const result = await api.post("/consulta", {
      especialista: especialistaId,
      paciente: pacienteId,
      data: data,
    });
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
