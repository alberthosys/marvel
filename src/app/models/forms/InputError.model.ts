export interface InputError {
  type: string;
  message: string;
}

export const REQUIRED_FIELD = {
  type: 'required',
  message: 'Este campo es requerido',
};
